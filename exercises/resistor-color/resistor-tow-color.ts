export function decodedValue(colorArr: string[]) {
  const colorsDic: { [index: string]: number } = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };

  const single = colorArr
    .map((col): number => colorsDic[`${col}`])
    .join("")
    .substring(0, 2);

  return Number(single);
}

// console.log(decodedValue(["brown", "red", "grey"]));
