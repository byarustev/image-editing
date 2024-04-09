import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL

interface MongooseConnection {
    conn: Mongoose | null,
    promise: Promise<Mongoose> | null
}

// next js runs in a serverless manner. meaning that for every server call we need to 
// re-establish the connection

let cached: MongooseConnection = (global as any).mongoose

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null }
}

// This had to be done this way due to the serverless nature of next js.
export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn

    if (!MONGODB_URL) throw new Error('Mongodb url not defined')

    cached.promise = cached.promise || mongoose.connect(MONGODB_URL, { dbName: 'imagify', bufferCommands: false })

    cached.conn = await cached.promise // above promise will resolve into a connection

    return cached.conn
}