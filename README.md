# E-commerce REST API

## Overview
This is a fully functional E-commerce REST API built using **Node.js, Express, and Mongoose**. The API provides essential e-commerce features, including user authentication (JWT), product management, cart functionality, wishlist, and order management. It also includes an **Admin Control Panel** for managing users, products, orders, and more. Additionally, **AWS S3** is used for storing product images securely.

## Features
### User Features
- User Registration and Login (JWT Authentication)
- View Products
- Add Products to Cart
- Create a Wishlist
- Place Orders
- View Order History
- Update Personal Information
- Change Password

### Admin Features
- Manage Users (CRUD Operations)
- Manage Products (CRUD Operations, including Image Upload to AWS S3)
- Manage Carts
- Manage Orders
- Manage Wishlist

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JWT (JSON Web Token)
- **File Storage:** AWS S3
- **Admin Panel:** Integrated to control users, products, carts, orders, and wishlist

## Installation & Setup

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- AWS Account for S3 storage (optional for image uploads)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/ecommerce-api.git
   cd ecommerce-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the required environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   AWS_S3_BUCKET_NAME=your_s3_bucket_name
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## API Endpoints

### Authentication
| Method | Endpoint         | Description        |
|--------|----------------|-------------------|
| POST   | `/api/auth/register` | User Registration |
| POST   | `/api/auth/login` | User Login |
| GET    | `/api/auth/logout` | User Logout |
| GET    | `/api/auth/me` | Get User Profile |
| PUT    | `/api/auth/updatepassword` | Change Password |
| PUT    | `/api/auth/updateuser` | Update User Information |
| DELETE | `/api/auth/deleteuser` | Delete User Account |

### User Actions
| Method | Endpoint          | Description               |
|--------|------------------|--------------------------|
| GET    | `/api/products`  | View all products        |
| GET    | `/api/cart`      | View cart items         |
| POST   | `/api/cart`      | Add product to cart      |
| PUT    | `/api/cart/:id`  | Update cart item        |
| DELETE | `/api/cart/:id`  | Remove item from cart   |
| GET    | `/api/wishlist`  | View wishlist           |
| GET    | `/api/wishlist/:id` | Get wishlist by ID |
| POST   | `/api/wishlist`  | Add product to wishlist |
| PUT    | `/api/wishlist/:id` | Update wishlist item |
| DELETE | `/api/wishlist/:id` | Remove item from wishlist |
| POST   | `/api/orders`    | Place an order          |
| GET    | `/api/orders`    | View order history      |

### Admin Actions
| Method | Endpoint          | Description            |
|--------|------------------|-----------------------|
| GET    | `/api/admin/users`     | Get all users        |
| DELETE | `/api/admin/users/:id` | Delete a user        |
| POST   | `/api/admin/products`  | Add a new product    |
| PUT    | `/api/admin/products/:id` | Update a product  |
| DELETE | `/api/admin/products/:id` | Delete a product  |
| GET    | `/api/admin/orders`    | Get all orders      |
| PUT    | `/api/admin/orders/:id` | Update order status |
| GET    | `/api/admin/carts`    | Get all carts      |
| GET    | `/api/admin/carts/:id` | Get cart by ID      |
| POST   | `/api/admin/carts`  | Add a cart    |
| PUT    | `/api/admin/carts/:id` | Update a cart  |
| DELETE | `/api/admin/carts/:id` | Delete a cart  |

## Deployment
You can deploy this API using platforms like:
- **Heroku**
- **Vercel**
- **AWS EC2**
- **Digital Ocean**

## License
This project is licensed under the MIT License.

## Author
- **Abdelrahman Reda** ((https://www.linkedin.com/in/abdelrahman-khalaf-243a782b7/))

---

Feel free to modify the README as per your project requirements!
