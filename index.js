const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const Todo = require('./models/todo.js');


app.use(express.json());


main()
.then(()=>{
    console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todoserver');

}
const task1=new Todo({title:"task 1"});

task1.save()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(`failed to save task`,err);
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});