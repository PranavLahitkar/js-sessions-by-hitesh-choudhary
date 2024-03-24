const user = {
    username: "pranav",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
       
        console.log(this);
    }

}



console.log(user.username)
console.log(user.getUserDetails());
 console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("pranav", 12, true)
const userTwo = new User("ashish", 11, false)
console.log(userOne);
console.log(userTwo);

//op:
/*pranav
{
  username: 'pranav',
  loginCount: 8,
  signedIn: true,
  getUserDetails: [Function: getUserDetails]
}
undefined
{}
User {
  username: 'pranav',
  loginCount: 12,
  isLoggedIn: true,
  greeting: [Function (anonymous)]
}
User {
  username: 'ashish',
  loginCount: 11,
  isLoggedIn: false,
  greeting: [Function (anonymous)]
}
*/