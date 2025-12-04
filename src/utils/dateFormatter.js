// date formatter gives proper dates to render
export const dateFormatter = (data) => {
    const difference = Date.now() - new Date(data).getTime();
    const seconds = Math.floor(difference / 1000);

    // for a video which uploaded seconds ago
    if (seconds < 60) {
        return `${seconds} seconds ago`;
    }

    // for a video uplaoded minutes ago
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
        return `${minutes} minutes ago`;
    }

    // for a video uloaded hours ago
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
        return `${hours} hours ago`;
    }

    // for a video uploaded days ago
    const days = Math.floor(hours / 24);
    if (days < 30) {
        return `${days} days ago`;
    }

    const months = Math.floor(days / 30);
    if (months < 12) {
        return `${months} months ago`;
    }

    const years = Math.floor(months / 12);
    return `${years} years ago`;
};

// Note: logic
// for eg: avideo to be hour ago it should be atleast 1 hour ago so if
// minutes < 60 then it is hour ago
// then coverting by diving that by last metrics to be filled to be an hour ie minutes for every 60