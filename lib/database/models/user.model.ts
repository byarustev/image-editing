// clerkId, email, username, photo, firstname, lastName, creditBalance
import { Document, Schema, model, models } from "mongoose";

export interface IUser extends Document {
    clerkId: string;
    email: string;
    username: string;
    photo?: string;
    firstname?: string;
    lastName?: string;
    creditBalance?: number;
    planId?: Number
}


const UserSchema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    photo: { type: String },
    firstname: { type: String },
    lastName: { type: String },
    planId: { type: Number, default: 1 },
    creditBalance: { type: Number, default: 10 }
});

// if model doesn't exist create a new one based off the provided schema
const User = models?.User || model('User', UserSchema)

export default User