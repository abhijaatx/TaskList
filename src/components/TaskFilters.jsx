function TaskFilters({ filter, setFilter, search, setSearch, tasks }) {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="space-x-2">
                {["all", "pending", "completed"].map((tab) => (
                    <button
                        key={tab}
                        className={`px-3 py-1 rounded text-sm ${filter === tab
                            ? "bg-blue-600 text-white"
                            : "bg-white border text-gray-600"
                            }`}
                        onClick={() => setFilter(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)} (
                        {tasks.filter((t) =>
                            tab === "all"
                                ? true
                                : tab === "pending"
                                    ? !t.completed
                                    : t.completed
                        ).length}
                        )
                    </button>
                ))}
            </div>
            <input
                type="text"
                placeholder="Search tasks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border px-4 py-2 rounded w-full sm:w-1/2"
            />
        </div>
    );
}

export default TaskFilters;
