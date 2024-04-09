import { Document, Schema, model, models } from "mongoose";

export interface IImage extends Document {
    // extending Document from mongoose gives it fields like _id
    title: string;
    transformationType: string;
    plublicId: string;
    secureUrl: URL;
    width?: number;
    height?: number;
    config?: object;
    transformationUrl?: URL;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author?: {
        _id: String;
        firstName: String;
        lastName: String;
    };
    createdAt?: Date;
    updatedAt?: Date;
}

const ImageSchema = new Schema({
    // shema definition
    title: { type: String, required: true },
    transformationType: { type: String, required: true },
    plublicId: { type: String, required: true },
    secureUrl: { type: URL, required: true },
    width: { type: Number },
    height: { type: Number },
    config: { type: Object },
    transformationUrl: { type: URL },
    aspectRatio: { type: String },
    color: { type: String },
    prompt: { type: String }, // promt used to generate image
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

// if model doesn't exist create a new one based off the provided schema
const Image = models?.Image || model('Image', ImageSchema)

export default Image;