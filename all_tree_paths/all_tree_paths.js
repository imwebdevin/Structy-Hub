// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const allTreePaths = (root) => {
  // todo
  if (root === null) return []
  if (!root.left && !root.right) return [[root.val]];
  // for every path returned at the leaf level, i need to prepend the parent's value
  if (root.left || root.right) {
    let leftPath = allTreePaths(root.left);
    let rightPath = allTreePaths(root.right);
    let paths = []
    if (leftPath) {
      for (const subarray of leftPath) subarray.unshift(root.val);
      paths.push(...leftPath)
    }
    if (rightPath) {
      for (const subarray of rightPath) subarray.unshift(root.val);
      paths.push(...rightPath)
    }
    console.log(paths)
    return paths;
  }
};
​
module.exports = {
  allTreePaths,
};
​