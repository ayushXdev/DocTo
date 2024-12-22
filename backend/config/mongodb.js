import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Listen for connection events
        mongoose.connection.on('connected', () => console.log("Database Connected"));
        mongoose.connection.on('error', (err) => console.error(`Database connection error: ${err}`));

        // Use the provided URI directly
        const mongoURI = process.env.MONGODB_URI;
        if (!mongoURI) {
            throw new Error("MONGODB_URI is not defined in your environment variables.");
        }

        // Connect to MongoDB
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connection successful.");
    } catch (error) {
        console.error(`Failed to connect to MongoDB: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;

// Note: Avoid using the '@' symbol in your database user's password unless it's URL-encoded, as it may cause connection issues.
