const express=require('express');
const {PythonShell}=require('python-shell');
let pyshell= new PythonShell('./random.py');
//set up
const app=express();
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/',function(req,res){
    PythonShell.run('random.py', null, function (err,results) {
        if (err) throw err;
        console.log(results);
        console.log('finished');
        res.send({'message':results[0]});
      });
    
});
app.post('/',function(req,res){
    res.send({'message':'Post Received'})
});
app.listen(4000,function(){
    console.log('now listening for request');
});