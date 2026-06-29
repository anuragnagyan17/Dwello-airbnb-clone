# Dwello - Property Rental Platform

Dwello is a full-stack, responsive property rental web application inspired by Airbnb. It allows users to browse diverse properties, create an account to list their own homes, and leave interactive reviews.

## 🚀 Features

- **User Authentication:** Secure signup, login, and logout functionality using Passport.js.
- **Full CRUD Functionality:** Users can Create, Read, Update, and Delete their own property listings and reviews.
- **Image Uploads:** Seamless cloud image storage utilizing Cloudinary and Multer.
- **Interactive Maps:** Real-time geocoding and map rendering powered by Leaflet.js and OpenStreetMap (100% free and open-source).
- **Responsive UI:** Beautiful, mobile-friendly interface styled with Bootstrap 5 and custom CSS.
- **Security:** Built-in protection against MongoDB Injection, XSS attacks, and unauthenticated routing.

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Bootstrap 5, EJS (Embedded JavaScript templating)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Maps & Geocoding:** Leaflet.js, Node-Geocoder (OpenStreetMap)
- **Cloud Storage:** Cloudinary

## 💡 What I Learned
Building this full-stack application from scratch allowed me to deepen my understanding of:
- **Authentication & Security:** Implementing Passport.js for secure session-based authentication and protecting routes from unauthorized access.
- **MVC Architecture:** Structuring a Node.js/Express app using the Model-View-Controller pattern for clean, maintainable code.
- **Database Modeling:** Designing complex data relationships in MongoDB and using Mongoose middleware for cascading deletes (e.g., deleting a listing deletes all its reviews).
- **Third-Party Integrations:** Connecting cloud APIs like Cloudinary for image hosting and utilizing Leaflet + OpenStreetMap for completely open-source geocoding and interactive maps.

## 🚧 Challenges & Problem Solving
A major technical challenge I faced was handling third-party mapping APIs. Initially, the project was designed for a paid mapping service. To make the project completely free and open-source without sacrificing quality, I migrated the entire mapping architecture to **Leaflet.js and OpenStreetMap**. This required restructuring the frontend map rendering logic and integrating `node-geocoder` on the backend to successfully convert user input into geographic coordinates.

## 🔮 Future Improvements
- Implement a live booking system and calendar integration.
- Add a user-to-user messaging feature.
- Build an analytics dashboard for property owners.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!
