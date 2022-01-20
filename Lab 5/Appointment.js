/*--JS for DOM Parser--*/

var xmlDoc
var xmlFile ='../Lab 5/Appointment.xml'

//function to load xml doc
function loadXML()
{
    var xmlReq = new XMLHttpRequest;
    xmlReq.onreadystatechange = function()
    {
        console.log(xmlReq.readyState)
        if((xmlReq.readyState == 4) && (xmlReq.status == 200))
        {
            //xml doc successfully retrieved
            console.log(xmlReq.readyState)

            xmlDoc = xmlReq.responseXML
            displayTable()
        }
    }
    xmlReq.open('GET',xmlFile, true)
    xmlReq.send()
}

//function to display html table from xml data
function displayTable()
{
    var i;
    var table = "<tr><th>Patient Name</th><th>Patient Id</th><th>Doctor name</th><th>Doctor Id</th><th>Appointment date</th><th>Appointment time</th><th>Gender</th><th>Edit</th><th>Delete</th></tr>"

    var x = xmlDoc.getElementsByTagName("Patient")
    for (i = 0; i < x.length; i++)
    {
        table += "<tr><td>" +
            x[i].getElementsByTagName("Patient_name")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Patient_id")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Doctor_name")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Doctor_id")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Appointment_date")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Appointment_time")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Patient_gender")[0].childNodes[0].nodeValue + "</td>" +
            "<td><span class='material-icons' onclick='editRecord(" +i+ ")'>edit</span></td>" +
            "<td><span class='material-icons' onclick='deleteRecord(" +i+ ")'>delete</span></td></tr>";
    }
    document.getElementById("table").innerHTML = table
}

//function to delete record from XML
function deleteRecord(i)
{
    y = xmlDoc.getElementsByTagName("Patient")[i]
    var name = y.getElementsByTagName("Patient_name")[0].childNodes[0].nodeValue
    var reply = confirm("Do you want to delete record? \nName: " + name)
    if(reply == true)
    {
        xmlDoc.documentElement.removeChild(y)
        console.log("Record deleted: " + name)
        displayTable()
    }
}

//function to open form to add new record to xml
function openForm()
{
    document.getElementById("addRecordForm").style.display = "block"
}

//function to close form to add new record to xml
function closeForm()
{
    document.getElementById("addRecordForm").style.display = "none"
}

//function to add new record to xml
function addNewRecord()
{
    var i
    var details = []
    var x = document.getElementById("addRecordForm")
    Patient = xmlDoc.createElement("Patient")
    details[0] = xmlDoc.createElement("Patient_name")
    details[1] = xmlDoc.createElement("Patient_id")
    details[2] = xmlDoc.createElement("Doctor_name")
    details[3] = xmlDoc.createElement("Doctor_id")
    details[4] = xmlDoc.createElement("Appointment_date")
    details[5] = xmlDoc.createElement("Appointment_time")
    details[6] = xmlDoc.createElement("Patient_gender")

    for(i = 0; i < 7; i++)
    {
        details[i].appendChild(xmlDoc.createTextNode(x.elements[i].value))
        Patient.appendChild(details[i])
    }
    xmlDoc.documentElement.appendChild(Patient);
    console.log("Record added: " + x.elements[0].value)
    displayTable()
}