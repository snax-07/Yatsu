import mongoose from 'mongoose'

type connectionObject = {
    isConnected? : Number
};

const connection : connectionObject = {};

async function dbConnect() {
    if(connection.isConnected){
        console.log("Database instance is already created !!!");
        return;
    }

    try {
        const result = await mongoose.connect("");
        connection.isConnected = result.connections[0].readyState;

        console.log("Database is connected successfully !!!")
    } catch (error) {
        console.log("Database connection failed !!!");
        process.exit();
    }
}