var deptCode = 4;
var deptName;

switch (deptCode) {
    case 1:
        deptName = "Marketing";
        break;
    case 5:
        deptName = "Human Resources";
        break;
    case 10:
        deptName = "Accounting";
        break;
    case 12:
        deptName = "Legal";
        break;
    case 18:
        deptName = "IT";
        break;
    case 20:
        deptName = "Customer Relations";
        break;
    default:
        deptName = "Unknown";
        break;
}

console.log(deptName);