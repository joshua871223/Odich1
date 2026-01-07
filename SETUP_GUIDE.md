# How to Run the Odichi Project

This project consists of two main components:
1. **Backend** - Node.js/Express API server
2. **Admin** - Next.js frontend application

## Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn
- MongoDB database (local or remote)

## Setup Instructions

### 1. Backend Setup

1. Navigate to the Backend directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the Backend directory with the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=3001
   ```
   Example MongoDB URI format:
   ```
   MONGO_URI=mongodb://localhost:27017/odichi
   ```
   or for MongoDB Atlas:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
   ```

4. Run the backend server:
   - For development (with auto-reload):
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

   The backend will run on **http://localhost:3001** (or the port specified in your `.env` file).

### 2. Admin Frontend Setup

1. Navigate to the Admin directory:
   ```bash
   cd Admin
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

   The admin frontend will run on **http://localhost:3004**

## Running Both Services

You need to run both services simultaneously. Open two terminal windows:

**Terminal 1 - Backend:**
```bash
cd Backend
npm install  # if not already done
npm run dev
```

**Terminal 2 - Admin:**
```bash
cd Admin
npm install  # if not already done
npm run dev
```

## Accessing the Application

- **Admin Frontend**: http://localhost:3004
- **Backend API**: http://localhost:3001
- **API Health Check**: http://localhost:3001/ (should show "Odichi API running 🥳")

## Additional Notes

- The backend uses MongoDB for data storage. Make sure your MongoDB instance is running and accessible.
- The backend also uses AWS S3 for file storage (check `Backend/configs/aws-config.js` for AWS configuration).
- The Admin frontend uses AWS Amplify for authentication (check `Admin/amplify` directory for configuration).

## Troubleshooting

1. **Port already in use**: Change the port in the respective `package.json` files or `.env` files.
2. **MongoDB connection error**: Verify your `MONGO_URI` in the Backend `.env` file is correct.
3. **Module not found errors**: Run `npm install` in both directories.
4. **CORS errors**: The backend CORS is configured to allow all origins. If you need to restrict it, modify `Backend/app.js`.

