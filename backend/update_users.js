const mongoose = require('mongoose');
const User = require('./models/User');
const dotenv = require('dotenv');

dotenv.config();

const updateUsers = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const result = await User.updateMany(
            { role: { $exists: false } },
            { $set: { role: 'user' } }
        );
        console.log(`Updated ${result.modifiedCount} users.`);
        
        const allUsers = await User.find({});
        console.log('All users after update:', JSON.stringify(allUsers, null, 2));
        
        mongoose.connection.close();
    } catch (err) {
        console.error(err);
    }
};

updateUsers();
