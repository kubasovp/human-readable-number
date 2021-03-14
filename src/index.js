module.exports = function toReadable(number) {
    const numberArr = number.toString().split("");
    const NS = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    if (number > 99) {
        if (numberArr[1] === "0" && numberArr[2] === "0") {
            return `${NS[numberArr[0]]} hundred`;
        } else if (numberArr[2] === "0") {
            return `${NS[numberArr[0]]} hundred ${NS[numberArr[1] + "0"]}`;
        } else if (numberArr[1] === "0") {
            return `${NS[numberArr[0]]} hundred ${NS[numberArr[2]]}`;
        } else if (numberArr[1] === "1") {
            return `${NS[numberArr[0]]} hundred ${
                NS[numberArr[1] + numberArr[2]]
            }`;
        } else {
            return `${NS[numberArr[0]]} hundred ${NS[numberArr[1] + "0"]} ${
                NS[numberArr[2]]
            }`;
        }
    } else if (number > 19) {
        if (numberArr[1] === "0") {
            return `${NS[numberArr[0] + "0"]}`;
        } else {
            return `${NS[numberArr[0] + "0"]} ${NS[numberArr[1]]}`;
        }
    } else if (number > 0) {
        return `${NS[number]}`;
    } else {
        return "zero";
    }
};
