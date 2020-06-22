function factorialize(n) {
    for (let i = n-1; i > 1; i--) {
        n *= i;
    }
    console.log(n);
}