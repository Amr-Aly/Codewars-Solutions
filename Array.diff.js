function array_diff(a, b) {
    var result = [];
    for(var i = 0; i < a.length; i++) {
        var isFound = false;
        for(var j = 0; j < b.length; j++) {
            if (a[i] == b[j]) isFound = true;
        }
        if (!isFound) result[result.length] = a[i];
    }
    return result;
}

