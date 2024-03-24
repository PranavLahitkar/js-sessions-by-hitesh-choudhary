// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const pranav = new User("pannalal", "pranav@gmail.com", "123")

console.log(pranav.encryptPassword());
console.log(pranav.changeUsername());
//output
//123abc
//PANNALAL

//--------------this is simple way to understand what is happening behind the scens
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const pannu2 = new User("pannu", "paranav@gmail.com", "123")

console.log(pannu2.encryptPassword());
console.log(pannu2.changeUsername());