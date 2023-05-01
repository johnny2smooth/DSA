export default function intersection(a, b) {
  const results = [];
  let aSet = new Set();
  for (let item of a) {
    aSet.add(item);
  }
  for (let item of b) {
    if (aSet.has(item)) {
      results.push(item);
    }
  }
  return results;
}
