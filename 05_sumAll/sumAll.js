const sumAll = function(int_1, int_2) {

    if (int_1 < 0 || int_2 < 0){
        return "ERROR";
    }

    if (typeof int_1 != typeof 1 || typeof int_2 != typeof 1){
        return "ERROR";
    }
    
    if (int_1 > int_2){
        dif = int_1 - int_2;
        count = 1;
        sum = int_2 + int_1;
        while (count < dif){
            sum += (int_2 + count);
            count += 1;
        }
        return sum;
    }

    else {
        dif = int_2 - int_1;
        count = 1;
        sum = int_2 + int_1;
        while (count < dif){
            sum += (int_1 + count);
            count += 1;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
