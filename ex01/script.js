
function calculateGrade(score) {
    if (typeof score !== "number" || score < 0 || score > 100) {
        return "Invalid Score";
    }

    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function checkAccess(age, hasTicket) {
    if (typeof age !== "number" || typeof hasTicket !== "boolean") {
        return false;
    }

    if (age >= 18 && hasTicket === true) {
        return true;
    } else {
        return false;
    }
}

console.log(calculateGrade(95));
console.log(calculateGrade(89));
console.log(calculateGrade(72));
console.log(calculateGrade(60));
console.log(calculateGrade(45));
console.log(calculateGrade(-5));
console.log(calculateGrade(105));

console.log(checkAccess(20, true));
console.log(checkAccess(20, false));
console.log(checkAccess(16, true));
console.log(checkAccess(18, true));

