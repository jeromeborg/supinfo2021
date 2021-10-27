// var localScope = 1;

function scope() {
    var localScope = 2;
    console.log("localScope : ", localScope);

    if (localScope) {
        let localScope = 5;
        console.log('nested localScope : ', localScope);
    }
}

scope();

console.log('global localScope : ', localScope);