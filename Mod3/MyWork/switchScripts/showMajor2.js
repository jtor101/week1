var deptCode = "BIOL";
var deptName;
var advisingLocation;

switch (deptCode) {
    case "BIOL":
        deptName = "Name of Major: Biology.";
        advisingLocation = "Department Office: Science Bldg, Room 310.";
        break;
    case "CSCI":
        deptName = "Name of Major: Computer Science.";
        advisingLocation = "Department Office: Sheppard Hall, Room 314.";
        break;
    case "ENG":
        deptName = "Name of Major: English.";
        advisingLocation = "Department Office: Kerr Hall, Room 201.";
        break;
    case "HIST":
        deptName = "Name of Major: History."
        advisingLocation = "Department Office: Kerr Hall, Room 114.";
        break;
    case "MKT":
        deptName = "Name of Major: Marketing.";
        advisingLocation = "Department Office: Westly Hall, Room 310.";
        break;
    default:
        deptName = "Name of Major: Unknown";
        advisingLocation = "Department Office: Unknown";
        break;
}

console.log(deptName);
console.log(advisingLocation);