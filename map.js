const callback = (element, index) => {
  return element + 1;
};

const forEach = (callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
};
const map = (callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i));
  }
  return result;
};
const filter = (callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
};

const arr = [1, 2, 3];
const newArr = arr.map((element, index) => {
  return element + 1;
});
