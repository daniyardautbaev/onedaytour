import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Clock, Camera, Mountain, Star, ChevronRight, Play, Pause } from 'lucide-react';

const AlmatyTripJourney = () => {
  const [activeNode, setActiveNode] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [completedNodes, setCompletedNodes] = useState(new Set());
  const intervalRef = useRef(null);

  const tripData = [
    {
      id: 1,
      name: "Terenkur Trail",
      category: "Health & Nature",
      duration: "2 hours",
      difficulty: "Easy",
      coordinates: { x: 15, y: 80 },
      description: "Begin your wellness journey on this scenic health trail nestled in the foothills. Perfect for morning meditation and gentle exercise with fresh mountain air.",
      highlights: ["Therapeutic walking path", "Mountain air therapy", "Sunrise views", "Local flora"],
      photo: '/ter.jpeg',
      tips: "Best visited early morning for cooler temperatures and fewer crowds."
    },
    {
      id: 2,
      name: "Medeu Ice Rink",
      category: "Sports & Recreation",
      duration: "1.5 hours",
      difficulty: "Easy",
      coordinates: { x: 25, y: 70 },
      description: "Experience the world's highest mountain ice skating rink at 1,691 meters above sea level. This iconic venue has hosted international competitions and offers breathtaking mountain views.",
      highlights: ["World's highest ice rink", "Olympic-standard facility", "Mountain panorama", "Historic venue"],
      photo: "medeu.jpg",
      tips: "Bring warm clothing even in summer. Skate rentals available on-site."
    },
    {
      id: 3,
      name: "Cafe APA KATYA",
      category: "Dining",
      duration: "1 hour",
      difficulty: "Easy",
      coordinates: { x: 30, y: 65 },
      description: "Enjoy a hearty mountain breakfast in this cozy cafe with stunning panoramic views. Local cuisine meets international flavors in a warm, welcoming atmosphere.",
      highlights: ["Mountain view dining", "Local cuisine", "Cozy atmosphere", "Fresh mountain coffee"],
      photo: "/apa.jpeg",
      tips: "Try the traditional Kazakh breakfast. Reservations recommended for window seats."
    },
    {
      id: 4,
      name: "Gorelnik Waterfall",
      category: "Adventure & Nature",
      duration: "3 hours",
      difficulty: "Moderate",
      coordinates: { x: 45, y: 50 },
      description: "Embark on an adventurous mountain hike to discover hidden waterfalls cascading down rocky cliffs. The trail offers stunning views and refreshing natural pools.",
      highlights: ["Hidden waterfalls", "Mountain hiking", "Natural pools", "Wildlife spotting"],
      photo: "gor.jpeg",
      tips: "Wear sturdy hiking boots and bring water. Trail can be slippery near waterfalls."
    },
    {
      id: 5,
      name: "Shymbulak Ski Resort",
      category: "Recreation & Sports",
      duration: "4 hours",
      difficulty: "Moderate",
      coordinates: { x: 60, y: 35 },
      description: "Kazakhstan's premier ski resort offering year-round mountain activities. Take the cable car for spectacular views or enjoy skiing in winter months.",
      highlights: ["Cable car rides", "Ski slopes", "Mountain restaurants", "Adventure activities"],
      photo: "shym.jpeg",
      tips: "Cable car operates year-round. Check weather conditions before visiting."
    },
    {
      id: 6,
      name: "Highest Point 3200m",
      category: "Adventure & Views",
      duration: "5 hours",
      difficulty: "Challenging",
      coordinates: { x: 75, y: 15 },
      description: "Reach the ultimate destination - 3,200 meters above sea level, literally above the clouds. This challenging ascent rewards you with unparalleled 360-degree views.",
      highlights: ["Above the clouds", "360° panoramic views", "Alpine environment", "Achievement milestone"],
      photo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      tips: "Requires good physical condition. Bring warm clothes and sun protection."
    },
    {
      id: 7,
      name: "Ascension Cathedral",
      category: "Culture & History",
      duration: "45 minutes",
      difficulty: "Easy",
      coordinates: { x: 85, y: 75 },
      description: "Marvel at this unique wooden Orthodox cathedral, one of the world's tallest wooden buildings. Built entirely without nails, it's a masterpiece of engineering and faith.",
      highlights: ["Wooden architecture", "No-nail construction", "Orthodox heritage", "Earthquake resistant"],
      photo: "sobor.jpg",
      tips: "Respectful dress code required. Free entry, donations appreciated."
    },
    {
      id: 8,
      name: "Park of 28 Panfilov Guardsmen",
      category: "Memorial & History",
      duration: "1 hour",
      difficulty: "Easy",
      coordinates: { x: 80, y: 85 },
      description: "Pay respects at this memorial park honoring 28 Kazakh soldiers who heroically fought in WWII. The eternal flame and monuments create a moving tribute.",
      highlights: ["WWII memorial", "Eternal flame", "Historic monuments", "Peaceful gardens"],
      photo: "park.jpg",
      tips: "Free entry. Best visited in early morning or late afternoon for photography."
    },
    {
      id: 9,
      name: "Almaty Museum of Arts",
      category: "Culture & Arts",
      duration: "2 hours",
      difficulty: "Easy",
      coordinates: { x: 70, y: 90 },
      description: "Discover Kazakhstan's rich artistic heritage and world-class art collections. From traditional crafts to contemporary works, this museum showcases cultural treasures.",
      highlights: ["Kazakh art collection", "International exhibits", "Traditional crafts", "Contemporary works"],
      photo: "mus.jpg",
      tips: "Student discounts available. Photography permitted in some sections."
    },
    {
      id: 10,
      name: "Kok Tobe Hill",
      category: "Views & Entertainment",
      duration: "2 hours",
      difficulty: "Easy",
      coordinates: { x: 90, y: 60 },
      description: "End your journey with panoramic city views from Almaty's most famous hill. Take the cable car up and enjoy restaurants, attractions, and the iconic TV tower.",
      highlights: ["Panoramic city views", "Cable car ride", "TV tower landmark", "Evening entertainment"],
      photo: "kok.jpg",
      tips: "Best visited at sunset. Cable car operates until late evening."
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-emerald-300 bg-gradient-to-r from-emerald-500/30 to-green-500/30 border border-emerald-400/30';
      case 'moderate': return 'text-amber-200 bg-gradient-to-r from-amber-500/30 to-yellow-500/30 border border-amber-400/30';
      case 'challenging': return 'text-orange-200 bg-gradient-to-r from-red-500/30 to-orange-500/30 border border-red-400/30';
      default: return 'text-gray-300 bg-gradient-to-r from-gray-500/30 to-slate-500/30 border border-gray-400/30';
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Health & Nature': 'text-lime-300 bg-gradient-to-r from-green-500/30 to-lime-500/30 border border-lime-400/30',
      'Sports & Recreation': 'text-cyan-300 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border border-cyan-400/30',
      'Dining': 'text-orange-200 bg-gradient-to-r from-orange-500/30 to-amber-500/30 border border-orange-400/30',
      'Adventure & Nature': 'text-teal-300 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 border border-teal-400/30',
      'Recreation & Sports': 'text-sky-300 bg-gradient-to-r from-cyan-500/30 to-sky-500/30 border border-sky-400/30',
      'Adventure & Views': 'text-violet-300 bg-gradient-to-r from-purple-500/30 to-violet-500/30 border border-violet-400/30',
      'Culture & History': 'text-yellow-200 bg-gradient-to-r from-amber-500/30 to-yellow-500/30 border border-yellow-400/30',
      'Memorial & History': 'text-rose-300 bg-gradient-to-r from-rose-500/30 to-pink-500/30 border border-rose-400/30',
      'Culture & Arts': 'text-indigo-300 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 border border-indigo-400/30',
      'Views & Entertainment': 'text-pink-300 bg-gradient-to-r from-pink-500/30 to-rose-500/30 border border-pink-400/30'
    };
    return colors[category] || 'text-warm-gray-300 bg-gradient-to-r from-gray-500/30 to-warm-gray-500/30 border border-warm-gray-400/30';
  };

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveNode((prev) => (prev + 1) % tripData.length);
      }, 4000);
    } else {
      clearInterval(intervalRef.current);
    }
    
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, tripData.length]);

  const handleNodeClick = (index) => {
    setActiveNode(index);
    setCompletedNodes(prev => new Set([...prev, index]));
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentNode = tripData[activeNode];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-950 via-rose-900 to-amber-950 text-white">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-rose-500 to-amber-400 px-6 py-12">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Almaty Journey
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 mb-6">
            Discover the Crown Jewel of Kazakhstan
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/30 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
              <MapPin className="w-5 h-5 text-orange-100" />
              <span className="text-white font-medium">10 Destinations</span>
            </div>
            <div className="flex items-center gap-2 bg-white/30 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
              <Mountain className="w-5 h-5 text-orange-100" />
              <span className="text-white font-medium">Up to 3200m</span>
            </div>
            <button
              onClick={toggleAutoPlay}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 rounded-full px-4 py-2 transition-all text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              <span>{isAutoPlaying ? 'Pause' : 'Auto Tour'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Interactive Map */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-gradient-to-br from-orange-900/50 to-rose-900/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/30 shadow-2xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-amber-200">
                <MapPin className="w-6 h-6 text-amber-400" />
                Trip Route
              </h2>
              
              <div className="relative aspect-square w-full bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-xl overflow-hidden border border-amber-500/30 shadow-inner">
                {/* Background mountain illustration */}
                <div className="absolute inset-0 opacity-30">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M0,80 Q20,60 40,70 T80,50 L100,60 L100,100 L0,100 Z" fill="url(#mountainGradient)" />
                    <path d="M0,90 Q30,75 60,80 T100,70 L100,100 L0,100 Z" fill="url(#mountainGradient2)" />
                    <defs>
                      <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="100%" stopColor="#ea580c" />
                      </linearGradient>
                      <linearGradient id="mountainGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#dc2626" />
                        <stop offset="100%" stopColor="#b91c1c" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {tripData.slice(0, -1).map((node, index) => {
                    const nextNode = tripData[index + 1];
                    return (
                      <line
                        key={`line-${index}`}
                        x1={`${node.coordinates.x}%`}
                        y1={`${node.coordinates.y}%`}
                        x2={`${nextNode.coordinates.x}%`}
                        y2={`${nextNode.coordinates.y}%`}
                        stroke={completedNodes.has(index) ? "#10d67a" : "#f59e0b"}
                        strokeWidth="2"
                        strokeDasharray={completedNodes.has(index) ? "0" : "5,5"}
                        className="transition-all duration-500"
                      />
                    );
                  })}
                </svg>

                {/* Trip nodes */}
                {tripData.map((node, index) => (
                  <button
                    key={node.id}
                    onClick={() => handleNodeClick(index)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 ${
                      activeNode === index ? 'z-20 scale-125' : 'z-10'
                    }`}
                    style={{
                      left: `${node.coordinates.x}%`,
                      top: `${node.coordinates.y}%`
                    }}
                  >
                    <div className={`relative w-4 h-4 rounded-full border-2 transition-all duration-300 shadow-lg ${
                      activeNode === index
                        ? 'bg-gradient-to-r from-orange-400 to-amber-400 border-amber-300 shadow-orange-400/50'
                        : completedNodes.has(index)
                        ? 'bg-gradient-to-r from-emerald-400 to-lime-400 border-lime-300 shadow-emerald-400/50'
                        : 'bg-gradient-to-r from-amber-600 to-orange-600 border-amber-500 shadow-amber-600/30'
                    }`}>
                      {activeNode === index && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 animate-ping"></div>
                      )}
                    </div>
                    
                    {/* Node label */}
                    <div className={`absolute top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${
                      activeNode === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
                    }`}>
                      <div className="bg-gradient-to-r from-orange-900/90 to-amber-900/90 backdrop-blur-sm border border-amber-500/50 rounded-lg px-2 py-1 text-xs font-medium shadow-lg">
                        {node.name}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Progress indicator */}
              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-amber-300">Progress</span>
                  <span className="text-sm text-amber-300">
                    {activeNode + 1}/{tripData.length}
                  </span>
                </div>
                <div className="w-full bg-amber-900/50 rounded-full h-2 border border-amber-700/50">
                  <div
                    className="bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 h-2 rounded-full transition-all duration-500 shadow-sm"
                    style={{ width: `${((activeNode + 1) / tripData.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Destination Details */}
          <div className="space-y-6">
            {/* Current destination card */}
            <div className="bg-gradient-to-br from-orange-900/60 to-rose-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-400/40 shadow-2xl">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={currentNode.photo}
                  alt={currentNode.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${getCategoryColor(currentNode.category)}`}>
                      {currentNode.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${getDifficultyColor(currentNode.difficulty)}`}>
                      {currentNode.difficulty}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">{currentNode.name}</h3>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-orange-900/80 to-amber-900/80 backdrop-blur-md rounded-full px-3 py-1 border border-amber-500/30">
                    <Camera className="w-4 h-4 text-amber-300" />
                    <span className="text-sm text-white font-medium">{activeNode + 1}/{tripData.length}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-amber-300">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-orange-400" />
                    {currentNode.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    4.8/5
                  </div>
                </div>

                <p className="text-orange-100 leading-relaxed mb-6">
                  {currentNode.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-amber-200 mb-2">Highlights</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {currentNode.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-orange-200">
                          <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full shadow-sm"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-amber-700/50 pt-4">
                    <h4 className="text-lg font-semibold text-amber-200 mb-2">Pro Tip</h4>
                    <p className="text-sm text-amber-200 bg-gradient-to-r from-amber-950/50 to-orange-950/50 rounded-lg p-3 border border-amber-600/30 backdrop-blur-sm">
                      {currentNode.tips}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-3">
              <button
                onClick={() => handleNodeClick(Math.max(0, activeNode - 1))}
                disabled={activeNode === 0}
                className="flex-1 bg-gradient-to-r from-orange-800/50 to-amber-800/50 hover:from-orange-700/60 hover:to-amber-700/60 disabled:from-orange-900/30 disabled:to-amber-900/30 disabled:opacity-50 border border-amber-600/40 hover:border-amber-500/60 rounded-xl px-4 py-3 font-medium transition-all disabled:cursor-not-allowed backdrop-blur-sm text-amber-200"
              >
                ← Previous
              </button>
              <button
                onClick={() => handleNodeClick(Math.min(tripData.length - 1, activeNode + 1))}
                disabled={activeNode === tripData.length - 1}
                className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 disabled:from-orange-800/40 disabled:to-amber-800/40 disabled:opacity-50 rounded-xl px-4 py-3 font-medium transition-all disabled:cursor-not-allowed flex items-center justify-center gap-2 text-white shadow-lg hover:shadow-xl"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trip overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tripData.slice(0, 4).map((node, index) => (
                <button
                  key={node.id}
                  onClick={() => handleNodeClick(index)}
                  className={`group relative overflow-hidden rounded-xl border transition-all hover:scale-105 ${
                    activeNode === index
                      ? 'border-orange-400 bg-gradient-to-br from-orange-950/50 to-amber-950/50 shadow-lg shadow-orange-500/20'
                      : 'border-amber-600/40 bg-gradient-to-br from-orange-900/30 to-amber-900/30 hover:border-amber-500/60 hover:shadow-md hover:shadow-amber-500/10'
                  }`}
                >
                  <img
                    src={node.photo}
                    alt={node.name}
                    className="w-full h-24 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-xs font-medium text-white truncate">{node.name}</p>
                  </div>
                  {completedNodes.has(index) && (
                    <div className="absolute top-2 right-2">
                      <div className="w-5 h-5 bg-emerald-400 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlmatyTripJourney;