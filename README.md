# Notes Application

## Introduction

The Notes Application is a simple web application that allows users to create and manage notes. Built using Node.js, Express, and MongoDB, this application provides a RESTful API for creating and retrieving notes.

## Prerequisites

- Node.js
- MongoDB
- Postman

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your_username/note-app.git
   cd note-app

2. Install dependencies:
   npm install

3. Create a .env file in the root directory and add your MongoDB connection string:
   MONGODB_URI=mongodb://localhost:27017/note-app

4. Start mongodb

5. Start the server
   node server.js 

API Endpoints

Method: POST
URL: http://localhost:5000/api/notes
Request Body: (JSON)
{
    "title": "My First Note",
    "content": "This is the content of my first note."
}

