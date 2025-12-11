export declare const ERROR_MESSAGES: {
    readonly invalid_password: "Senha incorreta.";
    readonly inactive_mode: "O modo lançamento está inativo no momento.";
    readonly default: "Ocorreu um erro, tente novamente mais tarde.";
};
export type ErrorCode = keyof typeof ERROR_MESSAGES;
