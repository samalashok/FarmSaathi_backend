const Razorpay = require('razorpay')
const instance = new Razorpay({
    key_id: 'rzp_test_ORMbGCBejAkUwU',
    key_secret: 'MCwpMgmsev6opHBHyrSJUFR9',
}); 

module.exports = instance;