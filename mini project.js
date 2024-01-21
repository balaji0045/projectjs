function namevalid() {
  var name=document.myform.name.value;
  if (name==null||name=="") {
    alert("YOU MUST ENTER THE NAME");
    document.getElementById("demo1").innerHTML= "<img src='icon_status2_16x16.gif'>  please enter a value";
    return false;
  }
  else{
    document.getElementById("demo1").innerHTML= "<img src='icon_validation_16x16.gif'>  please enter a value";
    return true;
  }
}
//  for PAssword Validation
function passwordValidate() {
  var pass1=document.myform.password.value;
  var pass2=document.myform.password1.value;
  if (pass1==pass2) {
    document.getElementById("demo2").innerHTML="<img src'icon_validation_16x16.gif'> password is same"
    return true;
  }
  else{
    alert("Password Must Be Same");
  document.getElementById("demo2").innerHTML="<img src'icon_status2_16x16.gif' > password must be same";
    
    return false;
  }
}
// for Email Verification Function
function emailvalid() {
  var email=document.myform.email.value;
  var dot=email.indexOf("@");
  var at=email.lastIndexOf(".");
  if (at<1||dot>at+2||dot+2>=email.length) {
    document.getElementById("demo").innerHTML="Email is valid";
    return true;

  }
  else{
    alert("Email is not valid");
    document.getElementById("demo").innerHTML="Email is NOT valid";
    return false;

  }
}