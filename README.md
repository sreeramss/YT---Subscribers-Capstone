# Alma Better Capstone Project - 3 YouTube Subcribers 

## Description

This Node.js application acts as a central hub for managing YouTube subscribers. It relies on MongoDB to store subscriber data and uses Express.js and Mongoose to handle the backend operations smoothly. Moreover, we've deployed this application worldwide through the Render platform, making it easy to access and able to handle increased traffic effectively. The live webpage features a user-friendly interface, making it simple for users to navigate and interact with the available API endpoints.

![image](https://github.com/sreeramss/YT-Subscribers/assets/89720320/a7611aa0-806a-49f0-b442-67a3367b4e26)


## Installation

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Ensure MongoDB is installed and running on your system.
4. Inside the Terminal first create databse `node src/createDatabase.js`
5. Start the server using `node src/index.js`.

## API Endpoints

### Get All Subscribers

![image](https://github.com/sreeramss/YT-Subscribers/assets/89720320/8e313be1-4aa1-4fa6-a2a9-899ee9be166d)

- **Endpoint:** `GET /subscribers`
- **Description:** Returns an array of all subscribers in the database.

### Get Subscribers with Selected Fields

![image](https://github.com/sreeramss/YT-Subscribers/assets/89720320/3b600128-31be-4e4a-811b-826b0413cd85)

- **Endpoint:** `GET /subscribers/names`
- **Description:** Returns an array of subscribers with only the `name` and `subscribedChannel` fields.

### Get Subscriber by ID

![image](https://github.com/sreeramss/YT-Subscribers/assets/89720320/11761a77-d594-4603-b802-00dc7eaf265b)

- **Endpoint:** `GET /subscribers/:id`
- **Description:** Returns the details of a subscriber with the given ID.

## Technologies Used

- Node.js
- MongoDB
- Mongoose
- Express

## Usage

1. Start the server by running `node src/index.js`.
2. Use a tool like Postman or your browser to send requests to the provided endpoints.
3. Refer to the HTML file for more information on how to interact with the APIs.


