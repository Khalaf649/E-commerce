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

### User Actions
| Method | Endpoint          | Description               |
|--------|------------------|--------------------------|
| GET    | `/api/products`  | View all products        |
| POST   | `/api/cart`      | Add product to cart      |
| GET    | `/api/cart`      | View cart items         |
| POST   | `/api/wishlist`  | Add product to wishlist |
| GET    | `/api/wishlist`  | View wishlist           |
| POST   | `/api/orders`    | Place an order          |
| GET    | `/api/orders`    | View order history      |
| PUT    | `/api/users/update` | Update user information |
| PUT    | `/api/users/password` | Change password        |

### Admin Actions
| Method | Endpoint          | Description            |
|--------|------------------|-----------------------|
| GET    | `/api/users`     | Get all users        |
| DELETE | `/api/users/:id` | Delete a user        |
| POST   | `/api/products`  | Add a new product    |
| PUT    | `/api/products/:id` | Update a product  |
| DELETE | `/api/products/:id` | Delete a product  |
| GET    | `/api/orders`    | Get all orders      |
| PUT    | `/api/orders/:id` | Update order status |

## Deployment
You can deploy this API using platforms like:
- **Heroku**
- **Vercel**
- **AWS EC2**
- **Digital Ocean**

## License
This project is licensed under the MIT License.

## Author
- [**Your Name**](https://www.linkedin.com/in/abdelrahman-khalaf-243a782b7/) (Your GitHub/LinkedIn Profile)

---

Feel free to modify the README as per your project requirements!
