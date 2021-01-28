console.log("Before prepare food");

function preparefood(data){
    let promise = new Promise (function(resolve, reject)
    {
        setTimeout(()=>{
            if (data!==2){              
            resolve("food is ready");            
            console.log("Prepare food");
            }
            else{
                reject("value is not acceptable.")
            }
        },10);
    });
    return promise;
}

function prepareFrenchToast(){
    let promise = new Promise (function(resolve, reject)
    {
        setTimeout(()=>{
        console.log("Prepare french toast");
        resolve("FrenchToast is ready");
    },20);
});
    return promise;
}

function prepareCofee(){
    let promise = new Promise (function(resolve, reject)
    {   
    setTimeout(()=>{
        console.log("Prepare Cofee");
        resolve("Cofee is ready");
    },30);
});
    return promise;
}
async function startProcess(){
    try{
    let foodvalue = await preparefood(2);
    console.log("Food = ",foodvalue);
    let frenchtoastvalue = await prepareFrenchToast();
    console.log("FrenchToast = ",frenchtoastvalue);
    let cofeevalue = await prepareCofee();
    console.log("Cofee = ",cofeevalue);
    }
    catch(error){
        console.log("Error in catch = ",error);
    }

}
startProcess();
/*
let promise = preparefood(2);
// console.log("Promise = ",promise);
promise.then(function(value){
    console.log("Food is ready call back =",value)
    return prepareFrenchToast();
})
.then(function(frenchtoastvalue){
    console.log("frenchToast is ready call back =",frenchtoastvalue)
    return prepareCofee();
})
.then(function(cofeevalue){
    console.log("cofee is ready call back = ",cofeevalue)
})
.catch(function(error){
    console.log("error = ",error)
});
*/

/*
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
*/

console.log("After preparing food.Food is ready!");