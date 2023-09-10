class Student {
  //use constructor to assign some properties to new student
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
}

const student1 = new Student("John", "Kowalski", 22);
const student2 = new Student("Jan", "Brzechwa", 76);

//--
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

button1.onclick = function () {
  displayStudentInfo(student1);
};
button2.onclick = function () {
  displayStudentInfo(student2);
};

displayStudentInfo(student1);
function displayStudentInfo(studentID) {
  const p1 = document.getElementById("p1");
  p1.innerHTML = `Name: ${studentID.name}<br> Surname: ${studentID.surname}<br> Age: ${studentID.age}`;
}
