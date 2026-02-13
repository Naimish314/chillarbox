🔧 ChillarBox Backend API

The ChillarBox Backend is a RESTful API service that manages expense data, transaction records, and spending calculations for the ChillarBox expense tracking application.

It is built to simulate how a real financial tracking system handles user transactions, validates data, and maintains consistency between the client interface and database.

The backend is responsible for:
	•	storing expense records
	•	retrieving transaction history
	•	calculating total spending
	•	ensuring data integrity

The frontend communicates with the backend only through API requests, keeping both layers independent and scalable.



🎯 Purpose of the Backend

Most beginner applications store values directly in the UI, which causes data loss and inconsistency.
This backend solves that by introducing a persistent database and structured request-response communication.

The system was designed to:
	•	persist data across sessions
	•	prevent incorrect calculations
	•	allow future features like analytics and group expenses
	•	mimic a production-style architecture


🏗️ System Architecture

The backend follows a layered architecture:
Client (Frontend)
        ↓
API Routes
        ↓
Controllers (Business Logic)
        ↓
Database Models
        ↓
MongoDB Database

Why this architecture?

Separating logic from routes makes the system:
	•	easier to debug
	•	easier to expand
	•	closer to real industry backend design



🛠️ Technology Stack
	•	Node.js – runtime environment
	•	Express.js – server framework
	•	MongoDB – NoSQL database
	•	Mongoose – object data modeling (ODM)
	•	REST API – communication standard
	•	JSON – data exchange format


📁 Project Structure
backend/
│
├── server.js                → Application entry point
├── config/
│      └── db.js             → MongoDB connection setup
│
├── models/
│      └── Expense.js        → Database schema definition
│
├── controllers/
│      └── expenseController.js → Business logic functions
│
├── routes/
│      └── expenseRoutes.js  → API endpoints
│
└── package.json

⚙️ Core Backend Logic

The backend does not store total balance directly.

Instead, it:
	1.	Fetches all expense records
	2.	Sums the amounts
	3.	Returns the computed total

Reason

Storing balance separately leads to incorrect values if transactions are edited or deleted.
Computing totals dynamically ensures accurate financial data.

🔮 Future Improvements
	•	User authentication (JWT)
	•	Group expense tracking
	•	Monthly spending analytics
	•	Budget alerts
	•	Cloud deployment


👨‍💻 Developer
Patel Naimish
Student Developer | AIML Enthusiast
