import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Bus, LayoutDashboard, MapPin, Clock, Users, ChevronRight, BarChart3, Calendar, Settings } from 'lucide-react';
import BusList from './components/BusList';
import RouteList from './components/RouteList';
import ScheduleList from './components/ScheduleList';
import Dashboard from './components/Dashboard';

// Landing/Intro component
const IntroPage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Bus size={48} className="text-blue-600" />,
      title: "Fleet Management",
      description: "Track and manage your entire bus fleet with real-time updates and maintenance schedules."
    },
    {
      icon: <MapPin size={48} className="text-green-600" />,
      title: "Route Optimization",
      description: "Create and optimize routes for maximum efficiency and passenger convenience."
    },
    {
      icon: <Clock size={48} className="text-purple-600" />,
      title: "Schedule Planning",
      description: "Plan and adjust schedules with an intuitive interface, ensuring timely service."
    },
    {
      icon: <BarChart3 size={48} className="text-orange-600" />,
      title: "Analytics Dashboard",
      description: "Get insights with comprehensive analytics and reporting tools for better decision making."
    }
  ];

  useEffect(() => {
    // Animate the title on component mount
    setIsVisible(true);
    
    // Show features with delay
    const featureTimer = setTimeout(() => {
      setShowFeatures(true);
    }, 800);
    
    // Cycle through features
    const intervalId = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    
    return () => {
      clearTimeout(featureTimer);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center">
              <Bus size={64} className="text-blue-600 animate-pulse" />
            </div>
            <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Welcome to <span className="text-blue-600">Bus Management System</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Your complete solution for efficient bus fleet management, route planning, and schedule optimization.
            </p>
          </div>
          
          {/* Call to Action */}
          <div className={`mt-10 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button 
              onClick={() => navigate('/dashboard')}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-transform hover:scale-105"
            >
              Let's Start
              <ChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className={`py-12 bg-white shadow-inner transition-all duration-1000 transform ${showFeatures ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 uppercase tracking-wide">Comprehensive Tools</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Everything you need to manage your fleet</p>
          </div>
          
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-500 transform hover:scale-105 p-6 bg-gray-50 rounded-lg shadow-md border-t-4 ${
                    index === activeFeature 
                      ? 'border-blue-500 bg-blue-50 shadow-lg scale-105' 
                      : 'border-gray-200'
                  }`}
                >
                  <div className="flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-medium text-gray-900 text-center">{feature.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Getting Started Section */}
      <div className={`py-16 bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-1000 delay-300 transform ${showFeatures ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">Ready to streamline your operations?</h2>
            <p className="mt-4 text-lg text-blue-100">Get started with BusManager today and experience the difference.</p>
            <div className="mt-8 flex justify-center">
              <button 
                onClick={() => navigate('/dashboard')}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transform transition-transform hover:scale-105"
              >
                Go to Dashboard
                <ChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [activePage, setActivePage] = useState('/');
  
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/" className="flex items-center" onClick={() => setActivePage('/')}>
                    <Bus className="h-8 w-8 text-blue-600" />
                    <span className="ml-2 text-xl font-bold">BusManager</span>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    to="/dashboard"
                    onClick={() => setActivePage('/dashboard')}
                    className={`inline-flex items-center px-3 py-2 border-b-2 ${
                      activePage === '/dashboard' 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } text-sm font-medium`}
                  >
                    <LayoutDashboard className="h-5 w-5 mr-1" />
                    Dashboard
                  </Link>
                  <Link
                    to="/buses"
                    onClick={() => setActivePage('/buses')}
                    className={`inline-flex items-center px-3 py-2 border-b-2 ${
                      activePage === '/buses' 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } text-sm font-medium`}
                  >
                    <Bus className="h-5 w-5 mr-1" />
                    Buses
                  </Link>
                  <Link
                    to="/routes"
                    onClick={() => setActivePage('/routes')}
                    className={`inline-flex items-center px-3 py-2 border-b-2 ${
                      activePage === '/routes' 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } text-sm font-medium`}
                  >
                    <MapPin className="h-5 w-5 mr-1" />
                    Routes
                  </Link>
                  <Link
                    to="/schedules"
                    onClick={() => setActivePage('/schedules')}
                    className={`inline-flex items-center px-3 py-2 border-b-2 ${
                      activePage === '/schedules' 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } text-sm font-medium`}
                  >
                    <Clock className="h-5 w-5 mr-1" />
                    Schedules
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <button className="bg-blue-600 p-1 rounded-full text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <Settings className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile menu, toggle classes based on menu state */}
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                to="/dashboard"
                onClick={() => setActivePage('/dashboard')}
                className={`block pl-3 pr-4 py-2 border-l-4 ${
                  activePage === '/dashboard' 
                    ? 'bg-blue-50 border-blue-500 text-blue-700' 
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                } text-base font-medium`}
              >
                Dashboard
              </Link>
              <Link
                to="/buses"
                onClick={() => setActivePage('/buses')}
                className={`block pl-3 pr-4 py-2 border-l-4 ${
                  activePage === '/buses' 
                    ? 'bg-blue-50 border-blue-500 text-blue-700' 
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                } text-base font-medium`}
              >
                Buses
              </Link>
              <Link
                to="/routes"
                onClick={() => setActivePage('/routes')}
                className={`block pl-3 pr-4 py-2 border-l-4 ${
                  activePage === '/routes' 
                    ? 'bg-blue-50 border-blue-500 text-blue-700' 
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                } text-base font-medium`}
              >
                Routes
              </Link>
              <Link
                to="/schedules"
                onClick={() => setActivePage('/schedules')}
                className={`block pl-3 pr-4 py-2 border-l-4 ${
                  activePage === '/schedules' 
                    ? 'bg-blue-50 border-blue-500 text-blue-700' 
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                } text-base font-medium`}
              >
                Schedules
              </Link>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/buses" element={<BusList />} />
            <Route path="/routes" element={<RouteList />} />
            <Route path="/schedules" element={<ScheduleList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;