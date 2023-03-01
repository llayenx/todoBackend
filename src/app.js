const express = require("express");
const todoRoutes = require("../src/routes/todo.routes")
const db = require("./utils/database")
const Todos = require("./models/todo.models")

const app = express();
app.use(express.json())
app.use(todoRoutes)


db.authenticate()
.then(()=>{
  console.log("Database connected")
})
.catch((error)=>{
  console.log(error)
})

db.sync()
.then(()=>{
  console.log("Database syncronized")
})
.catch((error)=>{
  console.log("error")
})



app.get("/", (req, res) => {
  res.send("Hi!");
});

app.listen(8000, () => {
  console.log("Servidor corriendo en el puerto 8000");
});