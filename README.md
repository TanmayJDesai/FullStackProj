## Tutor Stem

# Overview
Tutor Stem is a tutoring page website that connects high school students with college tutors. This repository contains both the client-side (React.js) and server-side (Node.js, Express.js, and MongoDB) code.

# Table of Contents
- [Client Side](#client-side)
  - [Getting Started](#getting-started-client)
  - [Features](#features-client)
  - [Code Structure](#code-structure-client)
  - [Contributing](#contributing-client)
  - [License](#license-client)

- [Server Side](#server-side)
  - [Getting Started](#getting-started-server)
  - [API Endpoints](#api-endpoints)
  - [Database](#database)
  - [Configuration](#configuration)
  - [Contributing](#contributing-server)
  - [License](#license-server)

## Client Side
# Getting Started Client
* Clone the repository:
  ```
  git clone [client-repository-url]
  cd [client-repository-folder]
  ```
* Install Dependencies
   ```
  npm install
  ```
* Start the Development Server
  ```
  npm start
  ```
  * Open  http://localhost:3000 in your browser.

 ## Features Client
* Fetching Posts:
  * Utilizes Redux to fetch and display posts.
* CRUD Operations:
  * Allows users to create, update, and delete posts.
* File Upload:
  * Supports attaching images (in PDF format) to posts.

## Code Structure Client

# Note: 
This is a very generic structure, in the actual code you will find a more intricate structure. 

```
- actions/posts.js:
  - Contains Redux action creators for fetching, creating, updating, liking, and deleting posts.
- api/index.js:
  - Defines API functions for interacting with the backend.
- components/Form/Form.js:
  - React component for creating and updating posts.
- components/Posts/Posts.js:
  - React component for displaying a list of posts.
- components/Post/Post.js:
  - React component for rendering an individual post.
- styles.js:
  - Contains Material-UI styling for components.
```
## Contributing Client
We welcome contributions! Feel free to open issues or submit pull requests.

## License Client
This project is licensed under the MIT License.

## Server Side
# Getting Started Server

* Clone the repository:
  ```
  git clone [server-repository-url]
  cd [server-repository-folder]
  ```
* Install Dependencies
   ```
  npm install
  ```
* Start the Development Server
  ```
  npm start
  ```
* The server will run on the specified port (default is 3000).

## API Endpoints
```
- GET /posts: Retrieve all posts.
- GET /posts/:id: Retrieve a specific post by ID.
- POST /posts: Create a new post.
- PATCH /posts/:id: Update a post by ID.
- DELETE /posts/:id: Delete a post by ID.
- PATCH /posts/:id/likePost: Increment the like count for a post.
```

## Database
The server connects to a MongoDB database using Mongoose. The schema for a post includes fields like `title`, `message`, `creator`, `tags`, `selectedFile`, `likeCount`, and `createdAt`.

## Configuration
The MongoDB connection URI is specified in the MONGO_URI variable in the main server file.

```
const MONGO_URI = 'mongodb+srv://[username]:[password]@[cluster].mongodb.net/[database]';
```

* Note:
  * Replace [username], [password], [cluster], and [database] with your MongoDB credentials.
 
# Contributing Server
We welcome contributions! Feel free to open issues or submit pull requests.

# License Server
This project is licensed under the MIT License.

* Please replace [client-repository-url], [client-repository-folder], [server-repository-url], and [server-repository-folder] with your actual repository URLs and folder names. Additionally, update the MongoDB connection URI in the server section with your specific credentials.


--



