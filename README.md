# Alma Better Capstone Project - 3 YouTube Subcribers 

## Description

This project provides APIs for managing YouTube subscribers. It includes endpoints for retrieving all subscribers, retrieving subscribers with specific fields, and retrieving a subscriber by their ID.

## Installation

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Ensure MongoDB is installed and running on your system.
4. Start the server using `node src/index.js`.

## API Endpoints

### Get All Subscribers

- **Endpoint:** `GET /subscribers`
- **Description:** Returns an array of all subscribers in the database.

### Get Subscribers with Selected Fields

- **Endpoint:** `GET /subscribers/names`
- **Description:** Returns an array of subscribers with only the `name` and `subscribedChannel` fields.

### Get Subscriber by ID

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


