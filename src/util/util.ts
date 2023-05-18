// restrict the string to 100 characters and if it exceeds 100 characters, add "..." at the end of the string
export const truncateString = (str: string, num: number) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};
