import { useState, useEffect } from 'react';
import { api } from '../../../services/api';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

const ServiceList = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { token } = useAuth();

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const data = await api.getServices();
            setServices(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this service?')) return;

        try {
            await api.deleteService(id, token);

            // Remove from list
            setServices(services.filter(s => s.id !== id));
        } catch (err) {
            alert(err.message);
        }
    };

    if (loading) return <div>Loading services...</div>;
    if (error) return <div className="text-red-600">Error: {error}</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Services</h1>
                <Link
                    to="/admin/services/new"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Add New Service
                </Link>
            </div>

            <div className="bg-white shadow overflow-hidden rounded-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Order</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Short Description</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {services.map((service) => (
                                <tr key={service.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">
                                        {service.displayOrder}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {service.title}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate hidden md:table-cell">
                                        {service.shortDescription}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <Link
                                            to={`/services/servicePages/${service.id}`}
                                            target="_blank"
                                            className="text-green-600 hover:text-green-900 mr-4 inline-block"
                                            title="View"
                                        >
                                            <FaEye size={18} />
                                        </Link>
                                        <Link
                                            to={`/admin/services/${service.id}`}
                                            className="text-indigo-600 hover:text-indigo-900 mr-4 inline-block"
                                            title="Edit"
                                        >
                                            <FaEdit size={18} />
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(service.id)}
                                            className="text-red-600 hover:text-red-900 inline-block"
                                            title="Delete"
                                        >
                                            <FaTrash size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;
