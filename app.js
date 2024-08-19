const express=require('express')
const cors=require('cors')
const {User}=require('./mongoos')
const app=express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get('/',(req,res)=>{
    res.send("welcome to")
})


app.post('/Signin', async (req, res) => {
    try {
        console.log("Signing in");

        const { usn, name, email, phone, password } = req.body;

        const existingUser = await User.findOne({ $or: [{ email }, { usn }] });

        if (existingUser) {
            return res.status(400).json({ message: 'User with this email or USN already exists' });
        }

 
        const hashedPassword = await bcrypt.hash(password, 12);

     
        const newUser = new User({
            usn,
            name,
            email,
            phone,
            password: hashedPassword
        });


        const result = await newUser.save();

      
        const token = jwt.sign(
            { userId: result._id, email: result.email },
            'your_jwt_secret_key', 
            { expiresIn: '1h' } 
        );

    
        res.status(201).json({ user: result, token });
    } catch (e) {
        console.error(e);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/Login', async (req, res) => {
    try {
        console.log("Logging in");

        const { email, password } = req.body;

        // Check if the user exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { userId: existingUser._id, email: existingUser.email },
            'your_jwt_secret_key', 
            { expiresIn: '1h' } 
        );

        // Send the response with the token and user information
        res.status(200).json({
            user: {
                usn: existingUser.usn,
                name: existingUser.name,
                email: existingUser.email,
                phone: existingUser.phone
            },
            token
        });
    } catch (e) {
        console.error(e);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});