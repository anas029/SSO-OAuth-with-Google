# SSO OAuth with Google Template (MERN Stack)

![Project Image](/images/SSO-bannar.jpg)

> A template repository for implementing Single Sign-On (SSO) using Google OAuth and utilizing cookies for session management. Built with the MERN (MongoDB, Express.js, React.js, Node.js) stack.

---

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction

This repository serves as a template for implementing Single Sign-On (SSO) functionality using Google OAuth in web applications. It provides a foundation built on the MERN stack (MongoDB, Express.js, React.js, Node.js), integrating OAuth authentication with session management via cookies.

---

## Features

- **Google OAuth Integration**: Implement Google OAuth 2.0 authentication for user login.
- **Cookie-based Session Management**: Manage user sessions securely using cookies.
- **Redux for Frontend User State Management**: Utilize Redux for managing user authentication state and application state in the frontend.
- **Periodic Google Token Validation**: Periodically validate Google tokens to handle scenarios like user password changes or token expiration.
- **Secure Handling of Refresh Tokens**: Safely manage refresh tokens to maintain user sessions and extend authentication validity.
- **Easy Login and Logout Functions**: Simplify user authentication with easy-to-use login and logout functionality.
- **Authentication and Authorization**: Implement authentication mechanisms to control user access to resources based on roles and permissions.
- **React Router Dom Integration**: Utilize `react-router-dom` for client-side routing and navigation, enhancing application usability and user experience.
- **MERN Stack**: Utilize MongoDB for database, Express.js for backend API, React.js for frontend UI, and Node.js for server-side logic.
- **Customizable**: Easily customizable to fit specific project requirements and additional features.

---

## Installation

To get started with the template, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/sso-google-template.git
   cd sso-google-template
    ```
1. **Clone the repository**:

   ```bash
   # Install server-side dependencies
    npm install

    # Navigate to client directory and install client-side dependencies
    cd client
    npm install
    ```
1. **Set up Google OAuth credentials**:
    - Create a project on Google Cloud Platform and configure OAuth consent screen.
    - Link to [Google Cloud Platform](https://console.developers.google.com)
    - Obtain OAuth client credentials (client ID and client secret) and add them to your environment variables or .env file.

1. **Configure environment variables**:
    - Create a `.env.local` file in the root directory and add the following variables:
    ```bash
    PORT=3000
    DEBUG=true

    # Database  // from: https://mongodb.com
    MONGODB_URI=

    # Google Oauth credentials  // from https://console.developers.google.com
    GOOGLE_CALLBACK=
    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=
    GOOGLE_TOKEN_REVALIDATION_IN_DAYS=
    # Redirection to client (frontend) after sign-in
    FAILURE_REDIRECT=
    SUCCESS_REDIRECT=

    # CORS allowd origns - separated by ,
    CORS_WHITELIST=

    # coockies session
    # keys are separated by ,
    COOKIES_SECRET_KEYS=
    COOKIES_MAX_AGE_IN_DAYS=

    # Secret key for encryption. must be of length 32 Bytes
    ENCRYPTION_KEY=
    ```
1. **Start the development server**:
    ```bash
    # Start server
    npm run dev
    ```
    For frontend development server
    ```bash
    # Start client server
    cd client && npm run dev
    ```

---

## Usage

- Once the development server is running, open your browser and navigate to http://localhost:5173 to access the application. Here are some key URLs:
- Backend API: http://localhost:3000/api/v1/* (Replace * with specific endpoints)
- Frontend UI: http://localhost:5173

---

## Building for Production

To build the application for production, run:

```bash
npm run build
```
This command compiles and bundles the frontend React application for deployment.

---

## Running in Production

To run the application in production mode after building:
- Change `DEBUG` to false in `.env.local` file
- run:
```bash
npm start
```
This command compiles and bundles the frontend React application for deployment.



---

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any enhancements or fixes. For major changes, please open an issue first to discuss the proposed changes.
