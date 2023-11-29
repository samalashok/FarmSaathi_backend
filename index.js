const express = require('express')
const app = express()
const conn = require('./pages/dbconnection')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

// console.log(process.env.PORT)
app.use(cors())
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})
app.get('/', (req, res) => {
  res.send("backend is running")
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', require('./routes/addCartToDB'), require('./routes/loginUser'), require('./routes/createUser'), require('./routes/contactUs'), require('./routes/setAddressData'))
app.use('/api', require('./routes/getProducts'), require('./routes/deleteCartData'), require('./routes/getCartData'), require('./routes/getImages'), require('./routes/getAddressData'))
app.use('/checkout', require('./routes/createOrder'), require('./routes/storeOrder'), require('./routes/storePayment'))
app.use('/account', require('./routes/getOrders'), require('./routes/getPayments'))
app.use('/auth', require('./routes/sendOtp'), require('./routes/verifyOtp'))
app.listen(5000, () => {
  console.log(`Example app listening on port ${process.env.PORT || 4000}`)
})