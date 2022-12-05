const colorDict: { [index: string]: number } = {
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

const scaleOhms: { [index: string]: string } = {
  "0": " ohms",
  "1": "0 ohms",
  "2": " kiloohms",
  "3": " kiloohms",
  "4": "0 kiloohms",
};

const decodedColor = (color: string): number => colorDict[color];

export function decodedResistorValue(arrColor: string[]): string {
  const decode = arrColor.map(decodedColor).join("");
  const scale = scaleOhms[decode[2]];
  const resistorValue = decode[1] === "0" ? decode[0] : decode;
  return `${resistorValue.substring(0, 2)}${scale}`;
}
