//CREATE FUNCTION THAT CAN CREATE TRIANGLE PATTERN ACCORDING TO HEIGHT WE PROVIDE LIKE THE FOLLOWING
//01
//02 03
//04 05 06
//07 08 09 10


function fTriangle(num){

let a = 0;
let string = 0;

for (let i = 1; i <= num; i++){
    for (let j = 1; j <= i; j++){
        string += ++a

        string += j === i ? "\n" : " "
        }
    }
    return string
}

console.log(fTriangle(4));

    
    // triangle[i] = array[0];
    // for (let j = 0; j < array.length; j++){
    //     triangle[i][j]= array;
    // }
