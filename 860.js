var lemonadeChange = function(bills) {
    let fiveDollars = 0;
    let tenDollars = 0;
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            fiveDollars++;
        } else if (bills[i] === 10) {
            if (fiveDollars === 0) {
                return false;
            }
            fiveDollars--;
            tenDollars++;
        } else {
            if (tenDollars > 0 && fiveDollars > 0) {
                tenDollars--;
                fiveDollars--;
            } else if (fiveDollars >= 3) {
                fiveDollars -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};
