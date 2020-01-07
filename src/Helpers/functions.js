export const getDateFromFileName = fileName => {
  if (fileName) {
    let date = fileName.slice(0, 10);
    date = date.split("-");

    //--This block of code doesn't work for Safari--//
    // let month = new Date(date.join(',')).toLocaleDateString('default', { month: 'short' });

    var month = [];

    month[1] = "Jan";
    month[2] = "Feb";
    month[3] = "Mar";
    month[4] = "Apr";
    month[5] = "May";
    month[6] = "June";
    month[7] = "July";
    month[8] = "Aug";
    month[9] = "Sep";
    month[10] = "Oct";
    month[11] = "Nov";
    month[12] = "Dec";

    // Returns string in "Month Date, Year" format.
    // E.g. Dec 12, 2019
    return `${month[date[1]]} ${date[2]}, ${date[0]}`;
  }
  return "Loading Date ...";
};
