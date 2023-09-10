let grades = [20, 50, 70, 90, 40, 60, 30, 100, 14];
grades = grades.sort(ascendingSort);
grades.forEach(print);

function ascendingSort(x, y) {
  return x - y;
}

function print(element) {
  console.log(element);
}
