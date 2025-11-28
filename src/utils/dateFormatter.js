export const dateFormatter = (data) => {
    const difference = new Date() - new Date(data);
    const secondsDifference = Math.floor(difference / 1000);

    if (secondsDifference < 60) {
        return "0 seconds ago"
    } else if (secondsDifference < 3600) {
        return `${Math.floor((secondsDifference * 60) / 3600)} minutes ago`
    } else if (secondsDifference < 86400) {
        return `${Math.floor((secondsDifference * 24) / 86400)} hours ago`
    } else if (secondsDifference < 2592000) {
        return `${Math.floor((secondsDifference * 30) / 2592000)} days ago`
    } else if (secondsDifference < 31104000) {
        return `${Math.floor((secondsDifference * 12) / 31104000)} months ago`
    } else {
        return `${Math.floor((secondsDifference * 100) / 3110400000)} years ago`
    }
}