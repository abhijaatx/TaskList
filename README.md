# 📝 React Todo List App

A sleek and responsive task manager built with **React** and **Tailwind CSS**. Add, edit, complete, delete, and filter your tasks—all stored locally in your browser per user.

---

## 🚀 Features

- ✅ **User Login via LocalStorage**
- 🆕 Add new tasks with title, description, category, due date, and priority
- 📝 Edit existing tasks
- ✅ Mark tasks as complete/incomplete
- ❌ Delete tasks
- 🔍 Search and filter tasks (All, Pending, Completed)
- 💾 Data persists across sessions using `localStorage`
- 🌈 Modern UI with Tailwind CSS

---

## 🔧 Tech Stack

- **React**
- **React Router DOM**
- **Tailwind CSS**
- **LocalStorage (Browser Storage)**

---

## 📁 Folder Structure

```
TodoApp/
|
|── index.html
|── src/
     |
     ├── components/
     │   ├── Navbar.jsx
     │   ├── TaskForm.jsx
     │   ├── TaskFilters.jsx
     │   ├── TaskItem.jsx
     │   └── TaskList.jsx
     |── App.css
     |── index.css
     |── LoginForm.jsx
     │── main.jsx  
     ├── App.jsx
     └── TodoList.jsx
```

---


## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/abhijaatx/taskList.git
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```

---

## Usage

## 1. Visit / and enter your username to start using the app.
## 2. Use the form to add new tasks.
## 3. Click edit (✏️) to update a task.
## 4. Filter and search tasks easily.
## 5. All data is saved per user in localStorage.


---


## Notes

## 1. Task edits are handled through shared form state (formData + editId).
## 2. Each username stores a separate list of tasks.
## 3. Uses controlled inputs for form reliability.





