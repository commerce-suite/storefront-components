export const ERROR_MESSAGES = {
  invalid_password: 'Senha incorreta.',
  inactive_mode: 'O modo lançamento está inativo no momento.',
  default: 'Ocorreu um erro, tente novamente mais tarde.',
} as const;

export type ErrorCode = keyof typeof ERROR_MESSAGES;
