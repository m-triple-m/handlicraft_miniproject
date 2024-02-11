const mongoose = require('mongoose');

const url = "mongodb+srv://Faisallko:Password9984@cluster0.ccz3v46.mongodb.net/mern_admin?retryWrites=true&w=majority";

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;