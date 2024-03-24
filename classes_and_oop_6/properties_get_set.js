function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const user1 = new User("chaipranav@lahitkar.com", "pannu")

console.log(user1.email);


/*The Object.defineProperty() static method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

 */