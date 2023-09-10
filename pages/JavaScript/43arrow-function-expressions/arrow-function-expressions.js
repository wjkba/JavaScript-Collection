// const greeting = (username) => console.log(`Hello ${username}`);
// greeting("John");

// // const greeting2 = (username, age) =>
// //   console.log(`Hello ${username}, you are ${age} years old.`);

// // greeting2("John", 21);

let grades = [20, 50, 70, 90, 40, 60, 30, 100, 14];

grades.sort((x, y) => y - x);
grades.forEach((element) => console.log(element));
