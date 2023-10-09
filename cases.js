const factorial = num => {
    let result = num;
    if (num === 0) return 1;
    while (num > 1) {
        num--;
        result *= num;
    }
    return result;
}

const permutation = (n, r) => {
    return factorial(n) / factorial(n - r);
};

const combination = (n, r) => {
    return factorial(n) / factorial(n - r) / factorial(r);
};

const multiPermutation = (n, r) => {
    let result = 1;
    for (let i = 0; i < r; i++) result *= n;
    return result
};

const multiCombination = (n, r) => {
    return factorial(n + r - 1) / factorial(n - 1) / factorial(r);
};

module.exports = {
    permutation,
    combination,
    multiPermutation,
    multiCombination,
};