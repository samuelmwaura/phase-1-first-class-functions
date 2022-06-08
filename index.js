function receivesAFunction(callbackFunction){
return callbackFunction();
}

//receivesAfunction(()=>console.log('I am a callback function.'));
function returnsANamedFunction(){
    const namedFunction = ()=>console.log('I am a namedFunction to be returned');
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return function(){console.log('I am an anonimous function returned.')}
}