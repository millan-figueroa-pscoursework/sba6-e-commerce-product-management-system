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

- [x] Research and analyze the Dummy JSON Products API.
- [x] Plan your project structure based on the API data.
- [x] Outline steps for API requests, error handling, and product display.
- [x] Review all project requirements before coding begins.

## Part 3: Implementation

### Product Class

- [x] Create `Product.ts` with all relevant properties from the API.
- [x] Implement the `displayDetails()` method.
- [x] Implement the `getPriceWithDiscount()` method.

### Utilities

- [x] Create `discountCalculator.ts` and define `calculateDiscount()` that returns the discounted dollar amount.
- [x] Create `taxCalculator.ts` and define `calculateTax()` that returns the taxed amount.
- [x] Apply a default tax rate of **4.75%**.
- [x] Apply a **3%** tax rate for products in the "groceries" category.

### Asynchronous Operations

- [x] Create `apiService.ts` to handle API requests using `async/await` and Promises.
- [x] Implement error handling using `try/catch`.

### Error Handling

- [x] Create `errorHandler.ts` and define a custom error class.
- [x] Add functions to handle various error types gracefully.

### Main App

- [x] In `main.ts`, import `Product`, utilities, and the API service.
- [x] Fetch and create `Product` instances using API data.
- [x] Display product information in the console or UI.
- [x] Demonstrate OOP, async flows, and error handling.

## Part 4: Testing & Finalizing

- [x] Test and debug all functionalities.
- [x] Fix any TypeScript or runtime errors.

## Part 5: (Optional) User Interface

- [x] Ensure the project is fully functional before starting the UI.
- [x] Create a basic HTML user interface.
- [x] Add event listeners to handle user input and interactions.
- [x] Update the UI dynamically based on API responses.
- [x] Style the interface using CSS.

## Deliverables

- [x] Submit your GitHub repository link with the complete project code.
- [x] Write a 300-word reflection covering:
  - How TypeScript features and OOP principles were implemented.
  - The challenges you faced and how you overcame them.
  - How asynchronous operations and errors were handled.

In this project I built a small web app that shows products, their prices, discounts, and the total cost with tax using Typescript and vanilla CSS. I used classes to represent each product, which is part of OOP. Each product has its own properties like price, category, and discount percentage, and it can also have its own functions, like one that calculates the tax and discounted price. Using classes made it easier to keep the code organized and make sure every product behaved the same way.

One of the hardest parts was figuring out how to handle the data that comes from the API. The data arrives as plain objects and not as my Product class, so I had to adjust my functions to accept simpler data shapes so Typescript wouldn't scream at me.

Another tricky thing was dealing with asynchronous operations. When I fetch products from the API, the browser has to wait for the server to respond, but it doesn’t stop everything else from running. I used async and await so the code waits properly before trying to show the products. I also used try and catch blocks to handle any errors that happen while fetching data, so if something goes wrong, the app shows a helpful message instead of crashing.
