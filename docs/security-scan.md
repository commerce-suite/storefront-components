# Documentação do Pipeline de Verificação de Segurança

## Visão Geral

Este documento explica a etapa de verificação de segurança integrada ao nosso pipeline de CI/CD usando o **Shai-Hulud-2.0-Detector**, uma ferramenta de detecção de ataques à cadeia de suprimentos (supply chain).

---

## O que é o Shai-Hulud-2.0-Detector?

O **Shai-Hulud-2.0-Detector** é uma GitHub Action projetada para detectar pacotes comprometidos e ataques à cadeia de suprimentos em projetos Node.js. Ele verifica as dependências do seu projeto contra um banco de dados constantemente atualizado de pacotes maliciosos conhecidos.

### Principais Funcionalidades

- 🔍 **Detecção de Ataques à Cadeia de Suprimentos** - Identifica pacotes que foram comprometidos ou contêm código malicioso
- 📦 **Verificação de Lockfiles** - Analisa `package-lock.json` e `yarn.lock` em busca de dependências vulneráveis
- ⚡ **Execução Rápida** - Verificação leve que não impacta significativamente os tempos de CI/CD
- 🛡️ **Níveis de Severidade Configuráveis** - Personalize quais níveis de severidade devem falhar o build

---

## Por que Precisamos Disso?

Ataques à cadeia de suprimentos têm se tornado cada vez mais comuns no ecossistema JavaScript. Incidentes notáveis incluem:

- **event-stream** (2018) - Código malicioso injetado para roubar criptomoedas
- **ua-parser-js** (2021) - Comprometido para instalar mineradores de cripto e ladrões de senhas
- **node-ipc** (2022) - Deliberadamente modificado para danificar arquivos em sistemas russos/bielorrussos
- **xz-utils** (2024) - Backdoor descoberto em uma biblioteca de compressão amplamente utilizada

Ao verificar nossas dependências antes de cada build, podemos:

1. **Detectar pacotes comprometidos** antes que cheguem à produção
2. **Prevenir execução de código malicioso** em nosso ambiente de build
3. **Manter a integridade da cadeia de suprimentos** em todos os deploys
4. **Cumprir as melhores práticas de segurança** e políticas organizacionais

---

## Fluxo do Pipeline

### Diagrama de Fluxo

```
┌─────────────────────────────────────────────────────────────────────┐
│                        BUILD AND DEPLOY                             │
│                   Gatilhos: push para main/homolog                  │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│  1. CHECKOUT DO CÓDIGO                                              │
│     Clona o repositório para o runner                               │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│  2. CONFIGURAR DIRETÓRIO TEMPORÁRIO                                 │
│     • Criar /tmp/security-scan                                      │
│     • Copiar package.json                                           │
│     • Copiar lockfiles (package-lock.json, yarn.lock)               │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│  3. INSTALAR DEPENDÊNCIAS (--ignore-scripts)                        │
│     • Instala pacotes sem executar scripts de postinstall           │
│     • Previne execução de scripts potencialmente maliciosos         │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│  4. VERIFICAÇÃO DE SEGURANÇA (Shai-Hulud-2.0-Detector)              │
│     • Verifica lockfiles contra pacotes maliciosos conhecidos       │
│     • FALHA em vulnerabilidades CRÍTICAS                            │
│     • AVISA em vulnerabilidades ALTAS (sem falha)                   │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                          ┌──────┴──────┐
                          │             │
                      [CRÍTICO]    [LIMPO/ALTO]
                          │             │
                          ▼             ▼
                    ┌─────────┐   ┌─────────────────────────────────────┐
                    │  FALHA  │   │  5. LIMPAR DIRETÓRIO TEMPORÁRIO     │
                    │  BUILD  │   │     Remove /tmp/security-scan       │
                    └─────────┘   └─────────────────────────────────────┘
                                              │
                                              ▼
                                  ┌─────────────────────────────────────┐
                                  │  6. CONFIGURAR NODE.JS (v18)        │
                                  └─────────────────────────────────────┘
                                              │
                                              ▼
                                  ┌─────────────────────────────────────┐
                                  │  7. INSTALAR DEPENDÊNCIAS           │
                                  │     npm install (instalação completa)│
                                  └─────────────────────────────────────┘
                                              │
                                              ▼
                                  ┌─────────────────────────────────────┐
                                  │  8. BUILD DO PROJETO                │
                                  │     npm run build                   │
                                  └─────────────────────────────────────┘
                                              │
                                              ▼
                                        ┌──────────┐
                                        │ SUCESSO  │
                                        └──────────┘
```

