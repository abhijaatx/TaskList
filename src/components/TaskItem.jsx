function TaskItem({ task, onDelete, onToggleComplete, onEdit }) {
    return (
        <div className="bg-white p-4 rounded shadow flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex-1">
                <h3 className={`text-lg font-bold ${task.completed ? "line-through text-gray-500" : ""}`}>
                    {task.title}
                </h3>
                <p className="text-sm text-gray-600">{task.description}</p>
                <div className="mt-2 flex gap-2 flex-wrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-white ${task.priority === "High"
                        ? "bg-red-500"
                        : task.priority === "Medium"
                            ? "bg-yellow-400 text-black"
                            : "bg-green-500"
                        }`}>
                        {task.priority.toLowerCase()}
                    </span>
                    {task.category && (
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {task.category}
                        </span>
                    )}
                    {task.dueDate && (
                        <span className="bg-gray-100 px-2 py-1 rounded-full">
                            Due: {new Date(task.dueDate).toLocaleDateString()}
                        </span>
                    )}
                </div>
            </div>
            <div className="flex sm:flex-col justify-end gap-2 text-gray-500 text-lg">
                <button title="Mark as Complete" onClick={onToggleComplete}><img width="20" height="20" src="https://img.icons8.com/ios-filled/400/40C057/checked-checkbox.png" alt="checked-checkbox" /></button>
                <button title="Edit" onClick={onEdit}><img width="20" height="20" src="https://img.icons8.com/ios-filled/400/228BE6/create-new.png" alt="create-new" /></button>
                <button title="Delete" onClick={onDelete}><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/400/FA5252/filled-trash.png" alt="filled-trash" /></button>
            </div>
        </div>
    );
}

export default TaskItem;
