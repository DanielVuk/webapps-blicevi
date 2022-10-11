const doSmth = (obj) => {
  for (const key in obj) {
    let suma = 0;
    for (let i = 0; i < obj[key].length; i++) {
      if (typeof obj[key][i] == "number") suma += obj[key][i];
    }
  }
};

doSmth({ 1: [143, "A", 21], 2: "B", 3: [12, 11, "C"] });
