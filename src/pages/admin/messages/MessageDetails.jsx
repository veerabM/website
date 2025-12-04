import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { api } from '../../../services/api';
import { FaArrowLeft, FaUser, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';

const MessageDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const { token } = useAuth();
    const [message, setMessage] = useState(location.state?.message || null);
    const [loading, setLoading] = useState(!message);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!message) {
            const fetchMessage = async () => {
                try {
                    // Fallback: Fetch all messages and find the one with matching ID
                    // Since we don't have a getById endpoint
                    const messages = await api.getMessages(token);
                    const foundMessage = messages.find(m => m.id.toString() === id);

                    if (foundMessage) {
                        setMessage(foundMessage);
                    } else {
                        setError("Message not found.");
                    }
                } catch (err) {
                    console.error("Failed to fetch message details", err);
                    setError("Failed to load message details.");
                } finally {
                    setLoading(false);
                }
            };
            fetchMessage();
        }
    }, [id, message, token]);

    if (loading) return <div className="p-8 text-center">Loading details...</div>;
    if (error) return <div className="p-8 text-center text-red-600">{error}</div>;
    if (!message) return <div className="p-8 text-center">Message not found.</div>;

    return (
        <div className="max-w-4xl mx-auto">
            <button
                onClick={() => navigate('/admin/messages')}
                className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
            >
                <FaArrowLeft className="mr-2" />
                Back to Messages
            </button>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <h1 className="text-2xl font-bold text-gray-800">{message.subject}</h1>
                </div>

                <div className="p-6 space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-6 text-gray-600">
                        <div className="flex items-center">
                            <FaUser className="mr-2 text-indigo-500" />
                            <span className="font-medium text-gray-900 mr-2">From:</span>
                            {message.name}
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="mr-2 text-indigo-500" />
                            <span className="font-medium text-gray-900 mr-2">Email:</span>
                            <a href={`mailto:${message.email}`} className="text-indigo-600 hover:underline">
                                {message.email}
                            </a>
                        </div>
                        <div className="flex items-center">
                            <FaCalendarAlt className="mr-2 text-indigo-500" />
                            <span className="font-medium text-gray-900 mr-2">Date:</span>
                            {new Date(message.createdAt || Date.now()).toLocaleString()}
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-6">
                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Message Body</h3>
                        <div className="bg-gray-50 rounded-lg p-6 text-gray-800 whitespace-pre-wrap leading-relaxed">
                            {message.body}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageDetails;
