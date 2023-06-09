const express = require("express")
const connectDB = require("./db/db.connect")
const pageNotFound = require("./middleware/pageNotFound")
const cors = require("cors")

const product = require("./routes/product.routes")
const category = require('./routes/category.routes')
const auth = require('./routes/auth.routes')
const cart = require('./routes/cart.routes')
const wishlist = require('./routes/wishlist.routes')
const corsOptions = require("./utils/corsConfig")

const app = express()
app.use(express.json())
app.use(cors(corsOptions))

connectDB()

const port = process.env.PORT

app.get("/", (req,res) => {
    res.send("Server Started on the PORT")
})

// routes middleware
app.use("/products", product)
app.use("/categories", category)
app.use("/", auth)
app.use("/cart", cart)
app.use("/wishlist", wishlist)

app.use(pageNotFound)

app.listen(port, () => {
    console.log("server started")
})