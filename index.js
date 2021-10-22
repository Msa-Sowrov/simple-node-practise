const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const port = 5000;

const users = [
    {
        id:0,
        name:"sowrov1",
        age:21,
        gmail:'mdsowrov1@gmail.com'
    },
    {
        id:1,
        name:"sowrov",
        age:21,
        gmail:'mdsowrov@gmail.com'
    },
    {
        id:2,
        name:'hasan',
        age:23,
        gmail:'hasan@gmail.com'
    },
    {
        id:3,
        name:'joynal',
        age:22,
        gmail:'joynal@gmail.com'
    },
    {
        id:4,
        name:'ikhtiar',
        age:27,
        gmail:'ikhtiar@gmail.com'
    },
    {
        id:5,
        name:'shawon',
        age:22,
        gmail:'shawon@gmail.com'
    },
]
app.get('/',(req, res)=>{
    res.send('hello from second app')
})

app.get('/users',(req,res)=>{
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user=>user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else{
        res.send(users)

    }

})
app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})
app.post('/users', (req, res)=>{
    const newuser = req.body;
    newuser.id = users.length;
    users.push(newuser)
    console.log('hittig the post', req.body)
    res.json(newuser)
})

app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})
