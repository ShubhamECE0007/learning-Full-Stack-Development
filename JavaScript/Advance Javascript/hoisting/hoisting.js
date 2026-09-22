function random(fn){
    let city  = "Spain";
    function printCity(){
        console.log(city);
   
    }
    return printCity
    
}
let printCity = random();
printCity();