declare const UFT: {
    info: () => void;
    parseValue: (v: string | number | null | undefined) => string;
    devLogger: (data: any, type?: "log" | "error" | "warn" | "info" | "debug") => void;
    passwordReg: RegExp;
};
export default UFT;
