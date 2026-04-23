# 📝 Todo List App — Node.js + MySQL

A full-stack Todo List web application built with **Node.js**, **Express**, **MySQL**, and **Javacript** with a clean Bootstrap UI. Supports full **CRUD operations** (Create, Read, Update, Delete) with data persisted in a MySQL database.

---

## 🖥️ Preview

<img width="1920" height="831" alt="Screenshot (53)" src="https://github.com/user-attachments/assets/db11f7cb-0efb-4edd-8b44-5c9cf5a58b42" />

---

## 🚀 Features

- ✅ Add new tasks
- ✏️ Edit existing tasks inline
- 🗑️ Delete tasks
- 💾 Data persisted in MySQL database
- 🔄 RESTful API with Express.js
- 🎨 Responsive UI with Bootstrap 5

---

## 🛠️ Tech Stack

| Layer      | Technology              |
|------------|-------------------------|
| Backend    | Node.js, Express.js     |
| Database   | MySQL                   |
| Frontend   | HTML, CSS, JavaScript   |
| UI Library | Bootstrap 5             |

---

## 📁 Project Structure

```
todo-nodejs/
│
├── backend/
│   └── server.js          # Express server & API routes
│
├── frontend/
│   └── todolist.html      # Frontend UI
│
└── README.md
```

## 🔌 API Endpoints

| Method   | Endpoint            | Description         |
|----------|---------------------|---------------------|
| `GET`    | `/`                 | Fetch all todos     |
| `POST`   | `/add-item`         | Add a new todo      |
| `PUT`    | `/edit-item`        | Update a todo       |
| `DELETE` | `/delete-item/:id`  | Delete a todo by ID |

---

## 🌱 Future Improvements

- [ ] Add user authentication
- [ ] Mark tasks as completed
- [ ] Due dates and priority levels
- [ ] Deploy to cloud (Render / Railway)
- [ ] Convert to React frontend

---
