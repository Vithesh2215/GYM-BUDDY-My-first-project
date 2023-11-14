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
app.post('/adminlogin',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    db.query("SELECT * FROM adminlogin WHERE user =? AND pass=?",
    [username,password],
    (err,result)=>{
        console.log(result);
        {
        if(err) return res.send({err:err});
        res.send(result);
        }
        
    }
    );
});
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
app.post('/workoutregister',(req,res)=>{
    const planid=req.body.workoutField.planidReg;
    const planname=req.body.workoutField.plannameReg;
    const e1=req.body.workoutField.e1Reg;
    const e2=req.body.workoutField.e2Reg;
    const e3=req.body.workoutField.e3Reg;
    console.log(req.body);
    db.query("INSERT INTO plan (plan_id,plan_name) VALUES (?,?)",
    [planid,planname],
    (err,result)=>{
        if(err) return console.log(err);
        console.log("registered")
    }
    );
    db.query("INSERT INTO exercise (plan_id,exercise_name) VALUES (?,?)",
    [planid,e1],
    (err,result)=>{
        if(err) return console.log(err);
        console.log("registered")
    }
    );
    db.query("INSERT INTO exercise (plan_id,exercise_name) VALUES (?,?)",
    [planid,e2],
    (err,result)=>{
        if(err) return console.log(err);
        console.log("registered")
    }
    );
    db.query("INSERT INTO exercise (plan_id,exercise_name) VALUES (?,?)",
    [planid,e3],
    (err,result)=>{
        if(err) return console.log(err);
        console.log("registered")
    }
    );

});
app.post('/userlogin',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    db.query("SELECT * FROM users WHERE user_name=? AND pass=?",
    [username,password],
    (err,result)=>{
        console.log(result);
        {
        if(err) return res.send({err:err});
        res.send(result);
        }
        
    }
    );
});
app.post('/trainerlogin',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    db.query("SELECT * FROM trainer WHERE trainer_name=? AND pass=?",
    [username,password],
    (err,result)=>{
        console.log(result);
        {
        if(err) return res.send({err:err});
        res.send(result);
        }
        
    }
    );
});
app.get('/traindet',(req,res)=>{
    db.query("SELECT trainer_id,trainer_name,trainer_phno,experience,trainer_rating,gender FROM trainer",(err,result)=>{
        if(err) console.log(err);
         res.send(result);
    }
    );
});
app.get('/userdet',(req,res)=>{
    db.query("SELECT user_id,user_name,user_age,user_phone,gender,plan_id,trainer_id,start_date,end_date FROM users",(err,result)=>{
        if(err) console.log(err);
         res.send(result);
    }
    );
});
app.get('/plandet',(req, res)=>{
    db.query("SELECT plan_id,plan_name FROM plan",(err,result)=>{
        if(err) console.log(err);
        res.send(result);
    }
    );
})
app.get('/exdet',(req, res)=>{
    db.query("SELECT plan_name ,exercise_name FROM exercise,plan WHERE plan.plan_id=exercise.plan_id ORDER BY plan_name ",(err,result)=>{
        if(err) console.log(err);
        res.send(result);
    }
    );
})
app.post('/userdisplay',(req,res)=>{
    const user_id=req.body.user_id;
    db.query("SELECT user_name,user_age,user_phone,start_date,end_date,trainer_name,plan_name,exercise_name,users.gender FROM users,plan,trainer,exercise WHERE (users.plan_id=plan.plan_id) AND (users.trainer_id=trainer.trainer_id) AND(plan.plan_id=exercise.plan_id) AND (user_id=?);",
    [user_id],
    (err,result)=>{
        
        {
        if(err) return res.send({err:err});
        return res.json(result);
        }
        
    }
    );
});
app.post('/trainerdisplay',(req,res)=>{
    const trainer_id=req.body.trainer_id;
    db.query("SELECT user_id,user_name,user_age,user_phone,users.gender,plan_name,start_date,end_date,trainer_name,trainer_phno FROM users,trainer,plan WHERE (users.trainer_id=trainer.trainer_id) AND (users.plan_id=plan.plan_id) AND (trainer.trainer_id=?)",
    [trainer_id],
    (err,result)=>{
        
        {
        if(err) return res.send({err:err});
        return res.json(result);
        }
        
    }
    );
});
app.listen(3001,()=>{
    console.log('server is running on port 3001');
});
