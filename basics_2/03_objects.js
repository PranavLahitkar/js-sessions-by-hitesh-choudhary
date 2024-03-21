// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "pranav",
    "full name": "pranav lahitkar",
    [mySym]: "mykey1",
    age: 18,
    location: "nashik",
    email: "pranav@yahoo.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
 console.log(JsUser["email"])
 console.log(JsUser["full name"])
 console.log(JsUser[mySym])

JsUser.email = "pranav@yahoo.com"
Object.freeze(JsUser)//this will freeze the objects and not alloing the reconfig of object
JsUser.email = "sanketh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
