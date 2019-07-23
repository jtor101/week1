// Greetings by Hour
// by John Torres
"use strict"

//User Input
var studentName = "Bill Smith";
var studentMajor = "BIO";

if (studentMajor == "BIOL") {
    console.log("Student: " + studentName);
    console.log("Major: Biology");
    console.log("Advising Location: Science Bldg, Room 310");
} else if (studentMajor == "CSCI") {
    console.log("Student: " + studentName);
    console.log("Major: Computer Science");
    console.log("Advising Location: Sheppard Hall, Room 314");
} else if (studentMajor == "ENG") {
    console.log("Student: " + studentName);
    console.log("Major: English");
    console.log("Advising Location: Kerr Hall, Room 201");
} else if (studentMajor == "HIST") {
    console.log("Student: " + studentName);
    console.log("Major: History");
    console.log("Advising Location: Kerr Hall, Room 114");
} else if (studentMajor == "MKT") {
    console.log("Student: " + studentName);
    console.log("Major: Marketing");
    console.log("Advising Location: Westly Hall, Room 310");
} else {
    console.log("Student: " + studentName);
    console.log("Major: <unknown>");
    console.log("Advising Location: <unknown>");
}