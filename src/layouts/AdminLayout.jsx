import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaBars, FaTimes, FaTachometerAlt, FaList, FaSignOutAlt, FaEnvelope } from 'react-icons/fa';

const AdminLayout = () => {
    const { logout, user } = useAuth();
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const isActive = (path) => {
        return location.pathname === path
            ? 'bg-gray-900 text-white'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white';
    };

    const closeSidebar = () => setSidebarOpen(false);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
            {/* Mobile Header */}
            <div className="md:hidden bg-gray-800 text-white p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Admin Panel</h1>
                <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white focus:outline-none">
                    {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
                    onClick={closeSidebar}
                ></div>
            )}

            {/* Sidebar */}
            <div className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 flex flex-col
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
                <div className="h-16 flex items-center justify-center border-b border-gray-700  md:flex">
                    <h1 className="text-xl font-bold">Admin Panel</h1>
                </div>

                <nav className="flex-1 px-2 py-4 space-y-1">
                    <Link
                        to="/admin/dashboard"
                        onClick={closeSidebar}
                        className={`${isActive('/admin/dashboard')} group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                    >
                        <FaTachometerAlt className="mr-3" />
                        Dashboard
                    </Link>
                    <Link
                        to="/admin/services"
                        onClick={closeSidebar}
                        className={`${isActive('/admin/services')} group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                    >
                        <FaList className="mr-3" />
                        Services
                    </Link>
                    <Link
                        to="/admin/messages"
                        onClick={closeSidebar}
                        className={`${isActive('/admin/messages')} group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                    >
                        <FaEnvelope className="mr-3" />
                        Messages
                    </Link>
                </nav>

                <div className="p-4 border-t border-gray-700">
                    <div className="flex items-center mb-4">
                        <div className="ml-3">
                            <p className="text-sm font-medium text-white">{user?.name}</p>
                        </div>
                    </div>
                    <button
                        onClick={logout}
                        className="w-full flex items-center justify-center bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition duration-200"
                    >
                        <FaSignOutAlt className="mr-2" />
                        Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto w-full">
                <main className="p-4 md:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
