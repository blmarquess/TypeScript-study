export function loopRange(execRange) {
    let cont = 0;
    for (let i = 0; i < execRange; i += 1) {
        cont = cont + i;
    }
    console.log(cont);
    return cont;
}
