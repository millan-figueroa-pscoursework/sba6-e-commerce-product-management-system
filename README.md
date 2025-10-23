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

- [ ] Research and analyze the Dummy JSON Products API.
- [ ] Plan your project structure based on the API data.
- [ ] Outline steps for API requests, error handling, and product display.
- [ ] Review all project requirements before coding begins.

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

- [ ] Create `apiService.ts` to handle API requests using `async/await` and Promises.
- [ ] Implement error handling using `try/catch`.

### Error Handling

- [ ] Create `errorHandler.ts` and define a custom error class.
- [ ] Add functions to handle various error types gracefully.

### Main App

- [ ] In `main.ts`, import `Product`, utilities, and the API service.
- [ ] Fetch and create `Product` instances using API data.
- [ ] Display product information in the console or UI.
- [ ] Demonstrate OOP, async flows, and error handling.

## Part 4: Testing & Finalizing

- [ ] Test and debug all functionalities.
- [ ] Fix any TypeScript or runtime errors.

## Part 5: (Optional) User Interface

- [ ] Ensure the project is fully functional before starting the UI.
- [ ] Create a basic HTML user interface.
- [ ] Add event listeners to handle user input and interactions.
- [ ] Update the UI dynamically based on API responses.
- [ ] Style the interface using CSS.

## Deliverables

- [ ] Submit your GitHub repository link with the complete project code.
- [ ] Write a 300-word reflection covering:
  - How TypeScript features and OOP principles were implemented.
  - The challenges you faced and how you overcame them.
  - How asynchronous operations and errors were handled.
