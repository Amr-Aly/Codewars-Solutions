function positiveSum(arr) {
    var result = arr.reduce(function (sum, cur) {
        if (cur > 0) {
            sum += cur;
        }
        return sum;
    }, 0);
    return result;
}