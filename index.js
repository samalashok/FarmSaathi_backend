const express = require('express')
const app = express()
const port = 5000
const conn = require('./pages/dbconnection')
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', require('./routes/addCartToDB'), require('./routes/loginUser'), require('./routes/createUser'), require('./routes/contactUs'),require('./routes/setAddressData'))
app.use('/api', require('./routes/getProducts'), require('./routes/deleteCartData'),require('./routes/getCartData'), require('./routes/getImages'),require('./routes/getAddressData'))
app.use('/checkout', require('./routes/createOrder'),require('./routes/storeOrder'),require('./routes/storePayment'))
app.use('/account', require('./routes/getOrders'),require('./routes/getPayments'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})