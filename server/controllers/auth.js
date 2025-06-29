const AuthSchema = require('../models/auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        // 1. Email validation (DÜZELTİLDİ)
        if (!isEmail(email)) {
            return res.status(400).json({ msg: "Invalid email format" });
        }

        // 2. Kullanıcı kontrolü
        const user = await AuthSchema.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: "User already exists!" });
        }

        // 3. Password validation (Geliştirildi)
        if (password.length < 8 ||
            !/[A-Z]/.test(password) ||
            !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return res.status(400).json({
                msg: "Password must be at least 8 characters with at least one uppercase and one special character"
            });
        }

        // 4. Hash password
        const passwordHash = await bcrypt.hash(password, 12);

        // 5. Yeni kullanıcı oluştur
        const newUser = await AuthSchema.create({
            username,
            email,
            password: passwordHash
        });

        // 6. Token oluştur
        const token = jwt.sign({ id: newUser._id }, "SECRET_KEY", { expiresIn: '10d' });

        // 7. DÜZELTİLDİ: Nokta ile .json()
        res.status(201).json({
            status: "OK",
            newUser,
            token
        });

    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. DÜZELTİLDİ: { email } object olarak
        const user = await AuthSchema.findOne({ email });

        if (!user) {
            return res.status(404).json({ msg: "User not found!" });
        }

        // 2. Şifre karşılaştırma
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        // 3. Token oluştur
        const token = jwt.sign({ id: user._id }, "SECRET_KEY", { expiresIn: '10d' });

        // 4. DÜZELTİLDİ: Nokta ile .json()
        res.status(200).json({
            status: "OK",
            user,
            token
        });

    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

// DÜZELTİLDİ: Email validation tersine çevrildi
function isEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

module.exports = { register, login };