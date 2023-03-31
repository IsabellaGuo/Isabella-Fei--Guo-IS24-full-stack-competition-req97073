# Isabella-Fei--Guo-IS24-full-stack-competition-req97073

This is a full stack product manager web application built with React for the front end and NodeJS for the backend. It allows users to add and edit products, and view a list of existing products.

## Technologies Used

React
NodeJS
React Modal
Material UI
Nodemon

## Installation

To install this application, follow these steps:

Clone this repository to your local machine.
Navigate to the project directory.
Run npm install to install all dependencies.

## Usage

To use this application, follow these steps:

Navigate to the project directory.
Run ```npm start``` to start the application.
In your web browser, go to http://localhost:3000/ to view the application.

When the application loads, you'll see a table displaying a list of existing products. You can click the "Add Product" button to open a popup window that allows you to add a new product. If you want to edit a product, first you need to select the product, then the "Edit a product" button will be enabled. Now you can click on "Edit a product" button to update the product. 

Material UI provides a filtering function, accessible via the three-dot menu next to each column title, that allows users to filter results by various categories. Additionally, in this project, I have included a custom search area that enables users to filter products by 'Scrum Master' or 'Developer'.

## API Endpoints

This application uses a RESTful API that provides the following endpoints:

### GET '/api'

This endpoint returns a list of all products in the database. The response contains an array of product objects, each of which has the following properties:
- Product Number
- Product Name
- Scrum Master
- Product Owner
- Developer Names (up to 5)
- Start Date
- Methodology (Agile or Waterfall)

### POST '/api'
This endpoint creates a new product with the specified properties. The request body should contain a JSON object with the following properties:
- Product Name
- Scrum Master
- Product Owner
- Developer Names (up to 5)
- Start Date
- Methodology (Agile or Waterfall)

### PUT '/api/product/:id
This endpoint updates the product with the specified ID with the provided properties. The request body should contain a JSON object with the following properties:
- Product Name
- Scrum Master
- Product Owner
- Developer Names (up to 5)
- Methodology (Agile or Waterfall)