const exampleSet = new Set([1,1,1,1,2,2,2,2]);

exampleSet.add(5);
exampleSet.add(8);
exampleSet.add(5).add(20);

console.log(exampleSet);
console.log(exampleSet.size);

console.log(exampleSet.delete(5));
console.log(exampleSet.has(5));

// empty the set
exampleSet.clear();