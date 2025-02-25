export const zeropad = (num: number, pad: number) =>
  num.toString().padStart(pad, "0");

export function formatDate(date: string) {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = zeropad(newDate.getMonth() + 1, 2);
  const day = zeropad(newDate.getDate(), 2);
  return `${year}.${month}.${day}`;
}

export function formatToWon(price: number): string {
  return price.toLocaleString("ko-KR");
}
