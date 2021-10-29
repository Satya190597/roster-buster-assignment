import { month } from "./constant";

const formatDateInWords = (dateString) => {
    const dateFormat = new Date(dateString);
    const formattedDate = `${dateFormat.getDate()} ${month[dateFormat.getMonth()]} ${dateFormat.getFullYear()}`
    return formattedDate
}

export {formatDateInWords}