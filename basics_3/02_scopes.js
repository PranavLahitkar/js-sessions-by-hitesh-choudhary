//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);//op 10 local scope
    
}



console.log(a);//op 300 global scope 
 console.log(b);//op error because it has local scope in if block
 console.log(c);


function one(){
    const username = "pranav"

    function two(){
        const website = "github"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))//storing values in variable
