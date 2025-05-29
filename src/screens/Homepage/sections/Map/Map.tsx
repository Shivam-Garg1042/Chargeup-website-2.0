import { useEffect, useState } from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import PartnerModal from "../../../PartnerPage/sections/PartnerContact/PartnerContact";

export default function MapWithContentLayout() {
  const [mapData, setMapData] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    // Fetch India map data
    fetch("https://code.highcharts.com/mapdata/countries/in/custom/in-all-disputed.topo.json")
      .then(response => response.json())
      .then(data => setMapData(data))
      .catch(error => console.error("Error loading map data:", error));

    // Check for responsive layouts
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // States data - using dark color (#001219) for highlighted states
  const stateData = [
    { 'hc-key': 'uttar pradesh', value: 19, color: '#001219' },
    { 'hc-key': 'madhya pradesh', value: 16, color: '#001219' },
    { 'hc-key': 'nct of delhi', value: 21, color: '#001219' },
    { 'hc-key': 'rajasthan', value: 25, color: '#001219' },
    { 'hc-key': 'haryana', value: 9, color: '#001219' }
  ];

  // Cities with marker positions
  const citiesCoordinates = [
    { name: 'Delhi', lat: 28.6139, lon: 77.2090, importance: 'low' },
    { name: 'Jaipur', lat: 26.9124, lon: 75.7873, importance: 'low' },
    { name: 'Lucknow', lat: 26.8467, lon: 80.9462, importance: 'low' },
    { name: 'Kanpur', lat: 26.4499, lon: 80.3319, importance: 'low' },
    { name: 'Agra', lat: 27.1767, lon: 78.0081, importance: 'low' },
    { name: 'Bhopal', lat: 23.2599, lon: 77.4126, importance: 'low' },
    { name: 'Indore', lat: 22.7196, lon: 75.8577, importance: 'low' },
    { name: 'Gwalior', lat: 26.2183, lon: 78.1828, importance: 'low' },
    { name: 'Ujjain', lat: 23.1765, lon: 75.7885, importance: 'low' },
    { name: 'Varanasi', lat: 25.3176, lon: 82.9739, importance: 'low' },

    { name: 'Jodhpur', lat: 26.2389, lon: 73.0243, importance: 'low' },
    { name: 'Udaipur', lat: 24.5854, lon: 73.7125, importance: 'low' },
    // { name: 'Chandigarh', lat: 30.7333, lon: 76.7794, importance: 'low' },
    // { name: 'Amritsar', lat: 31.6340, lon: 74.8723, importance: 'medium' },
    { name: 'Kota', lat: 25.2138, lon: 75.8648, importance: 'low' },
    { name: 'Allahabad', lat: 25.4358, lon: 81.8463, importance: 'low' },
    // { name: 'Nagpur', lat: 21.1458, lon: 79.0882, importance: 'medium' },
    { name: 'Mathura', lat: 27.4924, lon: 77.6737, importance: 'low' },
    { name: 'Aligarh', lat: 27.8974, lon: 78.0880, importance: 'low' },
    { name: 'Saharanpur', lat: 29.9680, lon: 77.5510, importance: 'low' },
    { name: 'Ajmer', lat: 26.4499, lon: 74.6399, importance: 'low' },
    { name: 'Bikaner', lat: 28.0229, lon: 73.3119, importance: 'low' },
    { name: 'Rewa', lat: 24.5362, lon: 81.3037, importance: 'low' },
    // { name: 'Muzaffarpur', lat: 26.1197, lon: 85.3910, importance: 'low' }
  ];

  // Filter only ~70% of cities for mobile view
  const mobileCitiesCoordinates = citiesCoordinates.filter((_, index) => {
    // Keep all high importance cities and about 70% of the others
    return index < Math.ceil(citiesCoordinates.length * 0.4);
  });

  // Chart options for Highcharts map
  const chartOptions = {
    chart: {
      map: mapData,
      backgroundColor: 'transparent',
      events: {
        load: function () {
          const chart = this;
          // Adjust view based on screen size
          if (isMobile) {
            chart.mapView.setView([80, 25], 4.1);
          } else if (isTablet) {
            chart.mapView.setView([80, 27], 5);
          } else {
            chart.mapView.setView([80, 29], 6);
          }
        }
      },
      // Make chart responsive
      reflow: true,
      height: isMobile ? '100%' : '750px'
    },
    title: {
      text: undefined
    },
    mapNavigation: {
      enabled: false
    },
    colorAxis: {
      visible: false
    },
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    series: [
      {
        data: stateData,
        name: "Our Reach",
        states: {
          hover: {
            brightness: 0.1,
            color: undefined
          }
        },
        dataLabels: {
          enabled: false
        },
        nullColor: "#e0e0e0",
        borderColor: '#ffffff',
        borderWidth: 0.5
      },
      // Enhanced city markers
      {
        type: 'mappoint',
        name: 'Major Cities',
        color: '#F8BB25',
        data: (isMobile ? mobileCitiesCoordinates : citiesCoordinates).slice(0, 10)

          .filter(city => city.importance === 'high')
          .map(coord => ({
            name: coord.name,
            lat: coord.lat,
            lon: coord.lon
          }
        )),
        marker: {
          radius: 7,
          symbol: 'circle',
          fillColor: '#F8BB25',
          lineWidth: 2,
          lineColor: '#ffffff'
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}',
          style: {
            color: '#333',
            fontWeight: 'bold',
            textOutline: '2px white'
          },
          y: -12
        }
      },
      {
        type: 'mappoint',
        name: 'Medium Cities',
        color: '#F8BB25',
        data: (isMobile ? mobileCitiesCoordinates : citiesCoordinates)
          .filter(city => city.importance === 'medium')
          .map(coord => ({
            name: coord.name,
            lat: coord.lat,
            lon: coord.lon
          })),
        marker: {
          radius: 5,
          symbol: 'circle',
          fillColor: '#F8BB25',
          lineWidth: 1.5,
          lineColor: '#ffffff'
        },
        dataLabels: {
          enabled: !isMobile,
          format: '{point.name}',
          style: {
            color: '#333',
            fontWeight: 'normal',
            textOutline: '1px white'
          },
          y: -8
        }
      },
      {
        type: 'mappoint',
        name: 'Small Cities',
        color: '#F8BB25',
        data: (isMobile ? mobileCitiesCoordinates : citiesCoordinates)
          .filter(city => city.importance === 'low')
          .map(coord => ({
            name: coord.name,
            lat: coord.lat,
            lon: coord.lon
          })),
        marker: {
          radius: 3,
          symbol: 'circle',
          fillColor: '#F8BB25',
          lineWidth: 1,
          lineColor: '#ffffff'
        },
        dataLabels: {
          enabled: false
        }
      },
      // Pulsating effect series for ALL cities (not just medium and high)
      {
        type: 'mappoint',
        name: 'Pulse Effect',
        color: 'rgba(248, 187, 37, 0.4)',
        data: (isMobile ? mobileCitiesCoordinates : citiesCoordinates)
          .map(coord => ({
            lat: coord.lat,
            lon: coord.lon
          })),
        enableMouseTracking: false,
        marker: {
          radius: 12,
          symbol: 'circle',
          fillColor: 'rgba(248, 187, 37, 0)',
          lineWidth: 2,
          lineColor: 'rgba(248, 187, 37, 0.4)'
        },
        animation: {
          duration: 2000
        }
      }
    ]
  };

  // Animated marker fallback
  const AnimatedMarkers = () => {
    if (mapData) return null;
    
    // Define more markers but show fewer on mobile
    const baseMarkers = [
      { top: "35%", left: "42%", size: "large" },
      { top: "38%", left: "44%", size: "medium" },
      { top: "40%", left: "45%", size: "medium" },
      { top: "42%", left: "46%", size: "medium" },
      { top: "44%", left: "43%", size: "medium" },
      { top: "46%", left: "45%", size: "medium" },
      { top: "48%", left: "47%", size: "medium" },
      { top: "50%", left: "44%", size: "medium" },
      { top: "52%", left: "46%", size: "small" },
      { top: "54%", left: "45%", size: "small" },
      { top: "56%", left: "43%", size: "small" },
      { top: "58%", left: "45%", size: "small" },
      { top: "34%", left: "39%", size: "small" },
      { top: "36%", left: "41%", size: "small" },
      { top: "39%", left: "41%", size: "small" },
      { top: "41%", left: "42%", size: "small" },
      { top: "43%", left: "39%", size: "small" },
      { top: "45%", left: "41%", size: "small" },
      { top: "47%", left: "43%", size: "small" },
      { top: "49%", left: "40%", size: "small" },
    ];
    
    // Filter to ~70% for mobile
    const mapMarkers = isMobile 
      ? baseMarkers.filter((_, index) => index < Math.ceil(baseMarkers.length * 0.7))
      : baseMarkers;

    return (
      <>
        {mapMarkers.map((marker, index) => {
          // Determine size based on marker type
          const dotSize = marker.size === "large" ? "w-6 h-6" : 
                         marker.size === "medium" ? "w-4 h-4" : "w-3 h-3";
          const pulseSize = marker.size === "large" ? "w-6 h-6" : 
                           marker.size === "medium" ? "w-4 h-4" : "w-3 h-3";
          const pulseDelay = `animation-delay-${(index % 5) * 200}`;
                           
          return (
            <div
              key={index}
              className="absolute"
              style={{ top: marker.top, left: marker.left }}
            >
              <div className="relative">
                <div className={`${dotSize} bg-[#F8BB25] rounded-full border-2 border-white shadow-lg z-10`}></div>
                <div className={`absolute inset-0 ${pulseSize} bg-[#F8BB25] rounded-full animate-ping opacity-75 ${pulseDelay}`}></div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  // Add a function to handle pulse animation on the map
  useEffect(() => {
    if (!mapData) return;
    
    // Animation function for pulse effect - now for ALL dots
    const animatePulse = () => {
      const chart = Highcharts.charts.find(c => c && c.options.chart.map);
      if (!chart) return;
      
      const pulseSeries = chart.series.find(s => s.name === 'Pulse Effect');
      if (!pulseSeries) return;
      
      // Animate the markers
      pulseSeries.points.forEach((point, i) => {
        // Create staggered animation
        setTimeout(() => {
          if (!point || !point.graphic) return;
          
          // Start animation for this point
          animatePoint(point);
        }, i * 300);
      });
    };
    
    const animatePoint = (point) => {
      if (!point || !point.graphic) return;
      
      point.graphic.animate({
        r: 25,
        opacity: 0
      }, {
        duration: 2000,
        complete: function() {
          // Reset
          if (point && point.graphic) {
            point.graphic.attr({
              r: 12,
              opacity: 1
            });
            // Repeat animation with random delay
            setTimeout(() => animatePoint(point), Math.random() * 3000);
          }
        }
      });
    };
    
    // Start animation after chart is loaded
    const timer = setTimeout(animatePulse, 1000);
    return () => clearTimeout(timer);
  }, [mapData]);

  return (
    <section className="w-full max-w-[1400px] px-4 md:px-8 lg:px-12  bg-white sm:-mb-12 lg:-mb-24 mt-8 sm:mt-16 -mb-36 min-h-screen">
      <div className={`relative w-full ${isMobile ? 'flex flex-col' : 'h-[750px]'}`}>
        {/* Map container with responsive design */}
        <div className={`${isMobile ? 'relative w-full h-[400px] mb-8' : 'absolute inset-0'}`} 
          style={{
            clipPath: isMobile ? 'none' : isTablet ? 
              'polygon(0% 0%, 70% 0%, 70% 60%, 100% 60%, 100% 100%, 0% 100%)' : 
              'polygon(0% 0%, 60% 0%, 60% 50%, 100% 50%, 100% 100%, 0% 100%)'
          }}
        >
          {mapData ? (
            <HighchartsReact
              highcharts={Highcharts}
              constructorType="mapChart"
              options={chartOptions}
              containerProps={{ className: "w-full h-full" }}
            />
          ) : (
            <div className="relative w-full h-full bg-gray-50 rounded-lg">
              <AnimatedMarkers />
            </div>
          )}
        </div>
        
        {/* Content container with responsive design */}
        <div className={`${isMobile ? 'relative w-full -top-8 ' : isTablet ? 'absolute top-0 right-0 w-3/5 h-3/5 p-4' : 'absolute top-0 right-0 w-2/5 h-1/2 p-6'} flex flex-col items-start justify-center space-y-6`}>
          
          {/* Heading */}
          <h2 className="hidden sm:block ext-xl sm:text-4xl font-bold text-gray-800 md:mb-1">
             Our Presence
          </h2>
          
          {/* Stats Cards */}
          <div className={`flex ${isMobile ? 'flex-row' : 'flex-row'} gap-4 justify-center w-full`}>
            
            <Card className="bg-white shadow-xl flex-1 h-28">
              <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                <h3 className="text-3xl sm:text-4xl font-bold mb-1">16+</h3>
                <p className="text-gray-500 text-base sm:text-xl">Cities</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl flex-1 h-28">
              <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                <h3 className="text-3xl sm:text-4xl font-bold mb-1">9+</h3>
                <p className="text-gray-500 text-base sm:text-xl">Planned Expansions</p>
              </CardContent>
            </Card>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-700">
            Serving 180+ pincodes through our dealer network
          </p>

          {/* CTA Button */}
          <div className={`flex ${isMobile ? 'flex-row w-full justify-center' : 'flex-row w-full align-center justify-center '} gap-4`}>
            <Button 
              className="bg-[#0A704A] hover:bg-[#0A704A] text-white px-4 py-3 text-lg font-medium rounded-lg transition-colors"
              onClick={() => setIsModalOpen(true)}
            >
              Partner with us
            </Button>
            <PartnerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            
            {/* <Button 
              className="bg-[#F8BB25] hover:bg-[#F48900] text-black px-4 py-3 text-base sm:text-lg font-medium rounded-lg transition-colors"
            >
              Become a Driver
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}