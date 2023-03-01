import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userModel = new mongoose.Schema({
    
    email: { 
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    isAdmin: {
        type: Boolean
    }
},  {
    timestamps: true,
    versionKey: false
    }
);

userModel.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userModel.methods.comparePassword = function(candidatePassword, cb) {
    
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if(err) return cb(err);
        cb(null, isMatch);
    });
};

userModel.methods.createJWT = function () {
    return jwt.sign({
        id: this._id,
        email: this.email
    }, 'key_secret', {expiresIn: '24h'})
}

export default mongoose.model("User", userModel);