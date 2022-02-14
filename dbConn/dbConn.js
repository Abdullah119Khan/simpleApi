const mongoose = require('mongoose')

const DB = process.env.db_URL;

mongoose.connect(DB, {

}).then(() => {
    console.log('Connection Success')
}).catch((err) => {
    console.log(`Error ${err}`)
})