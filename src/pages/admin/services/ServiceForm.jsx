import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const ServiceForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { token } = useAuth();
    const isEditMode = !!id;

    const [formData, setFormData] = useState({
        title: '',
        shortDescription: '',
        description: '',
        displayOrder: 0
    });
    const [loading, setLoading] = useState(isEditMode);
    const [error, setError] = useState('');
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (isEditMode) {
            fetchService();
        }
    }, [id]);

    const fetchService = async () => {
        try {
            const response = await fetch(`/api/Service/${id}`);
            if (!response.ok) throw new Error('Failed to fetch service details');
            const data = await response.json();
            setFormData({
                title: data.title || '',
                shortDescription: data.shortDescription || '',
                description: data.description || '',
                displayOrder: data.displayOrder || 0
            });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'displayOrder' ? parseInt(value) || 0 : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setError('');

        try {
            const url = isEditMode ? `/api/Service/${id}` : '/api/Service';
            const method = isEditMode ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(isEditMode ? { ...formData, id: parseInt(id) } : formData)
            });

            if (!response.ok) {
                const errData = await response.text();
                throw new Error(errData || 'Failed to save service');
            }

            navigate('/admin/services');
        } catch (err) {
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">
                {isEditMode ? 'Edit Service' : 'Add New Service'}
            </h1>

            {error && (
                <div className="bg-red-100 text-red-700 p-4 rounded mb-6">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        name="title"
                        type="text"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shortDescription">
                        Short Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="shortDescription"
                        name="shortDescription"
                        rows="3"
                        value={formData.shortDescription}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Full Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        name="description"
                        rows="6"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="displayOrder">
                        Display Order
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="displayOrder"
                        name="displayOrder"
                        type="number"
                        value={formData.displayOrder}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${saving ? 'opacity-50 cursor-not-allowed' : ''}`}
                        type="submit"
                        disabled={saving}
                    >
                        {saving ? 'Saving...' : (isEditMode ? 'Update Service' : 'Create Service')}
                    </button>
                    <button
                        type="button"
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        onClick={() => navigate('/admin/services')}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ServiceForm;
