test('This test must not fail',() => {

    if( 1 === 0 ){
        throw new Error("You cannot divide by zero");
    }

})