import mongoose from 'mongoose';

const connectMongoDB = async () => {
    const mongoUri = process.env.MONGODB_URI;
    
    if (!mongoUri) {
        console.error('MONGODB_URI is not defined');
        return;
    }
    
    try {
        await mongoose.connect(mongoUri);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

export default connectMongoDB;