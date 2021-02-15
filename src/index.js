exports.min = function min(arr) {
    if (arr === undefined || arr.length === 0) return 0
    else return Math.min.apply(null, arr)
}
exports.max = function max(arr) {
    if (arr === undefined || arr.length === 0) return 0
    else return Math.max.apply(null, arr)
}
exports.avg = function avg(arr) {
    if (arr === undefined || arr.length === 0) return 0
    else let result = arr.reduce(function (sum, current) {
        return sum + current;
    }, 0)
    return arr = result / arr.length
}