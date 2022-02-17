const mysql = require('mysql2');
const express = require('express');
var app = express();

// database file to json
const parser = require('body-parser')
app.use(parser.json());

var connection = mysql.createConnection(
    {
        host:'localhost',
        user : 'root',
        password : 'root',
        database : 'ayushree'
    }
);

connection.connect((err)=>
{
    if(!err)
        console.log('Database Connected');
    else
        console.log('Error!')
});

app.listen(5700,()=>{
    console.log('Server Started!!')
});

app.get('/patient',(req,res)=>{
    connection.query("SELECT * FROM patient",(err,rows,fields)=>{
    if(!err)
        res.send(rows);
    else
        console.log('Error!');
    })
})

app.get('/patient/:id',(req,res)=>{
    connection.query("SELECT * FROM patient WHERE patient_id = ?",[req.params.id],(err,rows,fields)=>{
    if(!err)
        res.send(rows);
    else
        console.log('Error!');
    })
})

app.get('/add',(req,res)=>{
    var post = {patient_id:'109',login_id:'L_109',patient_fname:'Shikha',patient_mname:'',patient_lname:'Shukla',registration_date:'2021-06-17',reg_type:'offline',patient_contact:9876876567,patient_address:'Rameshwaram',patient_age:56};
    var sql = 'INSERT INTO patient SET ?';
    var query = connection.query(sql,post,(err,result)=>{
        if(err) throw err;
        res.send('Rows Inserted!')
    })
});

app.get('/update/:id',(req,res)=>{
    var name1 = 'Reena';
    
    var sql = `UPDATE patient SET patient_fname ='${name1}' WHERE patient_id = patient_id = '${req.params.id}'`;
    var query = connection.query(sql,post,(err,result)=>{
        if(err) throw err;
        res.send('Rows Updated!')
    })
});

app.get('/delete/:id',(req,res)=>{
    
    var sql = `DELETE patient WHERE patient_id = patient_id = '${req.params.id}'`;
    var query = connection.query(sql,post,(err,result)=>{
        if(err) throw err;
        res.send('Rows Deleted!')
    })
});