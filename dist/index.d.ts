type OrderType = "asc" | "desc";
declare const UFT: {
    info: () => void;
    parseValue: (v: string | number | null | undefined) => string;
    devLogger: (data: any, type?: "log" | "error" | "warn" | "info" | "debug") => void;
    getRandomArr: (data: any, forNum: number) => any[];
    isEmailValid: (email: string) => boolean;
    isPasswordValid: (password: string) => boolean;
    removeDuplicate: (arr: any[]) => any[];
    orderByKey: (arr: any[], key: string, order?: OrderType) => any[];
};
export default UFT;
