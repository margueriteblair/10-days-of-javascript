function sides(literals, ...expressions) {
    const [a, p] = expressions;
    let root = Math.sqrt((p*p)-(16*a))
    let s1 = (p + root)/4;
    let s2 = (p - root)/4;

    return [s1, s2].sort();
    
}