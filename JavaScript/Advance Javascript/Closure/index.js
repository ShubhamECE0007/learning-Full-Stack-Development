function outer(){
    let a = 10;
    function inner(){
        console.log(a);
    }
    return inner;
}
const var1  = outer();
console.log(var1);