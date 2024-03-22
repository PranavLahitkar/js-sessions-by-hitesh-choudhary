// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED to ${name}`);
} )('lahitkar and sons')

//DB CONNECTED
//DB CONNECTED to lahitkar and sons
//directly invoes the fc=ucntion without calling them