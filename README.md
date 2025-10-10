# SBA 6: TypeScript & Advanced JavaScript

## Overview

In this assessment, you will apply the skills you’ve developed throughout the TypeScript and Advanced JavaScript module to build a functional, real-world application. This project will test your understanding of <b>TypeScript features</b>, <b>object-oriented programming (OOP) principles</b>, <b>asynchronous operations</b>, <b>error handling</b>, and <b>API interaction</b>.

You will create an <b>E-commerce Product Management System</b> using TypeScript. The final deliverable will include a GitHub repository with your project and a written reflection on your approach and the challenges you faced.

## Part 1: Set Up Your Project:

### Create new vite project, cd into it, install dependencies, and run:

```
npm install vite@latest
cd ecommerce-system
npm i
npm run dev
```

### Organize Your Folder Structure:

```
e-commerce-system/
├── src/
│   ├── models/
│   │   ├── Product.ts
│   ├── services/
│   │   └── apiService.ts
│   ├── utils/
│   │   ├── discountCalculator.ts
│   │   ├── errorHandler.ts
│   │   └── taxCalculator.ts
│   └── main.ts
└── tsconfig.json
```

## Part 2: API Research

### 1. API Research:

Research and analyze the Dummy JSON Products API .
You will be implementing features that interact with this API.
Project Planning:

### 2. Based on your API research, plan the structure of your project. You will need to create API requests, handle errors, and display product information.

Before you begin coding, create a project plan and outline the steps you’ll take to implement the API interactions and display product data.
Ensure you have thoroughly read through the requirements for the project below <i>before</i> you begin planning it.

## Part 3: Implementation

### 1. Develop Product Class:

#### Product Base Class (`Product.ts`):

- Define a Product class that includes the appropriate properties based on data provided in the API response.
- Include methods `displayDetails()` and `getPriceWithDiscount()`, and implement them appropriately based on the provided data.

### 2. Implement Utilities:

#### Discount Calculator Module (`discountCalculator.ts`):

- Create a `calculateDiscount()` function to handle discount calculations for products.
- This function should return the <i>dollar amount</i> that a product is discounted by. For example, if a product costs $100 and has a 10% discount, the function should return $90.

#### Tax Calculator Module (taxCalculator.ts):

- Create a `calculateTax()` function to handle tax calculations for products.
- This function should return the dollar amount that a product is taxed at. For example, if a product costs $100 and is taxed at 10%, $90.
- Note that the product data returned from the API does not include a `taxPercentage` field like it includes a `discountPercentage` field.
- Apply a default standard tax rate of <b>4.75%</b> to each product; however, products with a category of “groceries” should only be taxed at <b>3%</b>.

### 3. Handle Asynchronous Operations:

#### API Service (`apiService.ts`):

- Create API requests using `async/await` and Promises.
- Implement functions to fetch product data and handle errors using `try/catch`.

### 4. Error Handling Utility:

#### Error Handler Module (`errorHandler.ts`):

Implement a custom error class and functions to handle different types of errors gracefully.

### 5. Create the Main Application:

#### Main Entry File (`index.ts`):

- Import the product classes, tax calculator, and API service.
- Create instances of `Product` by fetching product data from the API.
- Use asynchronous functions to fetch product data and display it.
- Demonstrate error handling and OOP principles in action.

### Part 4: Testing and Finalizing

#### 1. Compile Your Code:

Use TypeScript to compile your code:

`npx tsc`

#### 2. Run Your Application:

Use Node.js to run your compiled JavaScript code:

`node dist/index.js`

#### 3. Test and Debug:

- Test all functionalities to ensure they work as expected.
- Check for any TypeScript errors or runtime issues and resolve them.

### Part 5: (Optional) User Interface

#### Ensure the project is fully functional before creating a user interface.

With any additional time, you can implement a user interface for the application. Creating an interface will allow you to demonstrate your project in a more visually appealing way, as well as include it within your portfolio.

#### 1. Create User Interface:

- Create a basic user interface using HTML.

#### 2. Implement User Interaction:

- Add event listeners to handle user input and interactions.
- Update the UI based on user actions and API responses.

#### 3. Style the UI:

- Use CSS to style the user interface.

### Deliverables

You must submit the following items via Canvas:

#### 1. GitHub Repository:

- Link to your GitHub repository with the complete project code.
- Ensure your repository is publicly accessible or that the appropriate permissions are granted for review.

#### 2. Reflection Document:

Write a reflection of roughly 300 words addressing:

- How you implemented TypeScript features and OOP principles.
- The challenges you encountered and how you overcame them.
- How you handled asynchronous operations and error management.
