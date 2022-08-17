function getWeekDates(current: Date) {
  let week = [];

  current.setDate(current.getDate() - current.getDay());
  for (let i = 0; i < 7; i++) {
    week.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return week;
}

export default getWeekDates;
