class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const pranav = new User("pranav")
 //console.log(pranav.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
//console.log(iphone.createId());//thros error as cantt access static fucntion
//but
console.log(Teacher.createId())//return 123 and can access static fucntion 
//cause we used Classname here