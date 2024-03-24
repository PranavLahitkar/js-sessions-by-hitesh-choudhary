const User = {
    _email: 'kww@kkw.com',
    _password: "admin",
//including getter and setter in object

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);