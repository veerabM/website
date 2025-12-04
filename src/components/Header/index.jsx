import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { api } from '../../services/api';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/aiz1.png';
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Desktop dropdown
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // Mobile dropdown
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await api.getServices();
        setServices(data.sort((a, b) => a.displayOrder - b.displayOrder));
      } catch (error) {
        console.error("Failed to fetch services", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      dropdown: services.map(service => ({
        name: service.title,
        id: service.id
      }))
    },
  ];

  // Dynamic classes based on scroll state
  const headerClass = `fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white backdrop-blur-md shadow-md py-2' : 'bg-white backdrop-blur-md py-4'
    }`;

  const textColorClass = 'text-gray-800 hover:text-primary';
  const activeLinkClass = 'text-primary font-semibold';

  return (
    <header className={headerClass}>
      <div className="container w-full md:w-4/5 mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="AIZero Logo" className="h-[50px] md:h-[60px] w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <div
                    className={`flex items-center gap-1 cursor-pointer ${location.pathname.startsWith(link.path) ? activeLinkClass : textColorClass} transition-colors text-lg`}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <span onClick={() => navigate(link.path)}>{link.name}</span>
                    <IoChevronDown size={16} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />

                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 origin-top-left ${dropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                      {loading ? (
                        <div className="px-6 py-3 text-gray-500 text-sm">
                          Loading services...
                        </div>
                      ) : services.length === 0 ? (
                        <div className="px-6 py-3 text-gray-500 text-sm">
                          No services found.
                        </div>
                      ) : (
                        link.dropdown.map((item) => (
                          <div
                            key={item.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/services/servicePages/${item.id}`);
                              setDropdownOpen(false);
                            }}
                            className="px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary cursor-pointer transition-colors text-base border-b border-gray-50 last:border-none"
                          >
                            {item.name}
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-lg transition-colors ${isActive ? activeLinkClass : textColorClass}`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <button
              onClick={() => navigate('/contact')}
              className={scrolled ? 'btn-orange' : 'btn-blue'}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
              {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Portal */}
      {createPortal(
        <>
          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-101 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            onClick={() => setIsOpen(false)}
          />

          {/* Mobile Menu Sidebar */}
          <div className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-102 transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <img src={logo} alt="AIZero Logo" className="h-8 w-auto" />
                <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-primary">
                  <HiX size={28} />
                </button>
              </div>

              <div className="flex flex-col gap-6 overflow-y-auto">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.dropdown ? (
                      <div className="space-y-3">
                        <div
                          className="flex justify-between items-center text-xl font-semibold text-gray-800 cursor-pointer"
                          onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        >
                          {link.name}
                          <IoChevronDown className={`transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                        </div>

                        <div className={`pl-4 flex flex-col gap-3 border-l-2 border-blue-100 ml-2 overflow-hidden transition-all duration-300 ${mobileDropdownOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                          {link.dropdown.map((item) => (
                            <div
                              key={item.id}
                              onClick={() => {
                                navigate(`/services/servicePages/${item.id}`);
                                setIsOpen(false);
                              }}
                              className="text-gray-600 hover:text-primary py-1 cursor-pointer"
                            >
                              {item.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <NavLink
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `text-xl font-semibold block ${isActive ? 'text-primary' : 'text-gray-800'}`
                        }
                      >
                        {link.name}
                      </NavLink>
                    )}
                  </div>
                ))}
                <button
                  onClick={() => {
                    navigate('/contact');
                    setIsOpen(false);
                  }}
                  className="mt-4 w-full btn-orange"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
    </header>
  );
};

export default Header;