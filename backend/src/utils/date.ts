import moment from "moment-timezone";

export const getCurrentDate = () => {
    return moment.tz(Date.now(), String(process.env.TIMEZONE));
}

export const convertDateToLocal = (dateToConvert: any, formatToConvert: string = 'YYYY-MM-DD HH:mm:ss') => {
    return moment.tz(dateToConvert, String(process.env.TIMEZONE)).format(formatToConvert);
}

export const convertTimestampUnix = (timestampUnixExp: number) => {
    return moment.tz((timestampUnixExp * 1000), String(process.env.TIMEZONE));
}