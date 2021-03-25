
function kilometerTOMeter(num){
    if(num >= 0){
        return num*1000;
    }
    console.log("Please enter a valid number!");
}

function budgetCalculator(num1, num2, num3){
    if(num1 > -1 && num2 > -1 && num3 > -1){
        var watch = num1 * 50;
        var phone = num2 * 100;
        var laptop = num3 * 500;
        return watch+phone+laptop;
    }
    console.log("Please enter a valid number!");
}

function hotelCost(day){
    if(day > -1){
        if(day <= 10){
            var total = day * 100;
        }
        else if(day <= 20){
            var firstPart = 10 * 100;
            var remain = day - 10;
            var secondPart = remain * 80;
            var total = firstPart + secondPart;
        }
        else{
            var firstPart = 10 * 100;
            var secondPart = 10 * 80;
            var remain = day - 20;
            var thirdPart = remain * 50;
            var total = firstPart + secondPart + thirdPart;
        }
        return total;
    }
    console.log("Please enter a valid number!");
}

function megaFriend(line){
    let longestWord = "";
    for(let i = 0; i < line.length; i++){
        if(line[i].length > longestWord.length){
            longestWord = line[i];
        }
    }
    return longestWord;
}