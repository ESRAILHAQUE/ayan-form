function inchToFeet(inch) {
    const feet = parseInt(inch / 12);
    const reminder = inch % 12;
    const result = feet + " ft " + reminder + " inch";
    return result;
}
const Height = inchToFeet(75);
console.log(Height);