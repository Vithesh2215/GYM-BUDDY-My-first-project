const express=require('express');
const app=express();
const mysql=require('mysql');
const cors=require('cors');

app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    user : "root",
    host : "localhost",
    password : "",
    database : "gymbuddy",
});
app.get('/trainerlist',(req,res)=>{
    db.query("SELECT trainer_name FROM trainer",(err,result)=>{
        if(err) console.log(err);
        console.log(result);
        res.send(result);
        
    });
}
);
app.get('/planlist',(req,res)=>{
    db.query("SELECT plan_name FROM plan",(err,result)=>{
        if(err) console.log(err);
        console.log(result);
        res.send(result);
        
    });
}
);
app.post('/userregister',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    db.query("INSERT INTO adminlogin (userid,pass) VALUES (?,?)",
    [username,password],
    (err,result)=>{
        if(err) console.log(err);
    }
    );
});
app.post('/userlogin',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    db.query("SELECT * FROM user WHERE user_name=? AND user_password=?",
    [username,password],
    (err,result)=>{
        if(err) console.log(err);
        res.send(result);
    }
    );
});
app.listen(3001,()=>{
    console.log('server is running on port 3001');
});
