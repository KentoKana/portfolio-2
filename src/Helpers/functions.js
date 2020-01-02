export const getDateFromFileName = (fileName) => {
    let date = fileName.slice(0, 10);
    date = date.split('-');
    let month = new Date(date.join(',')).toLocaleDateString('default', { month: 'short' });
    // Returns string in "Month Date, Year" format.
    // E.g. Dec 12, 2019
    return `${month} ${date[2]}, ${date[0]}`;
}