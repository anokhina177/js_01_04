function splitNumber(num) {
    if (isNaN(num)) 
        return { err : "Not a number!"};

    if (num < 0 || num > 999)
        return { err : "Please enter a number between 0 and 999!"};
    
    let hundreds = 0;
    let tens = 0;
    let ones = 0;

    if (num > 99) {
        hundreds = Math.floor(num/100);
        num = num - hundreds*100;    
    }

    if (num > 9) {
        tens = Math.floor(num/10);
        num = num - tens*10;    
    }   

    ones = num;

    return {"hundreds" : hundreds, "tens" : tens, "ones" : ones};

}

function printSplitNumber(num) {
    let result = splitNumber(num);
    if (result.err)
        console.log(result.err);
    else
        console.log(result);
}

printSplitNumber(345);