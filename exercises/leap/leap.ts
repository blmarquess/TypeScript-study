export function isLeap(year: number) {
  const lastNumbers = `${year}`.substring(2, 4).split("");
  const strategyDivider = lastNumbers.every((n) => n === "0") ? 400 : 4;
  return year % strategyDivider === 0;
}

console.log(isLeap(2100));
