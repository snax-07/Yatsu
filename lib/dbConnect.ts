import mongoose from 'mongoose'

type connectionObject = {
    isConnected? : Number,
};
const connection : connectionObject = {};
async function dbConnect() {
    if(connection.isConnected){
        console.log("Database instance is already created !!!");
        return;
    }
    try {
        const result = await mongoose.connect("mongodb+srv://yatsu025:ginny1234@yatsucom.k45kr2q.mongodb.net/yatsuDATA?retryWrites=true&w=majority&appName=yatsuCom");
        connection.isConnected = result.connections[0].readyState;
        console.log("Database is connected successfully !!!");
    } catch (error){
        console.log(error);
        process.exit();
    }
}
export default dbConnect;