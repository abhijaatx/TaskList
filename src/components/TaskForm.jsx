function TaskForm({ formData, setFormData, handleAddTask, isEditing, setEditId }) {
    return (
        <form onSubmit={handleAddTask} className="grid gap-4">
            <input
                className="w-full border px-4 py-2 rounded"
                placeholder="Enter task title"
                value={formData.title}
                required
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
            <textarea
                className="w-full border px-4 py-2 rounded"
                placeholder="Enter task description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
            <select
                className="w-full border px-4 py-2 rounded h-8"
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
            >
                <option>Low Priority</option>
                <option>Medium Priority</option>
                <option>High Priority</option>
            </select>
            <input
                type="date"
                className="w-full border px-4 py-2 rounded"
                value={formData.dueDate}
                onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
            />
            <input
                className="w-full border px-4 py-2 rounded"
                placeholder="e.g., Work, Personal, Study"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            />
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
                {isEditing ? "Update Task" : "Add Task"}
            </button>
            {isEditing && (
                <button
                    type="button"
                    onClick={() => {
                        setFormData({
                            title: "",
                            description: "",
                            priority: "Medium",
                            dueDate: "",
                            category: "",
                        });
                        setEditId(null);
                    }}
                    className="bg-red-500 w-full px-4 py-2 rounded text-white"
                >
                    Cancel
                </button>
            )}
        </form>
    );
}

export default TaskForm;
