const firebaseConfig = {
    apiKey: "AIzaSyBw9GLQmVGDAyADUbiFMdahMLsKHRs_8jU",
    authDomain: "watchme-382bc.firebaseapp.com",
    databaseURL: "https://watchme-382bc-default-rtdb.firebaseio.com",
    projectId: "watchme-382bc",
    storageBucket: "watchme-382bc.appspot.com",
    messagingSenderId: "459154409461",
    appId: "1:459154409461:web:038b92ffa3e13a9afbc2bc"
  };


firebase.initializeApp(firebaseConfig);
var contact_formDB = firebase.database().ref('contact_form');
document.getElementById('contact_form').addEventListener("submit", submitForm);
function submitForm(e) {
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var message = getElementVal('message');

    saveMessages(name, email, message);

    //enable alert
    document.querySelector('.alert').style.display = 'block';
    //remove alert
    setTimeout(() => {
    document.querySelector('.alert').style.display = 'none';
    
    }, 3000);
    //resetform

    document.getElementById('contact_form').reset();

} 

const saveMessages = (name, email, message) => {
    var newcontact_form = contact_formDB.push();
    newcontact_form.set({
        name : name,
        email : email,
        message : message,
    });


};

const getElementVal = (id) => {
    return document.getElementById(id).value;


};



