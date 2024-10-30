const fs = require('fs');
eval(fs.readFileSync('code.js') + '');

let graph1 = [
  [1, 2],    // A
  [0, 3],    // B
  [0, 3],    // C
  [1, 2]     // D
];
let expected1 = true;

let result1 = hasCycle(graph1);
if (JSON.stringify(result1) !== JSON.stringify(expected1)) { // compares result
  throw new Error('test 1 failed');
}

let graph2 = [
  [1],       // A
  [0, 2],    // B
  [1, 3],    // C
  [2]        // D
];
let expected2 = false;

let result2 = hasCycle(graph2);
if (JSON.stringify(result2) !== JSON.stringify(expected2)) { // compares result
  throw new Error('test 2 failed');
}

let graph3 = [
  [1],       // A
  [0, 2],    // B
  [1],       // C
  [4, 5],    // D
  [3, 5],    // E
  [3, 4]     // F
];
let expected3 = true;

let result3 = hasCycle(graph3);
if (JSON.stringify(result3) !== JSON.stringify(expected3)) { // compares result
  throw new Error('test 3 failed');
}

let graph4 = []; 
let expected4 = false;

let result4 = hasCycle(graph4);
if (JSON.stringify(result4) !== JSON.stringify(expected4)) { // compares result
  throw new Error('test 4 failed');
}

let graph5 = [[]]; 
let expected5 = false;

let result5 = hasCycle(graph5);
if (JSON.stringify(result5) !== JSON.stringify(expected5)) { // compares result
  throw new Error('test 5 failed');
}

let graph6 = [
  [0]        
];
let expected6 = true;

let result6 = hasCycle(graph6);
if (JSON.stringify(result6) !== JSON.stringify(expected6)) { // compares result
  throw new Error('test 6 failed');
}

console.log("all tests passed");
