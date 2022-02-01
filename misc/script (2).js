
    function WriteCookie()
    {
       if( document.myform.customer.value == "" ) {
          alert("Enter some value!");
          return;
       }
       cookievalue = document.myform.customer.value + ";";
       document.cookie="name=" + cookievalue;
       document.write ("Setting Cookies : " + "name=" + cookievalue );
    }
    function ReadCookie() {
       var allcookies = document.cookie;
       document.write ("Cookie : " + allcookies );
       // Get all the cookies pairs in an array
       cookiearray = allcookies.split(';');
       // Now take key value pair out of this array
       for(var i=0; i<cookiearray.length; i++) {
          uname = cookiearray[i].split('=')[0];
          value = cookiearray[i].split('=')[1];
          document.write ("Key is : " + uname + " and Value is : " + value);
         

       }}

       function DeleteCookie() {
       var now = new Date();
       now.setMonth( now.getMonth() - 1 );
       cookievalue = document.myform.customer.value + ";"
       
       document.cookie = "name=" + cookievalue;
       document.cookie = "expires=" + now.toUTCString() + ";"
       document.write("Setting Cookies : " + "name=" + cookievalue );
    }


    function WriteCookie1()
    {
       if( document.myform.customer_email.value == "" ) {
          alert("Enter some value!");
          return;
       }
       cookievalue = document.myform.customer_email.value + ";";
       document.cookie="email=" + cookievalue;
       document.write ("Setting Cookies : " + "email=" + cookievalue );
    }
    function ReadCookie1() {
       var allcookies = document.cookie;
       document.write ("All Cookies : " + allcookies );
       // Get all the cookies pairs in an array
       cookiearray = allcookies.split(';');
       // Now take key value pair out of this array
       for(var i=0; i<cookiearray.length; i++) {
          email = cookiearray[i].split('=')[0];
          value = cookiearray[i].split('=')[1];
          document.write ("Key is : " + email + " and Value is : " + value);
         

       }}

       function DeleteCookie1() {
       var now = new Date();
       now.setMonth( now.getMonth() - 1 );
       cookievalue = document.myform.customer_email.value + ";"
       
       document.cookie = "email=" + cookievalue;
       document.cookie = "expires=" + now.toUTCString() + ";"
       document.write("Setting Cookies : " + "email=" + cookievalue );
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



function show()
{var value= "#FFFF00";

        document.getElementById("form").style.backgroundColor=value;
        document.cookie="color="+value+";expires=Mon,21 february 2022 07:30:15 UTC;";
        console.log(document.cookie);


}
function store(){ //stores items in the localStorage
var nam = document.getElementById('empName').value;
var sal = document.getElementById('salary').value;
var key = document.getElementById('key').value; //gets the key from the user

const emp = {
nam: nam,
sal: sal,
}

window.localStorage.setItem(key,JSON.stringify(emp));  

}
function retrieveRecords(){ 
   
console.log("retrieve records");
var key = document.getElementById('retrieveKey').value;
var records = window.localStorage.getItem(key);
var paragraph = document.createElement("p");
var infor = document.createTextNode(records);
paragraph.appendChild(infor);
var element = document.getElementById("retrieve");
element.appendChild(paragraph);
}

function ADD(){
var pas = document.getElementById('password').value;
var key2 = document.getElementById('sskey').value;

window.sessionStorage.setItem(key2,pas);  
}

 window.onload = function () {
   document.getElementById("empForm").onsubmit = store;
    document.getElementById("retrieveButton").onclick = retrieveRecords;

    if(document.cookie.length!=0)
        {
            var a=document.cookie.split("=");
            document.getElementById("demo").value=a[0];
            document.body.style.backgroundColor=a[0];
        }
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

function set_img()
{
    var path="new_build.jpg";

    
    document.cookie="img="+path+";expires=Mon,11 April 2022 06:30:15 UTC;";
    console.log(document.cookie);
}


function IMG_Fun() {
   var img = document.createElement('img');
   img.src = './new_build.jpg';
   document.getElementById('body').appendChild(img);
   down.innerHTML = "Image Element Added."; 
} 

var up = document.getElementById('IMG_UP'); 
up.innerHTML = "CHECK BUILDING LOCATION"; 
var down = document.getElementById('IMG_DOWN'); 

