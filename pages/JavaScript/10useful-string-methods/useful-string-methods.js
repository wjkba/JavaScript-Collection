let text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec rutrum elit. Phasellus pellentesque mi sit amet quam scelerisque placerat. Integer varius tortor vel aliquam feugiat. Etiam id vulputate neque, at vestibulum arcu. Aenean blandit mi lectus, vulputate porttitor arcu hendrerit id.";
let text2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
document.getElementById("p0").innerHTML = text;
let phoneNumber = "79-817-13-89";

//.length
document.getElementById("span1").innerHTML = text.length;

//.charAt(LETTER_number)  - starting from 0
document.getElementById("span2").innerHTML = text.charAt(2);
//.indexOf("LETTER")
document.getElementById("span3").innerHTML = text.indexOf("i");
//.lastIndexOf("LETTER")
document.getElementById("span4").innerHTML = text.lastIndexOf("i");
//.toUpperCase()
document.getElementById("span5").innerHTML = text2.toUpperCase();
//.toLowerCase()
document.getElementById("span6").innerHTML = text2.toLowerCase();
//.replaceAll("x", "y")
document.getElementById("span7").innerHTML = phoneNumber.replaceAll("-", "/");
