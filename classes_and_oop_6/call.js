function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const pannu = new createUser("kkw-mca-pranav", "pranav@kkw.edu", "123")
console.log(pannu);