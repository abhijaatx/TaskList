import TaskItem from "./TaskItem";

function TaskList({ tasks, handleDelete, handleToggleComplete }) {
    if (tasks.length === 0) {
        return <p className="text-gray-500 text-center">No tasks found.</p>;
    }
    tasks.map((task) => {
        console.log(task);
    });

    return (

        <div className="space-y-4">
            {tasks.map((task) => (

                < TaskItem
                    key={task.id}
                    task={task}
                    onDelete={() => handleDelete(task.id)}
                    onToggleComplete={() => handleToggleComplete(task.id)}
                />
            ))}
        </div>
    );
}

export default TaskList;
