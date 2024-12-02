import fs from 'fs';

function createLists() {
  const data = fs.readFileSync('./data.txt').toString();
  const lines = data.split("/n");
  const list1 = [];
  const list2 = [];

  for (const line of lines) {
    const [left, right] = line.split("   ");
    list1.push(parseInt(left));
    list2.push(parseInt(right));
  }

  return { list1, list2 };
}

function solution1(l1, l2) {
  l1.sort((a,b) => a - b);
  l2.sort((a,b) => a - b);
  const distances = l1.map((n, i) => 
    Math.abs(n - l2[i])
  );
  
  return distances.reduce((total, distance) => total + distance, 0);
}

const { list1, list2 } = createLists();
console.log(solution1(list1, list2));  
