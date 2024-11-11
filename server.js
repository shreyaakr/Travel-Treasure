/* eslint-disable no-undef */
// const express = require('express');
// const mysql = require('mysql');
// const bcrypt = require('bcrypt');
// const multer = require('multer');
// const path = require('path');
// const session = require('express-session');

// const app = express();
// const port = 5000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const upload = multer({ dest: 'uploaded_img/' });

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'test'
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log('MySQL Connected...');
// });

// app.use(session({
//   secret: 'secret',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false }
// }));

// app.post('/api/register', upload.single('image'), (req, res) => {
//   const { name, email, password, cpassword } = req.body;
//   const image = req.file ? req.file.filename : '';

//   if (password !== cpassword) {
//     return res.status(400).json({ message: 'Confirm password does not match!' });
//   }

//   if (req.file && req.file.size > 2000000) {
//     return res.status(400).json({ message: 'Image size is too large!' });
//   }

//   const hashedPassword = bcrypt.hashSync(password, 10);

//   db.query('SELECT * FROM `user_form` WHERE email = ?', [email], (err, results) => {
//     if (err) throw err;
//     if (results.length > 0) {
//       return res.status(400).json({ message: 'User already exists' });
//     } else {
//       db.query('INSERT INTO `user_form` (name, email, password, image) VALUES (?, ?, ?, ?)', [name, email, hashedPassword, image], (err, results) => {
//         if (err) throw err;
//         res.status(201).json({ message: 'Registered successfully!' });
//       });
//     }
//   });
// });

// app.post('/api/login', (req, res) => {
//   const { email, password } = req.body;

//   db.query('SELECT * FROM `user_form` WHERE email = ?', [email], (err, results) => {
//     if (err) throw err;
//     if (results.length === 0) {
//       return res.status(400).json({ message: 'Incorrect email or password!' });
//     } else {
//       const user = results[0];
//       if (!bcrypt.compareSync(password, user.password)) {
//         return res.status(400).json({ message: 'Incorrect email or password!' });
//       } else {
//         req.session.user_id = user.id;
//         res.json({ message: 'Login successful!', user });
//       }
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
// ********************************************//


// const express = require('express');
// const app = express();
// const port = 5173;

// // Middleware to parse JSON
// app.use(express.json());

// // Route to handle POST requests to /api/submit
// app.post('/api/submit', (req, res) => {
//   const { name, district } = req.body;
//   console.log('Received data:', name, district);
  
//   // Here you can handle the received data (e.g., save to a database)
//   // For demonstration, let's log the data and send a response
//   res.status(200).send('User saved successfully');
// });

// // Route to handle GET requests to the root URL
// app.get('/', (req, res) => {
//   res.send('Welcome to the Express server!');
// });

// // Catch-all route for undefined routes
// app.use((req, res) => {
//   res.status(404).send('Page not found');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// =====================================================================================//
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // if you need to handle cross-origin requests

const app = express();
const port = process.env.PORT || 5173;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS if needed

// Sample data store
let users = [];

// Routes
app.post('/api/submit', (req, res) => {
  const { name, district } = req.body;
  console.log('Received data:', { name, district });

  // Process the data (e.g., save to database)
  users.push({ name, district });

  // Respond to the client
  res.status(200).json({ message: 'User saved successfully' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
