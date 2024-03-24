class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const sid_teacher = new Teacher("siddhesh", "siddhu@kkw.edu", "123")

chai.logMe()
const sid= new User("sid")

sid.logMe()

console.log(sid_teacher instanceof User);