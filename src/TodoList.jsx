import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import TaskFilters from "./components/TaskFilters";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";

function TodoList() {
    const [username, setUsername] = useState("");
    const [tasks, setTasks] = useState([]);
    const [editId, setEditId] = useState(null);
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        priority: "Medium",
        dueDate: "",
        category: "",
    });

    const navigate = useNavigate();

    // Load username + tasks
    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (!storedUsername) {
            navigate("/");
        } else {
            setUsername(storedUsername);
            const savedTasks = localStorage.getItem(`tasks_${storedUsername}`);
            if (savedTasks) {
                setTasks(JSON.parse(savedTasks));
            }
        }
    }, []);

    // Save tasks to localStorage
    useEffect(() => {
        if (username) {
            localStorage.setItem(`tasks_${username}`, JSON.stringify(tasks));
        }
    }, [tasks, username]);

    // Add or Edit task
    const handleAddTask = (e) => {
        e.preventDefault();

        if (editId !== null) {
            const updatedTasks = tasks.map((task) =>
                task.id === editId ? { ...task, ...formData } : task
            );
            setTasks(updatedTasks);
            setEditId(null);
        } else {
            const newTask = {
                ...formData,
                id: Date.now(),
                completed: false,
            };
            setTasks([...tasks, newTask]);
        }

        setFormData({
            title: "",
            description: "",
            priority: "Medium",
            dueDate: "",
            category: "",
        });
    };

    // Delete task
    const handleDelete = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Toggle completion
    const handleToggleComplete = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    // Start editing
    const handleEdit = (id) => {
        const taskToEdit = tasks.find((task) => task.id === id);
        if (taskToEdit) {
            setFormData({
                title: taskToEdit.title,
                description: taskToEdit.description,
                priority: taskToEdit.priority,
                dueDate: taskToEdit.dueDate,
                category: taskToEdit.category,
            });
            setEditId(id);
        }
    };

    // Apply filter + search
    const filteredTasks = tasks.filter((task) => {
        const matchStatus =
            filter === "all" ||
            (filter === "pending" && !task.completed) ||
            (filter === "completed" && task.completed);
        const matchSearch = task.title
            .toLowerCase()
            .includes(search.toLowerCase());
        return matchStatus && matchSearch;
    });

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar username={username} />
            <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center px-4 py-2">
                <div className="bg-gradient-to-br from-blue-100 to-white bg-opacity-90 w-full max-w-4xl rounded-xl shadow-lg p-6  border-white border-2 z-20">
                    <h2 className="text-2xl font-bold mb-4">
                        {editId ? "Edit Task" : "Add New Task"}
                    </h2>
                    <TaskForm
                        formData={formData}
                        setFormData={setFormData}
                        handleAddTask={handleAddTask}
                        isEditing={editId !== null}
                        setEditId={setEditId}
                    />
                    <TaskFilters
                        filter={filter}
                        setFilter={setFilter}
                        search={search}
                        setSearch={setSearch}
                        tasks={tasks}
                    />
                    <TaskList
                        tasks={filteredTasks}
                        handleDelete={handleDelete}
                        handleToggleComplete={handleToggleComplete}
                        handleEdit={handleEdit}
                    />
                </div>
            </div>
        </div>
    );
}

export default TodoList;
