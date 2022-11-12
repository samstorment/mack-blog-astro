
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const currentYear = () => new Date(Date.now()).getFullYear();

function getDayMonthYear(dateString: string) {
    const dateObj = new Date(dateString);
    const y = dateObj.getFullYear();
    const m = dateObj.getUTCMonth();
    const d = dateObj.getDate();

    return [ d, m, y ];
}

export function getPostFormattedDate(dateString: string) {

    const [ d, m, y ] = getDayMonthYear(dateString);

    let formattedDate = `${months[m]} ${y}`;

    if (y === currentYear()) {
        formattedDate = `${months[m]} ${d}`;
    }

    return formattedDate;
}

export function getFullFormattedDate(dateString: string) {
    const [ d, m, y ] = getDayMonthYear(dateString);

    return`${months[m]} ${d}, ${y}`;
}