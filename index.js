let submitbuttondata = document.getElementById("submit_button");
let namedata = document.getElementById("name");
let emaildata = document.getElementById("email");
let messagedata = document.getElementById("message")

// Declare variable that will 
// store regular expression for email

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// READY TO START CODING

function formvalidation(event) {
    event.preventDefault();

let data = {};

let error = [];

// FULL NAME

if (namedata.value.trim() !== ""){
    data.name = namedata.value.trim();
}

else {

    error.push("FULL NAME IS REQUIRED");
}

// EMAIL 

if (emaildata.value.trim() !== ""){
    if(emailRegex.test(emaildata.value.trim())){
    data.email = emaildata.value.trim();
}
else {
    error.push("INVALID EMAIL ID");
}
} else {
    error.push("ENTER EMAIL REQUIRED");
}



// MESSAGE

if (messagedata.value.trim() !== ""){

    data.message = messagedata.value.trim();
}
else {
    error.push("MESSAGE IS REQUIRED");
}




// FEEDBACK

if (error.length > 0 ){

    console.error('error:', error);}
 else { 
    console.log('data',data);   

    namedata.value = "";
    emaildata.value = "";
    messagedata.value = "";
 }

}

// Register your form to "click" event.

submitbuttondata.addEventListener('click', formvalidation);