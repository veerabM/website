import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/home';
import ServicesPage from './pages/services';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import ScrollToTop from './components/ScrollToTop';
import ServiceDetail from './pages/services/servicePages';
import PrivacyPolicy from './pages/privacy';
import TermsOfService from './pages/terms';
import NotFound from './pages/notfound';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import AdminRoute from './components/AdminRoute';
import AdminLayout from './layouts/AdminLayout';
import ServiceList from './pages/admin/services/ServiceList';
import ServiceForm from './pages/admin/services/ServiceForm';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/servicePages/:id" element={<ServiceDetail />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="services" element={<ServiceList />} />
            <Route path="services/new" element={<ServiceForm />} />
            <Route path="services/:id" element={<ServiceForm />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
