import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export default class LoginController {
    static async login(req, res, next) {
        const { email, password } = req.body;
        try {
            const existingUser = await User.findOne({ email });
            if (!existingUser || existingUser.password !== password) {
                return res.status(401).json({ message: "Wrong credentials" });
            }

            const token = jwt.sign(
                { userId: existingUser.id, email: existingUser.email },
                "secretkeyappearshere",
                { expiresIn: "1h" }
            );

            res.status(200).json({
                success: true,
                data: { userId: existingUser.id, email: existingUser.email, token },
            });
        } catch (err) {
            console.error("Login error:", err);
            next(err);
        }
    }

    static async signup(req, res, next) {
        const { name, email, password } = req.body;
        try {
            const newUser = new User({ name, email, password });
            await newUser.save();

            const token = jwt.sign(
                { userId: newUser.id, email: newUser.email },
                "secretkeyappearshere",
                { expiresIn: "1h" }
            );

            res.status(201).json({
                success: true,
                data: { userId: newUser.id, email: newUser.email, token },
            });
        } catch (err) {
            console.error("Signup error:", err);
            next(err);
        }
    }
}
