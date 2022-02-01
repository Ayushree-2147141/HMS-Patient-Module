function setCookie1()
{
    var now = new Date();
    now.setMonth( now.getMonth() + 1 );

    cookievalue = document.myForm.username.value + ";"
    document.cookie="name = " + cookievalue;

    document.cookie = "expires=" + now.toUTCString() + ";"
    alert("Cookies Added!");
}

function setCookie2()
{
    var now = new Date();
    now.setMonth( now.getMonth() + 1 );

    cookievalue2 = document.myForm.contact.value + ";"
    document.cookie="contact = " + cookievalue2;

    document.cookie = "expires=" + now.toUTCString() + ";"
    alert("Cookies Added!");
}

function setCookie3()
{
    var now = new Date();
    now.setMonth( now.getMonth() + 1 );

    cookievalue3 = document.myForm.email.value + ";"
    document.cookie =  "email =" + cookievalue3;  

    document.cookie = "expires=" + now.toUTCString() + ";"
    alert("Cookies Added!");
}

function getCookie1() 
{
  var allcookies = document.cookie;
  // document.write ("All Cookies : " + allcookies );
  
  
  // Get all the cookies pairs in an array
  cookiearray = allcookies.split(';');
  
  // Now take key value pair out of this array
  // for(var i=0; i<cookiearray.length; i++) 
  // {
    uname = cookiearray[3].split('=')[0];
    value = cookiearray[3].split('=')[1];
    alert ("Key is : " + uname + " and Value is : " + value);
  // }
}

function getCookie2() 
{
  var allcookies = document.cookie;
  // document.write ("All Cookies : " + allcookies );
  
  // Get all the cookies pairs in an array
  cookiearray = allcookies.split(';');
  
  // Now take key value pair out of this array
  // for(var i=0; i<cookiearray.length; i++) 
  // {
    uname = cookiearray[1].split('=')[0];
    value = cookiearray[1].split('=')[1];
    alert ("Key is : " + uname + " and Value is : " + value);
  // }
}

function getCookie3() 
{
  var allcookies = document.cookie;
  // document.write ("All Cookies : " + allcookies );
  
  // Get all the cookies pairs in an array
  cookiearray = allcookies.split(';');
  
  // Now take key value pair out of this array
  // for(var i=0; i<cookiearray.length; i++) 
  // {
    uname = cookiearray[2].split('=')[0];
    value = cookiearray[2].split('=')[1];
    alert ("Key is : " + uname + " and Value is : " + value);
  // }
}

function deleteCookie1() 
{  
  var now = new Date();
  now.setMonth( now.getMonth() - 1 );

  cookievalue = document.myForm.username.value + ";"
  document.cookie="name=" + cookievalue;

  document.cookie = "expires=" + now.toUTCString() + ";"

  alert("Cookies Deleted!");
}

function deleteCookie2() 
{  
  var now = new Date();
  now.setMonth( now.getMonth() - 1 );

  cookievalue2 = document.myForm.contact.value + ";"
  document.cookie =  "contact =" + cookievalue2;

  document.cookie = "expires = " + now.toUTCString() + ";"

  alert("Cookies Deleted!");
}

function deleteCookie3() 
{  
  var now = new Date();
  now.setMonth( now.getMonth() - 1 );

  cookievalue3 = document.myForm.email.value + ";"
  document.cookie =  "email =" + cookievalue3;

  document.cookie = "expires = " + now.toUTCString() + ";"

  alert("Cookies Deleted!");
}

function changeBackground()
{
    var selectedcolor=document.getElementById("demo").value;
    if(selectedcolor !="Select Color")
    {
        document.body.style.backgroundColor= selectedcolor;
        document.cookie="color="+selectedcolor;+";expires=Fri,2 Feb 2022 01:00:00 UTC;";
    }
}

window.onload=function()
{
    if(document.cookie.length!=0)
    {
        var a=document.cookie.split("=");
        document.getElementById("demo").value=a[0];
        document.body.style.backgroundColor=a[0];
    }
}
 

function changeImage() {
  var img = document.getElementById('image-1');
  img.src = './img2.gif';
  document.getElementById('image-1').appendChild(img);
  // down.innerHTML = "Image Element Added."; 
}

function clickCounter() {
  if (sessionStorage.clickcount) {
    sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
  } else {
    sessionStorage.clickcount = 1;
    }
  document.getElementById("counter").innerHTML = sessionStorage.clickcount;
}


function setSession()
{
  var patientId = document.getElementById('patientId').value;
  var disease = document.getElementById('diagnosis').value;

  if(patientId.value == '' || disease.value == '')
  {
    alert('Blank Input! Failed to apply session!');
  }
  else
  {
    window.sessionStorage.setItem(patientId,disease);
    alert('Session set!')
  }
  
}

// function getSession()
// {
//   var disease = document.getElementById('diagnosis');
//   // sessionStorage.patientId = "psoriasis"
//   var x = sessionStorage.getItem(disease).value;
//   // document.getElementById("demo").innerHTML = x;
//   alert(x)
// }


    // function DisplaySessionTimeout() {
    //   var sessionTimeout = "<%= Session.Timeout %>";
    //     sessionTimeout = sessionTimeout - 1;

    //     if (sessionTimeout >= 0)
    //       window.setTimeout("DisplaySessionTimeout()", 60000);
    //     else {
    //         alert("Your current Session is over due to inactivity.");
    //     }
    // }