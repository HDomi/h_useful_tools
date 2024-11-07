const info = () => {
  alert("This is a useful tools made by DOMI  !!!!!!!!!!!!!!!!!!!!!");
};

const addComma = (v: number) => {
  return String(v).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

const parseValue = (v: string | number | null | undefined): string => {
  const numValue = typeof v === "string" ? Number(v) : v;

  if ((numValue || numValue === 0) && !isNaN(numValue)) {
    if (Number.isInteger(numValue)) {
      return addComma(numValue);
    } else {
      return addComma(
        parseFloat((Math.round(numValue * 100) / 100).toFixed(1))
      );
    }
  } else if (v) {
    return String(v);
  } else {
    return "-";
  }
};
const devLogger = (
  data: any,
  type: "log" | "error" | "warn" | "info" | "debug" = "log"
) => {
  if (
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "dev"
  ) {
    console[type](data);
  }
};
const getRandomArr = (data: any, forNum: number) => {
  if (!data) return [];
  return Array.from({ length: forNum }, (_, i) => {
    const obj = { ...data };
    for (const key in obj) {
      const randomNumber = Math.floor(Math.random() * 100);
      const randomString = Math.random().toString(36).substring(2, 15);
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (typeof obj[key] === "number") {
          obj[key] = randomNumber;
        } else if (typeof obj[key] === "string") {
          obj[key] = randomString;
        } else {
          obj[key] = obj[key];
        }
      }
    }
    return obj;
  });
};

const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isPasswordValid = (password: string): boolean => {
  const passwordReg =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,16}$/;
  return passwordReg.test(password);
};

const removeDuplicate = (arr: any[]) => {
  if (!arr) return [];
  const setArr = new Set(arr);
  return Array.from(setArr);
};

type OrderType = "asc" | "desc";
const orderByKey = (arr: any[], key: string, order: OrderType = "asc") => {
  if (!arr) return [];
  return arr.sort((a, b) => {
    if (order === "asc") {
      return a[key] > b[key] ? 1 : -1;
    } else {
      return a[key] < b[key] ? 1 : -1;
    }
  });
};

const UFT = {
  info,
  parseValue,
  devLogger,
  getRandomArr,
  isEmailValid,
  isPasswordValid,
  removeDuplicate,
  orderByKey,
};

export default UFT;
