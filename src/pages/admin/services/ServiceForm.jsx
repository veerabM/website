import { useState, useEffect } from 'react';
import { api } from '../../../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { validateServiceForm } from '../../../utils/validation';

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
    const [generalError, setGeneralError] = useState('');
    const [fieldErrors, setFieldErrors] = useState({});
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (isEditMode) {
            fetchService();
        }
    }, [id]);

    const fetchService = async () => {
        try {
            const data = await api.getServiceById(id);
            setFormData({
                title: data.title || '',
                shortDescription: data.shortDescription || '',
                description: data.description || '',
                displayOrder: data.displayOrder || 0
            });
        } catch (err) {
            setGeneralError(err.message);
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

        // Clear field error when user types
        if (fieldErrors[name]) {
            setFieldErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { isValid, errors: validationErrors } = validateServiceForm(formData);

        if (!isValid) {
            setFieldErrors(validationErrors);
            return;
        }

        setSaving(true);
        setGeneralError('');
        setFieldErrors({});

        try {
            if (isEditMode) {
                await api.updateService(id, { ...formData, id: parseInt(id) }, token);
            } else {
                await api.createService(formData, token);
            }

            navigate('/admin/services');
        } catch (err) {
            setGeneralError(err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">
                {isEditMode ? 'Edit Service' : 'Add New Service'}
            </h1>

            {generalError && (
                <div className="bg-red-100 text-red-700 p-4 rounded mb-6">
                    {generalError}
                </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${fieldErrors.title ? 'border-red-500' : ''}`}
                        id="title"
                        name="title"
                        type="text"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                    {fieldErrors.title && <p className="text-red-500 text-xs italic mt-1">{fieldErrors.title}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shortDescription">
                        Short Description
                    </label>
                    <textarea
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${fieldErrors.shortDescription ? 'border-red-500' : ''}`}
                        id="shortDescription"
                        name="shortDescription"
                        rows="3"
                        value={formData.shortDescription}
                        onChange={handleChange}
                    />
                    {fieldErrors.shortDescription && <p className="text-red-500 text-xs italic mt-1">{fieldErrors.shortDescription}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Full Description
                    </label>
                    <textarea
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${fieldErrors.description ? 'border-red-500' : ''}`}
                        id="description"
                        name="description"
                        rows="6"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    {fieldErrors.description && <p className="text-red-500 text-xs italic mt-1">{fieldErrors.description}</p>}
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="displayOrder">
                        Display Order
                    </label>
                    <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${fieldErrors.displayOrder ? 'border-red-500' : ''}`}
                        id="displayOrder"
                        name="displayOrder"
                        type="number"
                        value={formData.displayOrder}
                        onChange={handleChange}
                    />
                    {fieldErrors.displayOrder && <p className="text-red-500 text-xs italic mt-1">{fieldErrors.displayOrder}</p>}
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
