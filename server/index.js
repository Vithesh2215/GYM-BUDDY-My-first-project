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
    db.query("SELECT trainer_id , trainer_name,trainer_phno FROM trainer",(err,result)=>{
        if(err) console.log(err);
        console.log(result);
        res.send(result); 
    });
}
);
app.get('/planlist',(req,res)=>{
    db.query("SELECT plan_id , plan_name FROM plan ",(err,result)=>{
        if(err) console.log(err);
        console.log(result);
        res.send(result);
    });
}
);
app.post('/userregister',(req,res)=>{
    const username=req.body.userField.userReg;
    const password=req.body.userField.userpassReg;
    const age=req.body.userField.userageReg;
    const phone=req.body.userField.userphoneReg;
    const plan_id=req.body.userField.userplanidReg;
    const trainer_id=req.body.userField.usertraineridReg;
    const gender=req.body.userField.usergenderReg;
    const stdate=req.body.userField.userstartdateReg;
    const enddate=req.body.userField.userenddateReg;
    console.log(req.body);
    db.query("INSERT INTO users (user_name,user_age,user_phone,gender,plan_id,trainer_id,start_date,end_date,pass) VALUES (?,?,?,?,?,?,?,?,?)",
    [username,age,phone,gender,plan_id,trainer_id,stdate,enddate,password],
    (err,result)=>{
        if(err) return console.log(err);
        console.log("registered")
    }
    );
});
app.post('/trainerregister',(req,res)=>{
    const username=req.body.trainerField.trainerReg;
    const password=req.body.trainerField.trainerpassReg;
    const phone=req.body.trainerField.trainerphoneReg;
    const trainer_id=req.body.trainerField.traineruseridReg;
    const gender=req.body.trainerField.trainergenderReg;
    const experience=req.body.trainerField.trainerexperienceReg;
    const rating=req.body.trainerField.trainerratingReg;
    console.log(req.body);
    db.query("INSERT INTO trainer (trainer_id,trainer_name,trainer_phno,experience,trainer_rating,gender,pass) VALUES (?,?,?,?,?,?,?)",
    [trainer_id,username,phone,experience,rating,gender,password],
    (err,result)=>{
        if(err) return console.log(err);
        console.log("registered")
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
