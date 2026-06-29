# Dwello - Property Rental Platform

![Dwello Cover](https://res.cloudinary.com/dag2wsmmm/image/upload/v1782550659/Dwello_DEV/fzyulky3sewpgu1bwyk6.jpg)

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

## 💻 Local Setup & Installation

To run this project on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/anuragnagyan17/Dwello-airbnb-clone.git
   cd Dwello-airbnb-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root of your project and add your own credentials:
   ```env
   CLOUD_NAME=your_cloudinary_name
   CLOUD_API_KEY=your_cloudinary_key
   CLOUD_API_SECRET=your_cloudinary_secret
   ATLASDB_URL=your_mongodb_connection_string
   SECRET=your_session_secret
   ```

4. **Initialize the Database:**
   *(Optional) To populate your database with dummy listings:*
   ```bash
   node init/index.js
   ```

5. **Start the server:**
   ```bash
   nodemon app.js
   ```
   Open your browser and navigate to `http://localhost:8080`.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!

## 📝 License
This project is open source and available under the [ISC License](LICENSE).
