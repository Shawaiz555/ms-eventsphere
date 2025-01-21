import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: true},
});

// Explicitly set the collection name
adminSchema.set('collection', 'adminLogin');

const adminLogin =
    mongoose.models?.adminLogin || mongoose.model('adminLogin', adminSchema);

export default adminLogin;
