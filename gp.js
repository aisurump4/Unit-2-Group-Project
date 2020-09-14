decimal = prompt("What is your decimal number?");

//Binary
p1 = Math.floor(decimal/2);
p2 = Math.floor(p1/2);
p3 = Math.floor(p2/2);
p4 = Math.floor(p3/2);
p5 = Math.floor(p4/2);
p6 = Math.floor(p5/2);
p7 = Math.floor(p6/2);
p8 = Math.floor(p7/2);
lp = Math.floor(p8/2);

a1 = decimal%2
a2 = p1%2
a3 = p2%2
a4 = p3%2
a5 = p4%2
a6 = p5%2
a7 = p6%2
a8 = p7%2
a9 = p8%2





//Hexadecimal
firstValue = Math.floor(decimal/16);
remainder1 = decimal - (firstValue*16);
remainder2 = firstValue%16;

if (remainder1 == 10){
    remainder1 = "A";

}
if (remainder1 == 11){
    remainder1 = "B";

}
if (remainder1 == 12){
    remainder1 = "C";

}
if (remainder1 == 13){
    remainder1 = "D";

}
if (remainder1 == 14){
    remainder1 = "E";

}
if (remainder1 == 15){
    remainder1 = "F";

}


if (remainder2 == 10){
    remainder2 = "A";

}
if (remainder2 == 11){
    remainder2 = "B";

}
if (remainder2 == 12){
    remainder2 = "C";

}
if (remainder2 == 13){
    remainder2 = "D";

}
if (remainder2 == 14){
    remainder2 = "E";

}
if (remainder2 == 15){
    remainder2 = "F";

}



 
console.log(`The binary of ${decimal} is ${a8}${a7}${a6}${a5} ${a4}${a3}${a2}${a1}`);
console.log(`The hexadecimal of ${decimal} is ${remainder2}${remainder1}`);