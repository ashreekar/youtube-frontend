export const viewsFormatter = (views) => {
    if (views >= 1e9) {
        return `${(views / 1e9).toFixed(2).replace(/\.0$/, '')} B`
    } else if (views >= 1e6) {
        return `${(views / 1e6).toFixed(2).replace(/\.0$/, '')} M`
    } else if (views >= 1e3) {
        return `${(views / 1e3).toFixed(2).replace(/\.0$/, '')} K`
    } else {
        return String(views);
    }
}