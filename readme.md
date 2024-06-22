- # product Management
- Make a product management application with express,mongoose and typescript

- ## Host Link
- Hosted in Vercel => https://product-management-gold.vercel.app/

- ### Instructions for run this file locally
- npm install --force (run this command in terminal for this file for install all packages)

- ### Features
- Here you can create new product
- You can get all product
- You can get a specific user by using productId
- You can update product
- You can delete product
- Here you can create new order
- You can get all orders for a specific user
- You can search product
- you bcan get order by email
- whwne you place a order then quantity reduce from product quantity

{
"name": "John Doe",
"email": "john.doe@example.com",
"password": "jd-password",
"phone": "0987654321",
"role": "user",
"address": "456 Elm Street, Town, Country"
}
{
"name": "Alice Johnson",
"email": "alice.johnson@example.com",
"password": "aj-password",
"phone": "2223334444",
"role": "user",
"address": "321 Pine Road, Hamlet, Country"
}
{
"name": "Bob Brown",
"email": "bob.brown@example.com",
"password": "bb-password",
"phone": "5556667777",
"role": "admin",
"address": "654 Maple Lane, Borough, Country"
}
{
"name": "Jane Smith",
"email": "jane.smith@example.com",
"password": "js-password",
"phone": "1112223333",
"role": "admin",
"address": "789 Oak Avenue, Village, Country"
}
src/
|-- user/
| |-- user.controller.ts| |-- user.service.ts
| |-- user.model.ts |-- user.route.ts |-- user.validation.ts
|-- service/ |-- service.controller.ts
| |-- service.interface.ts |-- service.model.ts |-- service.route.ts |-- service.service.ts |-- service.validation.ts
|
|-- middleware/
| |-- auth.middleware.ts
|-- app.ts
|-- server.ts
