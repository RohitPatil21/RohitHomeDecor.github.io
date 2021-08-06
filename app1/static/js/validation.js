function validation(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var desc = document.getElementById('desc').value;

    if(name == ""){
        document.getElementById('validname').innerHTML = "please fill This Field"
        return false;
    }
    if(!isNaN(name)){
        document.getElementById('validname').innerHTML = "Please fill your name correctly"
        return false;
    }

    if(email == ""){
        document.getElementById('validemail').innerHTML = "please fill email Field"
        return false;
    }
    if(phone == ""){
        document.getElementById('validphone').innerHTML = "please fill this Field"
        return false;
    }
    if(isNaN(phone)){
        document.getElementById('validphone').innerHTML = "please fill your mobile number Field"
        return false;
    }
    if(phone.length!=10){
        document.getElementById('validphone').innerHTML = "please fill correct Field"
        return false;
    }
    if(desc == " "){
        document.getElementById('validdesc').innerHTML = "please fill email Field"
        return false;
    }
    alert("Your Message Send Successfully")
    return true
}