---

## Detalhes da Configuração

### Configurações Atuais

| Parâmetro | Valor | Descrição |
|-----------|-------|-----------|
| `fail-on-critical` | `true` | Build falha se vulnerabilidades críticas forem encontradas |
| `fail-on-high` | `false` | Build continua com descobertas de alta severidade (apenas registrado) |
| `fail-on-any` | `false` | Build não falha em descobertas médias/baixas |
| `scan-lockfiles` | `true` | Verifica package-lock.json e yarn.lock |
| `scan-node-modules` | `false` | Pula verificação do node_modules (mais rápido) |
| `output-format` | `text` | Formato de saída legível por humanos |
| `working-directory` | `/tmp/security-scan` | Diretório isolado para verificação |

### Por que Usar um Diretório Temporário?

A verificação de segurança é executada em um diretório isolado `/tmp/security-scan` por várias razões:

1. **Workspace Limpo** - Mantém o workspace principal livre de artefatos da verificação
2. **Isolamento** - Separa a verificação de segurança do processo de build real
3. **Instalação Segura** - Usa `--ignore-scripts` para prevenir scripts maliciosos de postinstall
4. **Limpeza** - Remove automaticamente todos os arquivos relacionados à verificação após a conclusão

### Por que `--ignore-scripts`?

A flag `npm install --ignore-scripts` previne a execução de:
- `preinstall`
- `install`
- `postinstall`
- `prepare`

Isso é crucial porque pacotes maliciosos frequentemente escondem seu payload nesses scripts de ciclo de vida. Ao pulá-los durante a verificação de segurança, podemos analisar as dependências com segurança sem arriscar execução de código.

---

## O que Acontece Quando Problemas São Encontrados?

### Vulnerabilidades Críticas (Build Falha)
```
❌ CRÍTICO: Pacote comprometido detectado!
   Pacote: pacote-malicioso@1.0.0
   Tipo: Ataque à Cadeia de Suprimentos
   Detalhes: Este pacote contém código que exfiltra variáveis de ambiente
   
   Build falhou devido a descobertas críticas de segurança.
```

### Vulnerabilidades Altas (Build Continua com Aviso)
```
⚠️ ALTO: Pacote potencialmente perigoso detectado
   Pacote: pacote-arriscado@2.3.1
   Tipo: Vulnerabilidade conhecida
   Detalhes: Contém vulnerabilidade de segurança conhecida CVE-XXXX-XXXXX
   
   Build continuando... (fail-on-high está desabilitado)
```

### Verificação Limpa
```
✅ STATUS: LIMPO
   Nenhum pacote comprometido ou problema de segurança detectado.
   
   Arquivos verificados: 3
   Pacotes comprometidos: 0
   Descobertas de segurança: 0
```

---

## Solução de Problemas

### Verificação Está Demorando Muito

Se a verificação estiver lenta, certifique-se de que `scan-node-modules: false` está configurado. Verificar node_modules aumenta significativamente o tempo de verificação.

### Falsos Positivos

Se você acredita que uma descoberta é um falso positivo:
1. Verifique a versão do pacote no seu lockfile
2. Consulte o banco de dados do Shai-Hulud para atualizações
3. Entre em contato com a equipe de segurança se o problema persistir

### Build Falhando em Problemas Não-Críticos

Ajuste a configuração:
```yaml
fail-on-critical: true   # Apenas falha em críticos
fail-on-high: false      # Não falha em altos
fail-on-any: false       # Não falha em médios/baixos
```

---

## Referências

- [Shai-Hulud-2.0-Detector GitHub](https://github.com/gensecaihq/Shai-Hulud-2.0-Detector)
- [Melhores Práticas de Segurança npm](https://docs.npmjs.com/security)
- [Segurança da Cadeia de Suprimentos OWASP](https://owasp.org/www-project-web-security-testing-guide/)

---

## Contato

Para dúvidas ou preocupações sobre esta verificação de segurança, entre em contato com a equipe de DevSecOps.

