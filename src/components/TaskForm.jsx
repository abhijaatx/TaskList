function TaskForm({ formData, setFormData, handleAddTask }) {
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
                className="w-full border px-4 py-2 rounded"
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
            >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
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
                + Add Task
            </button>
        </form>
    );
}

export default TaskForm;
