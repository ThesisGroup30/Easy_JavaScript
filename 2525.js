var categorizeBox = function(length, width, height, mass) {
    var volume = length * width * height;
    if (length >= 104 || width >= 104 || height >= 104 || volume >= 1000000000) {
        if (mass >= 100) {
            return "Both";
        } else {
            return "Bulky";
        }
    } else if (mass >= 100) {
        return "Heavy";
    } else {
        return "Neither";
    }
};
