export const months = {
  "01": "JAN",
  "02": "FEB",
  "03": "MAR",
  "04": "APR",
  "05": "MAY",
  "06": "JUN",
  "07": "JUL",
  "08": "AUG",
  "09": "SEP",
  "10": "OCT",
  "11": "NOV",
  "12": "DEC"
};

export const parseDate = (date) => {
  return `${months[date.slice(5,7)]} ${date.slice(8,10)}, ${date.slice(0,4)}`;
}
