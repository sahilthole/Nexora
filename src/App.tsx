import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Shield, 
  Smartphone, 
  Lightbulb, 
  Thermometer, 
  Camera, 
  Speaker, 
  Lock,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Play,
  Award,
  Users,
  Zap,
  Wifi,
  Settings,
  Sun,
  Moon,
  Mic,
  Wrench,
  HeadphonesIcon,
  TrendingUp,
  Battery
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Save theme preference and apply to document
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const products = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Smart Light Control Panels",
      description: "Advanced lighting control systems with dimming, scheduling, and scene management capabilities.",
      image: "https://www.oobautomation.com/wp-content/uploads/2019/01/D-series-main-slide.jpg",
      features: ["Voice Control", "App Integration", "Energy Efficient", "Custom Scenes"]
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Smart Digital Door Locks",
      description: "Secure keyless entry systems with biometric authentication and remote access control.",
      image: "https://www.oobautomation.com/wp-content/uploads/2019/03/oob-automation-digital-door-lock-type2-03-640x400.jpg",
      features: ["Biometric Access", "Remote Control", "Activity Logs", "Emergency Override"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Smart Sensor IoT Based",
      description: "Intelligent motion detection and environmental monitoring with real-time alerts and automation.",
      image: "https://www.oobautomation.com/wp-content/uploads/2019/01/oob-automation-motion-sensor-04-640x400.jpg",
      features: ["Motion Detection", "Environmental Monitoring", "Real-time Alerts", "Smart Automation"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Automated Curtain Controllers",
      description: "Motorized curtain and blind control systems with scheduling and light-based automation.",
      image: "https://www.oobsmarthome.com/images/curtain-controller/retro-main-section.jpg",
      features: ["Motorized Control", "Light Sensors", "Scheduling", "Voice Commands"]
    }
  ];

  const services = [
    {
      icon: <Home className="w-12 h-12" />,
      title: "Complete Home Automation",
      description: "Transform your entire home into a smart, connected ecosystem with seamless integration across all systems and devices.",
      features: ["Centralized Control", "Smart Device Integration", "Automated Routines", "Remote Monitoring"]
    },
    {
      icon: <Mic className="w-12 h-12" />,
      title: "Voice Control Integration",
      description: "Control your entire smart home with simple voice commands through advanced AI-powered voice recognition systems.",
      features: ["Multi-Language Support", "Natural Voice Commands", "Smart Assistant Integration", "Hands-Free Operation"]
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Control",
      description: "Complete control of your smart home from anywhere in the world through our intuitive mobile application.",
      features: ["Real-Time Monitoring", "Remote Access", "Push Notifications", "User-Friendly Interface"]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Free Installation",
      description: "Professional installation service included at no extra cost with comprehensive setup and configuration.",
      features: ["Expert Technicians", "Complete Setup", "System Testing", "User Training"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "10 Years Warranty",
      description: "Comprehensive 10-year warranty coverage on all installed systems and components for complete peace of mind.",
      features: ["Full System Coverage", "Component Replacement", "Software Updates", "Technical Support"]
    },
    {
      icon: <HeadphonesIcon className="w-12 h-12" />,
      title: "After Sales Support",
      description: "Dedicated customer support team available 24/7 to assist with any questions or technical issues.",
      features: ["24/7 Availability", "Remote Diagnostics", "Quick Response", "Expert Assistance"]
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Smart Planning & Consultation",
      description: "Personalized consultation and smart planning services to design the perfect automation solution for your home.",
      features: ["Custom Design", "Expert Consultation", "Needs Assessment", "Future-Proof Planning"]
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Upgrades & Custom Scenes",
      description: "Flexible upgrade options and custom scene creation to adapt your smart home as your needs evolve.",
      features: ["System Upgrades", "Custom Automation", "Scene Programming", "Scalable Solutions"]
    },
    {
      icon: <Battery className="w-12 h-12" />,
      title: "Energy Efficiency",
      description: "Advanced energy management systems that optimize power consumption and reduce your environmental footprint.",
      features: ["Smart Energy Monitoring", "Automated Optimization", "Cost Reduction", "Eco-Friendly Solutions"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner, Beverly Hills",
      content: "NexOra transformed our house into a truly intelligent home. The installation was flawless, and the team's attention to detail was exceptional. Every system works seamlessly together.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Tech Executive, San Francisco",
      content: "The level of sophistication and reliability exceeded our expectations. Our smart home system has been running perfectly for over two years with exceptional support from the NexOra team.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Interior Designer, Los Angeles",
      content: "Working with NexOra was a pleasure. They understood our design vision and integrated the technology seamlessly without compromising the aesthetic. Truly professional service.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 
          ? isDarkMode 
            ? 'bg-black/95 backdrop-blur-lg shadow-lg border-b border-gray-800' 
            : 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200'
          : isDarkMode 
            ? 'bg-black/80 backdrop-blur-sm' 
            : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                NexOra Homes
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className={`relative group ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition-all duration-300 font-medium hover:scale-105`}>
                <span className={`${isDarkMode ? 'group-hover:text-blue-400' : 'group-hover:text-blue-600'} transition-colors`}>Home</span>
                <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300 group-hover:w-full`}></div>
              </a>
              <a href="#products" className={`relative group ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition-all duration-300 font-medium hover:scale-105`}>
                <span className={`${isDarkMode ? 'group-hover:text-blue-400' : 'group-hover:text-blue-600'} transition-colors`}>Product</span>
                <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300 group-hover:w-full`}></div>
              </a>
              <a href="#services" className={`relative group ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition-all duration-300 font-medium hover:scale-105`}>
                <span className={`${isDarkMode ? 'group-hover:text-blue-400' : 'group-hover:text-blue-600'} transition-colors`}>Services</span>
                <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300 group-hover:w-full`}></div>
              </a>
              <a href="#about" className={`relative group ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition-all duration-300 font-medium hover:scale-105`}>
                <span className={`${isDarkMode ? 'group-hover:text-blue-400' : 'group-hover:text-blue-600'} transition-colors`}>About Us</span>
                <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300 group-hover:w-full`}></div>
              </a>
              <a href="#contact" className={`relative group ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition-all duration-300 font-medium hover:scale-105`}>
                <span className={`${isDarkMode ? 'group-hover:text-blue-400' : 'group-hover:text-blue-600'} transition-colors`}>Contact</span>
                <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300 group-hover:w-full`}></div>
              </a>
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all ${
                  isDarkMode 
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all font-medium">
                Get Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all ${
                  isDarkMode 
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button 
                className={isDarkMode ? 'text-white' : 'text-gray-900'}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`lg:hidden ${isDarkMode ? 'bg-black border-t border-gray-800' : 'bg-white border-t border-gray-200'}`}>
            <div className="px-4 py-4 space-y-4">
              <a href="#home" className={`block ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors font-medium`}>Home</a>
              <a href="#products" className={`block ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors font-medium`}>Product</a>
              <a href="#services" className={`block ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors font-medium`}>Services</a>
              <a href="#about" className={`block ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors font-medium`}>About Us</a>
              <a href="#contact" className={`block ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors font-medium`}>Contact</a>
              <button className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all font-medium">
                Get Consultation
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className={`relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden`}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Smart Home Technology Background" 
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-black/90 via-black/80 to-black/70' 
              : 'bg-gradient-to-r from-white/90 via-white/80 to-white/70'
          }`}></div>
          
          {/* Tech Pattern Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-32 h-32 border border-blue-500/30 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 border border-indigo-500/30 rounded-lg rotate-45 animate-bounce"></div>
            <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-purple-500/30 rounded-full animate-ping"></div>
            <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-cyan-500/30 rounded-lg animate-pulse"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pr-8">
              <h1 className={`text-5xl lg:text-7xl font-bold mb-8 leading-tight ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                The Next Future of
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600"> Home Intelligence</span>
              </h1>
              <p className={`text-xl lg:text-2xl mb-12 leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Experience the future of living with NexOra's premium smart home automation solutions. 
                Professional installation, cutting-edge technology, and unmatched reliability for the modern homeowner.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center space-x-3 text-xl font-semibold shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105">
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="relative">
              {/* Floating Smart Home Control Panel */}
              <div className={`rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 border backdrop-blur-lg ${
                isDarkMode 
                  ? 'bg-gray-900/80 border-gray-700' 
                  : 'bg-white/80 border-gray-200'
              }`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Smart Home Control
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                      All Systems Online
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className={`p-4 rounded-xl text-center border transition-all hover:scale-105 cursor-pointer ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border-gray-600 hover:border-blue-500' 
                      : 'bg-gray-50/50 border-gray-300 hover:border-blue-500'
                  }`}>
                    <Lightbulb className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                    <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Smart Lights
                    </div>
                    <div className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      12 Connected
                    </div>
                  </div>
                  
                  <div className={`p-4 rounded-xl text-center border transition-all hover:scale-105 cursor-pointer ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border-gray-600 hover:border-blue-500' 
                      : 'bg-gray-50/50 border-gray-300 hover:border-blue-500'
                  }`}>
                    <Thermometer className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                    <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Climate
                    </div>
                    <div className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      72°F
                    </div>
                  </div>
                  
                  <div className={`p-4 rounded-xl text-center border transition-all hover:scale-105 cursor-pointer ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border-gray-600 hover:border-blue-500' 
                      : 'bg-gray-50/50 border-gray-300 hover:border-blue-500'
                  }`}>
                    <Shield className="w-8 h-8 mx-auto mb-2 text-green-500" />
                    <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Security
                    </div>
                    <div className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      Armed
                    </div>
                  </div>
                  
                  <div className={`p-4 rounded-xl text-center border transition-all hover:scale-105 cursor-pointer ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border-gray-600 hover:border-blue-500' 
                      : 'bg-gray-50/50 border-gray-300 hover:border-blue-500'
                  }`}>
                    <Speaker className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                    <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Audio
                    </div>
                    <div className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      Playing
                    </div>
                  </div>
                </div>
                
                <div className={`p-4 rounded-xl border ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border-blue-700' 
                    : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-300'
                }`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Energy Savings
                      </div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        This month
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                        32%
                      </div>
                      <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        vs last month
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center animate-bounce">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center animate-pulse">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Our Smart Home Products
            </h2>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Discover our comprehensive range of premium smart home devices designed to enhance your lifestyle 
              with cutting-edge technology and seamless integration.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border ${
                  isDarkMode 
                    ? 'bg-black border-gray-800' 
                    : 'bg-white border-gray-200'
                }`}
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    isDarkMode 
                      ? 'from-black/80 via-black/20 to-transparent' 
                      : 'from-white/80 via-white/20 to-transparent'
                  }`}></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white">
                      {product.icon}
                    </div>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-8">
                  <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {product.title}
                  </h3>
                  <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {product.description}
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDarkMode ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Services
            </h2>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              From basic automation to comprehensive smart home ecosystems, we provide tailored solutions 
              that seamlessly integrate with your lifestyle and enhance your daily living experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border group hover:-translate-y-2 ${
                  isDarkMode 
                    ? 'bg-gray-900 border-gray-800' 
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white">
                  {service.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className={`text-4xl lg:text-5xl font-bold mb-8 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Why Choose NexOra Homes?
              </h2>
              <p className={`text-xl mb-8 leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                With over 15 years of experience in smart home technology, we're not just installers – 
                we're your partners in creating the perfect connected living experience that grows with your needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isDarkMode ? 'bg-blue-900' : 'bg-blue-100'
                  }`}>
                    <Award className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Certified Excellence
                    </h3>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                      Our team consists of certified smart home specialists with extensive training from leading technology partners and manufacturers.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isDarkMode ? 'bg-green-900' : 'bg-green-100'
                  }`}>
                    <Users className={`w-6 h-6 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Lifetime Partnership
                    </h3>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                      We provide ongoing support, maintenance, and system updates to ensure your smart home continues to evolve and perform flawlessly.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isDarkMode ? 'bg-purple-900' : 'bg-purple-100'
                  }`}>
                    <Settings className={`w-6 h-6 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Custom Integration
                    </h3>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                      Every installation is meticulously planned and tailored to your specific needs, preferences, and architectural requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop" 
                alt="Smart Home Technology" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className={`absolute -bottom-6 -left-6 p-6 rounded-2xl shadow-xl border ${
                isDarkMode 
                  ? 'bg-gray-900 border-gray-800' 
                  : 'bg-white border-gray-200'
              }`}>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isDarkMode ? 'bg-blue-900' : 'bg-blue-100'
                  }`}>
                    <Zap className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                  <div>
                    <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      98%
                    </div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Energy Efficiency
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Get Started?
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Contact us today for a complimentary consultation and discover how we can transform your home 
              into a smart, efficient, and secure living environment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                  isDarkMode ? 'bg-blue-900' : 'bg-blue-100'
                }`}>
                  <Phone className={`w-7 h-7 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Call Us
                  </h3>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    9284746779
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                  isDarkMode ? 'bg-green-900' : 'bg-green-100'
                }`}>
                  <Mail className={`w-7 h-7 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Email Us
                  </h3>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    sahilthole1008@gmail.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                  isDarkMode ? 'bg-purple-900' : 'bg-purple-100'
                }`}>
                  
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  
                  </h3>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                   
                  </p>
                </div>
              </div>
            </div>

            <div className={`rounded-2xl shadow-xl p-8 border ${
              isDarkMode 
                ? 'bg-black border-gray-800' 
                : 'bg-white border-gray-200'
            }`}>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="First Name"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      isDarkMode 
                        ? 'border-gray-700 bg-gray-900 text-white placeholder-gray-400' 
                        : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
                    }`}
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      isDarkMode 
                        ? 'border-gray-700 bg-gray-900 text-white placeholder-gray-400' 
                        : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    isDarkMode 
                      ? 'border-gray-700 bg-gray-900 text-white placeholder-gray-400' 
                      : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
                  }`}
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    isDarkMode 
                      ? 'border-gray-700 bg-gray-900 text-white placeholder-gray-400' 
                      : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
                  }`}
                />
                <select className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  isDarkMode 
                    ? 'border-gray-700 bg-gray-900 text-white' 
                    : 'border-gray-300 bg-white text-gray-900'
                }`}>
                  <option>Select Service Interest</option>
                  <option>Complete Home Automation</option>
                  <option>Voice Control Integration</option>
                  <option>Mobile App Control</option>
                  <option>Free Installation</option>
                  <option>10 Years Warranty</option>
                  <option>After Sales Support</option>
                  <option>Smart Planning & Consultation</option>
                  <option>Upgrades & Custom Scenes</option>
                  <option>Energy Efficiency</option>
                </select>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project and goals"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-colors ${
                    isDarkMode 
                      ? 'border-gray-700 bg-gray-900 text-white placeholder-gray-400' 
                      : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
                  }`}
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg"
                >
                  Schedule Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-16 px-4 sm:px-6 lg:px-8 border-t ${
        isDarkMode 
          ? 'bg-black text-white border-gray-800' 
          : 'bg-white text-gray-900 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">NexOra Homes</span>
              </div>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Transforming homes with cutting-edge smart automation technology and professional installation services.
              </p>
              <div className="flex space-x-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}>
                  <Wifi className="w-5 h-5" />
                </div>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}>
                  <Mail className="w-5 h-5" />
                </div>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}>
                  <Phone className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className={`space-y-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li className={`transition-colors cursor-pointer ${
                  isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
                }`}>Complete Home Automation</li>
                <li className={`transition-colors cursor-pointer ${
                  isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
                }`}>Voice Control Integration</li>
                <li className={`transition-colors cursor-pointer ${
                  isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
                }`}>Mobile App Control</li>
                <li className={`transition-colors cursor-pointer ${
                  isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
                }`}>Free Installation</li>
                <li className={`transition-colors cursor-pointer ${
                  isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
                }`}>10 Years Warranty</li>
                <li className={`transition-colors cursor-pointer ${
                  isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
                }`}>After Sales Support</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className={`space-y-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li className={`transition-colors cursor-pointer ${
                  isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
                }`}>About Us</li>
                <li className={`transition-colors cursor-pointer ${
                  isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
                }`}>Our Team</li>
                <li className={`transition-colors cursor-pointer ${
                  isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
                }`}>Careers</li>
                <li className={`transition-colors cursor-pointer ${
                  isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
                }`}>Press</li>
                <li className={`transition-colors cursor-pointer ${
                  isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
                }`}>Partners</li>
                <li className={`transition-colors cursor-pointer ${
                  isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
                }`}>Contact</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className={`space-y-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li className={`transition-colors cursor-pointer ${
                  isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
                }`}>Help Center</li>
                <li className={`transition-colors cursor-pointer ${
                  isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
                }`}>Documentation</li>
                <li className={`transition-colors cursor-pointer ${
                  isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
                }`}>System Status</li>
                <li className={`transition-colors cursor-pointer ${
                  isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
                }`}>Warranty</li>
                <li className={`transition-colors cursor-pointer ${
                  isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
                }`}>24/7 Support</li>
                <li className={`transition-colors cursor-pointer ${
                  isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
                }`}>Training</li>
              </ul>
            </div>
          </div>
          
          <div className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center ${
            isDarkMode ? 'border-gray-800' : 'border-gray-200'
          }`}>
            <p className={`text-sm mb-4 md:mb-0 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2025 NexOra Homes. All rights reserved.
            </p>
            <div className={`flex space-x-6 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <a href="#" className={`transition-colors ${
                isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
              }`}>Privacy Policy</a>
              <a href="#" className={`transition-colors ${
                isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
              }`}>Terms of Service</a>
              <a href="#" className={`transition-colors ${
                isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
              }`}>Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;