// 1.import the express
const express =require('express')
const Food=require('./food')
const cors =require('cors')
const Signup=require('./login')
// const Food = require('./models')



// 2

const app=new express()

// middleware

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())



app.post('/place-order', (req, res) => {
    const { product } = req.body;
    
    // Here you would typically validate the input data
    
    // Simulating the process of placing an order by pushing it to the orders array
    orders.push(product);
    
    // Send a response to the client
    res.status(201).json({ message: 'Order placed successfully' });
});

app.post('/feedback', (req, res) => {
    const { name, email, feedback } = req.body;

    // Here, you can process the feedback data (e.g., save it to a database)
    console.log(`Feedback received from ${name} (${email}): ${feedback}`);

    // Send a response back to the client
    res.status(200).json({ message: 'Feedback received!' });
});


// api to add data to db
app.post('/add',async(req,res)=>{
    const result=await new Food(req.body);
    result.save();
    res.send("data added")
})
app.post('/Signup',async(req,res)=>{
    var result = await new Signup(req.body)
    result.save()
    res.send("Account Created")
})

app.get('/Update',async (req, res)=> {
    var data = await Food.find()
    res.json(data)
    console.log(data)
})
  
// Deleting a data
app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params);
    let id = req.params.id
    await Food.findByIdAndDelete(id);
    res.send("Deleted")

})

app.put('/edit/:id',async(req,res)=>{
    let id = req.params.id
    await Food.findByIdAndUpdate(id,req.body);
    res.send("updated")
    })
    

// delete

//api for login
app.post("/login", (req, res) => {
    const { email, epass } = req.body;
    Signup.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.epass === epass) {
                    res.json("success")
                } else {
                    res.json("password is incorrect")
                }
            } else {
                res.json("no data existed")
            }
        })
        .catch(err => console.log(err));
})

// api to view data from db
app.get('/view',async(req,res)=>{
    let result=await Food.find();
    res.json(result);
})
app.get('/view', async (req, res) => {
;
    let result = await Signup.find();
    res.json(result);
})
// 4.create a localhost port
app.listen(9030,()=>{
    console.log("port is running at 9030")
})