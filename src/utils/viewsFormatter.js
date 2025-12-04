export const viewsFormatter = (views) => {
    const format = (num) => parseFloat(num.toFixed(2)).toString();

    if (views >= 1e9) {
        return `${format(views / 1e9)} B`;
    } else if (views >= 1e6) {
        return `${format(views / 1e6)} M`;
    } else if (views >= 1e3) {
        return `${format(views / 1e3)} K`;
    } else {
        return String(views);
    }
};

//note: works similar to hour formatter but the divided is dtraight 1000,1000000 and 1 Billion 
/// ie 1e3, 1e6, 1e9
// going for large number first cause that is a only set under billion
// but normal small number is a set under all