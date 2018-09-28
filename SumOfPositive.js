function positiveSum(arr) {
    var result = arr.reduce(function (sum, cur) { // removed "filter" and did the check in the reduce callback.
        if (cur > 0) {
            sum += cur;
        }
        return sum;
    }, 0);
    return result;
}