export function FormatDate(date) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

export function getDatebyDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
