const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Database connected");
})
    .catch((error) => {
        console.error("Unsucessfull to the database", error);
});
