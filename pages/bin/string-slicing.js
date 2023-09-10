let fullName = "John Kowalski";
let firstName;
let lastName;

//manual
firstName = fullName.slice(0, 5);
document.getElementById("span1").innerHTML = firstName;
lastName = fullName.slice(5, 13);
document.getElementById("span2").innerHTML = lastName;
document.getElementById("span3").innerHTML = fullName.slice(5);

//detect spaces
firstName = fullName.slice(0, fullName.indexOf(" "));
document.getElementById("span4").innerHTML = firstName;
lastName = fullName.slice(fullName.indexOf(" ") + 1);
document.getElementById("span5").innerHTML = lastName;
