console.log("Before prepare food");
function preparefood(callback){
    setTimeout(()=>{
        console.log("Prepare food");
        callback("food is ready");
    },10)
}
function prepareFrenchToast(callback){
    setTimeout(()=>{
        console.log("Prepare french toast");
        callback("FrenchToast is ready");
    },20)
}
function prepareCofee(callback){
    setTimeout(()=>{
        console.log("Prepare Cofee");
        callback("Cofee is ready");
    },30)
}


function mycallback(value){
    console.log("Food is ready Callback=",value)
    prepareFrenchToast(frenchToastcallback);
}
function frenchToastcallback(value){
    console.log("FrenchToast is ready call back=",value)
    prepareCofee(Cofeecallback);
}
function Cofeecallback(value){
    console.log("Cofee is ready call back=",value)
}

preparefood(mycallback);

console.log("After preparing food.Food is ready!")