var finalValueAfterOperations = function(operations) {
    let count = 0;

    for (let i = 0; i < operations.length; i++)
        if (operations[i] === "--X" || operations[i] === "X--") {
            count--;
  
    } else if (operations[i] === "X++" || operations[i] === "++X"){
        count++;

    } else {
        break;
    }
  
    return count;
};

console.log(finalValueAfterOperations(["--X","X++","X++"]));

