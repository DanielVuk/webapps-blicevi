const halfString = (str) => {
  newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (i > str.length / 2 - 1) newStr += str[i];
  }

  console.log(`${str} -> ${newStr}`);
};

halfString("Javascript i nije tolko los");
