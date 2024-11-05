"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const info = () => {
    alert("This is a useful tools made by DOMI  !!!!!!!!!!!!!!!!!!!!!");
};
const addComma = (v) => {
    return String(v).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};
const parseValue = (v) => {
    const numValue = typeof v === "string" ? Number(v) : v;
    if ((numValue || numValue === 0) && !isNaN(numValue)) {
        if (Number.isInteger(numValue)) {
            return addComma(numValue);
        }
        else {
            return addComma(parseFloat((Math.round(numValue * 100) / 100).toFixed(1)));
        }
    }
    else if (v) {
        return String(v);
    }
    else {
        return "-";
    }
};
const devLogger = (data, type = "log") => {
    if (process.env.NODE_ENV === "development" ||
        process.env.NODE_ENV === "dev") {
        console[type](data);
    }
};
const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,16}$/;
const UFT = {
    info,
    parseValue,
    devLogger,
    passwordReg,
};
exports.default = UFT;
