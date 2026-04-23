const express=require('express')
const app=express()
const cors=require('cors')
const mysql=require('mysql2')

app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'todo',
    port: 3307
})

db.connect((err)=>{
    if(err){
        console.log("Error connecting to database");
        return
    }
    console.log("Connected with database");
})

app.get('/',(req,res)=>{
    db.query('select * from todoitems',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        res.send(result)
    })
})

app.post('/add-item',(req,res)=>{
    db.query(
        "INSERT INTO todoitems(todoDescription) VALUES (?)",
        [req.body.text],
        (err)=>{
            if(err){
                console.log(err);
                return
            }
            res.send("added")
        }
    )
})

app.put('/edit-item',(req,res)=>{
    db.query(
        "UPDATE todoitems SET todoDescription=? WHERE ID=?",
        [req.body.todoDescription, req.body.ID],
        (err)=>{
            if(err){
                console.log(err);
                return
            }
            res.send("updated")
        }
    )
})
app.delete('/delete-item/:id', (req, res) => {
    console.log("DELETE HIT", req.params.id);

    db.query(
        "DELETE FROM todoitems WHERE ID=?",
        [req.params.id],
        (err) => {
            if (err) {
                console.log(err);
                return res.send("error");
            }
            res.send("deleted");
        }
    );
});

app.listen(5000,()=>{
    console.log("server started running on port 5000");
})