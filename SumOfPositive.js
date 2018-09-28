function positiveSum(arr) {
    var result = arr.filter(x => x > 0).reduce(function(sum, cur) {
        sum += cur;
        return sum;
    }, 0);
    return result;
}