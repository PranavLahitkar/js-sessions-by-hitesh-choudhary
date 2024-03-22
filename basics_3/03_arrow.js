const user = {
    username: "pranav",
    price: 9009,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}//fucntion inside the object accseded using '.' operator

// user.welcomeMessage()
// user.username = "pappya"
// user.welcomeMessage()

// console.log(this);

// function learnings(){
//     let username = "pranav"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "pranav"
//     console.log(this.username);
// }

const learnings =  () => {
    let username = "pranav"
    console.log(this);
}


learnings()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()