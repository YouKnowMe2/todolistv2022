const express = require('express');

const db = require('./data/database');
var cors = require('cors');

const app = express();

app.use(cors());

const enableCors = require('./middlewares/cors');
app.use(enableCors);
app.use(express.json());
app.options('*', cors());
let port = 3000;

const quoteRoutes = require('./routes/quotes.routes');
const todosRoutes = require('./routes/todos.routes');



app.use('/quotes',quoteRoutes);
app.use('/todos',todosRoutes);

app.use(function (req, res,next){
   res.status(500).json({
       message: 'Something Went wrong',
   })
});

if(process.env.PORT){
    port = process.env.PORT;
}

db.initDb().then(function (){
    app.listen(port);
}).catch(function (error){
    console.log('Connection to the database failed');
});
