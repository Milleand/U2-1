class ValidationError extends Error{
    constructor(message) {
        super(message);
        this.name = "ValidationError"
    }
}
let email = document.getElementById("email")
let password = document.getElementById("password")

function Userlength(field){
    if(field.length >=10){
        throw new ValidationError("Sorry too long buddy")
    }else{
        return "Valid"
    }

}
try{
    console.log(Userlength(email))
}catch(error){
    console.error(error.message)
}

try{
    console.log(Userlength(password))
}catch(error){
    console.error(error.message)
}
