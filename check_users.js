const mongoose = require('mongoose');
const User = require('./backend/models/User');
const dotenv = require('dotenv');

dotenv.config({ path: './backend/.env' });

const checkUser = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const users = await User.find({}, 'username role email');
        console.log('Stored Users:', JSON.stringify(users, null, 2));
        mongoose.connection.close();
    } catch (err) {
        console.error(err);
    }
};

checkUser();
