export const convertArrToObject = (arr, key) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return {};
  }
  const newObj = {};
  arr.forEach((item) => {
    newObj[item[key]] = item;
  });

  return newObj;
};

// Object must have "same" properties
export const converObjectToArray = (obj) => {
  return Object.values(obj);
};
