const express = require("express");

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/add-new-items', (req, res, next) => {
    res.send(
        `<h1>Motor</label>
        <form action="/item" method="POST">
            <label>Brand</label>
            <input type="text" name="name" placeholder="Name" required>
            <label>License</label>
            <input type="text" name="license" placeholder="Name" required>
            <label>People</label>
            <input type="numbr" name="travelers" placeholder="Name" required>
            <input type="submit" value="Submit">
        </form>
        `
    )
});

app.use('/item', (req, res, next)=>{
    console.log(req.body)
    res.send(`<h1>This is item section</h1>`)
    // res.redirect('/')
    // next()
})
app.use('/', (req, res, next)=>{
    console.log("hello")
    res.send(`<h1>Welcome</h1>`);
    next();
})


const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})