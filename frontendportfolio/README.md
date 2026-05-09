# Modern React Portfolio

A modern, fast, and responsive portfolio designed explicitly for Full Stack Developers. 
Built using React, Tailwind CSS v4, Framer Motion, and React Icons.

## Features

- ⚡️ React + Vite for ultrafast development
- 🎨 Tailwind CSS v4 for utility-first styling
- ✨ Framer Motion for smooth animations and transitions
- 💻 React Icons for beautifully embedded SVG icons
- 📱 Fully Responsive (Mobile, Tablet, Desktop)
- 🍔 Mobile Hamburger Menu
- 🌙 Modern, Clean, and Premium UI

## Folder Structure

```
src/
├── assets/          # Static assets (images, fonts)
├── components/      # Reusable UI components
│   ├── Navbar.jsx   # Sticky header with scrolling indication
│   ├── Hero.jsx     # Landing section
│   ├── About.jsx    # About me text
│   ├── Skills.jsx   # Skills grid with progress animations
│   ├── Projects.jsx # Project cards
│   ├── Services.jsx # Services offered
│   ├── Contact.jsx  # Contact form UI
│   └── Footer.jsx   # Bottom footer
├── App.jsx          # Root component integrating all sections
├── App.css          # (Optional) base CSS
├── index.css        # Tailwind V4 setup entrypoint
└── main.jsx         # React DOM rendering
```

## Backend Email Integration Instructions (Nodemailer)

The `Contact.jsx` form is pure frontend UI right now. To connect it to your Express backend (like `backendprofilo` folder), follow these steps:

1. **In your Backend (`backendprofilo`)**, install required packages:
   ```bash
   npm install express cors nodemailer dotenv
   ```

2. **Create `.env` file** in `backendprofilo`:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=5000
   ```

3. **Create `server.js`** in `backendprofilo`:
   ```javascript
   const express = require('express');
   const cors = require('cors');
   const nodemailer = require('nodemailer');
   require('dotenv').config();

   const app = express();
   app.use(cors());
   app.use(express.json());

   app.post('/api/contact', async (req, res) => {
     const { name, email, subject, message } = req.body;
     
     let transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
         user: process.env.EMAIL_USER,
         pass: process.env.EMAIL_PASS
       }
     });

     try {
       await transporter.sendMail({
         from: email,
         to: process.env.EMAIL_USER,
         subject: `New Portfolio Message: ${subject}`,
         text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
       });
       res.status(200).json({ success: true, message: 'Message sent!' });
     } catch (error) {
       res.status(500).json({ success: false, error: error.message });
     }
   });

   app.listen(process.env.PORT || 5000, () => console.log('Server running!'));
   ```

4. **Update `Contact.jsx` Endpoint**:
   Inside `src/components/Contact.jsx`, change `handleSubmit` to perform a `fetch` request:
   ```javascript
   const handleSubmit = async (e) => {
     e.preventDefault();
     try {
       const response = await fetch('http://localhost:5000/api/contact', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(formData)
       });
       if(response.ok) alert('Message sent successfully!');
     } catch (err) {
       console.error(err);
     }
   };
   ```
