const mongoose = require('mongoose');
mongoose.set('strictQuery',true);
const dotenv = require('.env');
dotenv.config({ path: 'config/.env' });

//connecting mongoose with database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/csvUploader');

mongoose.connect(DB, {
	useNewUrlParser: true,
	useCreateIndex:true,
 	useUnifiedTopology: true,
	useFindAndModify:false
}).then(() => {
	console.log('connection successful');
}).catch((err) => console.log('no connection',err));


module.exports = mongoose;
