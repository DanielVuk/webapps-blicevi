const sortiraj = (arr) => {
  let nums = [];
  let strs = [];

  for (const str of arr) {
    if (typeof str == "number") {
      nums.push(str);
    }
    if (typeof str == "string") {
      strs.push(str);
    }
  }

  return [nums.sort(), strs.sort()];
};

console.log(
  `[321, 63, "Mermelada", 4, "Kruh", 1, 1234, "Tanjur", 50] -> `,
  sortiraj([321, 63, "Mermelada", 4, "Kruh", 1, 1234, "Tanjur", 50])
);
