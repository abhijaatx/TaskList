import { useNavigate } from "react-router-dom";


function Navbar({ username }) {
    const navigate = useNavigate();

    const onLogout = () => {
        localStorage.removeItem("username");
        navigate("/");
    };

    return (
        <div className="border-2 border-white bg-gradient-to-br from-blue-100 to-white shadow px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <div className="mx-auto w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9.993 9.993 0 0012 20c2.485 0 4.757-.905 6.879-2.396M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <div>
                    <h1 className="font-bold text-lg">Task Tracker</h1>
                    <p className="text-sm text-gray-600">Welcome back {username}!</p>
                </div>
            </div>
            <button
                onClick={onLogout}
                className="text-sm text-gray-600 hover:text-blue-600"
            >
                ↩ Logout
            </button>
        </div>
    );
}

export default Navbar;
