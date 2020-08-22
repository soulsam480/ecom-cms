//TODO Deprecated
//** this sorting and push method is only for this project

const createIndex = (data) => {
  let i = 0;
  let arr = [];

  if (typeof data === "object") {
    const parent = Object.values(data);
    parent.forEach((el) => {
      if (typeof el === "object") {
        const child = Object.values(el);
        child.forEach((snap) => {
          i = i++;
          arr.splice(i, 0, snap).sort((a, b) => b.stamp - a.stamp);
        });
      } else {
        el.forEach((snap) => {
          i = i++;
          arr.splice(i, 0, snap).sort((a, b) => b.stamp - a.stamp);
        });
      }
    });
  }

  return arr;
};
export { createIndex };
