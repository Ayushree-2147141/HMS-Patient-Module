function testname(event)
{
  let code=event.which;
  if(code>47&&code<58)  
    return false;
  else
    return true;
    
}

// function test(event)
// {
//   let code=event.which;
//   if(code>64 && code<91)
//     return false;
//   else
//     return true;
// }

var fullname = document.getElementById('fullname');
var uname = document.getElementById('username');
var pwd = document.getElementById('password');
var span = document.getElementsByTagName('span');
var phno = document.getElementById('phone');
var dob = document.getElementById('birth-date');
var email = document.getElementById('email');

function checkname()
{
  const regex = /^([a-zA-Z\s.]+)$/;
  
  if (fullname.value.trim() == "" || fullname.value.trim() == null) 
  {
    span[1].innerText="Blank Name!";
    // fullname.style.border="2px red solid";
    span[1].style.color = "red";
    return false;
  } 
  if (regex.test(fullname.value.trim()) ) 
  {     
    span[1].innerText = "Valid Name!";
    span[1].style.color = "green";
    // username.style.border= "2px green solid";
    return true;
  }
  else 
  {
    fullname.style.border="2px red solid";
    span[1].style.color ="red";
    span[1].innerText = "Invalid Name!";
    return false;
  }     
}

function validateUsername()
{
  const regex = /^([a-zA-Z0-9\.@_]+)$/;
  if(uname.value.trim() == "" || uname.value.trim() == null)
  {
    span[2].innerText = "Blank Username!";
    username.style.border = "2px red solid";
    span[2].style.color= "red";
    
  }
  if(regex.test(uname.value.trim()))
  {
    span[2].innerText="Valid username!";
    span[2].style.color = "green";
    // username.style.border= "2px green solid";
    
  }
  else
  {
    span[2].innerText = "Invalid Username!";
    username.style.border = "2px red solid";
     return false;
  }
  // return true;
}

// function validatePassword()
// {
//   const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,20})/;
  
//   if(pwd.value.trim() == "" || pwd.value.trim() == null)
//   {
//     span[3].innerText = "Blank Password!";
//     pwd.style.border = "2px red solid";
//     span[3].style.color= "red";
    
//   }
//   else if(regex.test(pwd.value.trim()))
//   {
//     if(pwd.value.trim().length >7 && pwd.value.trim().length < 15)
//     {
//       span[3].innerText = "Strong Password!";
//       pwd.style.border = "2px green solid";
//       span[3].style.color= "green";
     
//     }
//     if(pwd.value.trim().length < 7)
//     {
//       span[3].innerText = "Weak Password!";
//       pwd.style.border = "2px yellow solid";
//       span[3].style.color= "lime";
   
//     }
//   }
//   else
//   {
//     span[3].innerText = "Invalid Password!";
//     username.style.border = "2px red solid";
//     return false;
//   }
//   // validateEmail();
//   // return true;
// }

    
         
function validatePassword()
{ 
var user = document.getElementById("password").value;
var user2 = document.getElementById("password");

var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{5,20})/;
if (user == "" || user == null)
{
span[3].innerText="Blank password!";
span[3].style.color = "red";
user2.style.border="3px red solid";
return false;
} 
else if(re.test(user.trim()))
{
if(user.trim().length >= 8 && user.trim().length <= 15)
{
span[3].innerText="Strong password!";
// user2.style.border = "3px green solid";
span[3].style.color="green";
return true;
}
else if(user.trim().length > 15)
{
span[3].innerText = "Too long password!";
// user2.style.border = "4px yellow solid";
span[3].style.color = "lime";
return false;
}
else
{
span[3].innerText ="Weak password!"
span[3].style.color = "blue";
return false;
}
}
else
{
span[3].innerText="Invalid Password!";
// user2.style.border = "4px green solid";
span[3].style.color = "red";
return false;
}

}


function validateEmail()
{
  const regex=/^\w+([\.-]?\w+)+@(christuniversity.in|christuniversity.com)$/;
  if(email.value.trim() == "" || email.value.trim() == null)
  {
    span[4].innerText = "Blank Email!";
    email.style.border = "2px red solid";
    span[4].style.color= "red";
    
 
  }
  if(regex.test(email.value.trim()))
  {
    span[4].innerText = "Valid Email!";
    span[4].style.color="green";
    email.style.border="green"; 
  
  }
  else 
  {
    span[4].innerText = "Invalid Email!";
    email.style.border = "2px red solid";
    return false;
  }
  // return true;
}

function validatePhone()
{
  const regex = /^([0-9]{10})$/;
  if(phno.value.trim() == "" || phno.value.trim() == null)
  {
    span[5].innerText = "Blank Phone-number!";
    phno.style.border = "2px red solid";
    span[5].style.color= "red";
   
    // return false;
  }
  if(regex.test(phno.value.trim()))
  {
    span[5].innerText = "Valid Phone-number!";
    span[5].style.color="green";
    email.style.border="green";
    
  }
  if(phno.value.trim().length > 10)
  {
    span[5].innerText = "Invalid Phone!";
    username.style.border = "2px red solid";
    return false;
  }
  // return true;
}

function validatedob()
{
  if(dob.value.trim() == "" || dob.value.trim() == null)
  {
    span[6].innerText = "Blank DOB!";
    dob.style.border = "2px solid red";
    span[6].style.color ="red";
    
  }
  else
  {
    span[6].innerText = "Valid DOB!";
    span[6].style.color = "green";
    dob.style.border = "1px green solid";
    // return false;
  }
  return true;
}

function validate()
{

  if(fullname.value == "" || uname.value == "" || pwd.value == "" || email.value == "" || phno.value == "" || dob.value == "")
  {
    checkname();
    validateEmail();
    validatePassword();
    validateUsername();
    validatedob();
    validatePhone();
  }
  else
  {
    return;
  }
}
    

