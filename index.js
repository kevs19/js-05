
function cal(x, y, operacion, callback){
    let result;

    switch(operacion) {
        case"suma":
            result= x+y;
            break;
        case "resta":
            result = x-y;
            break;
        case "multiplicacion":
            result= x*y;
            break;
        case "division":
            result=x/y;
            break;
        default:
            result="op no valido"
            break;
    }
    callback(result);
}
    function logResult(value){
    console.log("resultado"+ value)
}
cal(100, 50, "suma", logResult);
function getUser(){
    console.log("welcome shrek99");
}

setTimeout(getUser, 3000);

console.log("waiting for user info");

setTimeout(() => console.log("welcome"),5000);