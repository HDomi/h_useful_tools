declare const UFT: {
    info: () => void;
    parseValue: (v: string | number | null | undefined) => string;
    devLogger: (data: any, type?: "log" | "error" | "warn" | "info" | "debug") => void;
    getRandomArr: (data: any, forNum: number) => any[];
    isEmailValid: (email: string) => boolean;
    isPasswordValid: (password: string) => boolean;
};
export default UFT;
