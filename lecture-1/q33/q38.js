var arr = [1, 2, 3, 4, 5, 6];
arr.forEach((item, index) => {
  if (index === arr.length - 1) {
    console.log(item);
  } else {
    console.log(item + ",");
  }
});
