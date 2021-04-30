function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
    return function doesItEvenMatter(){

    }
}

function returnsAnAnonymousFunction(){
    return function(){
        
    }
}
