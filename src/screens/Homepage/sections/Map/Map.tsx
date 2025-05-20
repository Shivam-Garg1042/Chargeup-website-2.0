import { useEffect, useState } from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export default function MapWithContentLayout() {
  const [mapData, setMapData] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Fetch India map data
    fetch("https://code.highcharts.com/mapdata/countries/in/custom/in-all-disputed.topo.json")
      .then(response => response.json())
      .then(data => setMapData(data))
      .catch(error => console.error("Error loading map data:", error));

    // Check for mobile view
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // States data - using dark color (#001219) for highlighted states
  const stateData = [
    { 'hc-key': 'uttar pradesh', value: 1, color: '#001219' },
    { 'hc-key': 'madhya pradesh', value: 1, color: '#001219' },
    { 'hc-key': 'nct of delhi', value: 1, color: '#001219' },
    { 'hc-key': 'rajasthan', value: 1, color: '#001219' },
    { 'hc-key': 'haryana', value: 1, color: '#001219' }
  ];

  // Cities with marker positions
  const citiesCoordinates = [
    { name: 'Delhi', lat: 28.6139, lon: 77.2090 },
    { name: 'Jaipur', lat: 26.9124, lon: 75.7873 },
    { name: 'Lucknow', lat: 26.8467, lon: 80.9462 },
    { name: 'Kanpur', lat: 26.4499, lon: 80.3319 },
    { name: 'Agra', lat: 27.1767, lon: 78.0081 },
    { name: 'Bhopal', lat: 23.2599, lon: 77.4126 },
    { name: 'Indore', lat: 22.7196, lon: 75.8577 },
    { name: 'Gwalior', lat: 26.2183, lon: 78.1828 },
    { name: 'Ujjain', lat: 23.1765, lon: 75.7885 },
    { name: 'Varanasi', lat: 25.3176, lon: 82.9739 },
    { name: 'Ghaziabad', lat: 28.6692, lon: 77.4538 },
    { name: 'Noida', lat: 28.5355, lon: 77.3910 }
  ];

  // Chart options for Highcharts map
  const chartOptions = {
    chart: {
      map: mapData,
      backgroundColor: 'transparent',
      events: {
        load: function () {
          const chart = this;
          chart.mapView.setView(
            [80, 29], // [longitude, latitude] - center between Delhi and MP
            6// Zoom level - adjust as needed (lower = more zoomed out)
          );
        }
      }
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
      {
        type: 'mappoint',
        name: 'Cities',
        color: '#F8BB25',
        data: citiesCoordinates.map(coord => ({
          name: coord.name,
          lat: coord.lat,
          lon: coord.lon
        })),
        marker: {
          radius: 3.25,
          symbol: 'circle',
          fillColor: '#F8BB25',
          lineWidth: 0,
          lineColor: '#F8BB25'
          
        },
        dataLabels: {
          enabled: false
        }
      }
    ]
  };

  // Animated marker fallback
  const AnimatedMarkers = () => {
    if (mapData) return null;
    
    const mapMarkers = [
      { top: "35%", left: "42%" },
      { top: "38%", left: "44%" },
      { top: "40%", left: "45%" },
      { top: "42%", left: "46%" },
      { top: "44%", left: "43%" },
      { top: "46%", left: "45%" },
      { top: "48%", left: "47%" },
      { top: "50%", left: "44%" },
      { top: "52%", left: "46%" },
      { top: "54%", left: "45%" },
      { top: "56%", left: "43%" },
      { top: "58%", left: "45%" },
    ];

    return (
      <>
        {mapMarkers.map((marker, index) => (
          <div
            key={index}
            className="absolute"
            style={{ top: marker.top, left: marker.left }}
          >
            <div className="relative">
              <div className="w-4 h-4 bg-[#F8BB25] rounded-full"></div>
              <div className="absolute inset-0 w-4 h-4 bg-[#F8BB25] rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <section className="w-full max-w-[1400px] md:px-12 min-h-screen bg-white -mb-24 mt-16 ">
      {/* <h2 className="text-4xl sm:text-5xl font-medium text-center mb-8">
        Our Reach
      </h2> */}
      
      <div className="relative w-full h-[750px]">
        {/* L-shaped black container with map */}
        <div className="absolute inset-0" style={{
          clipPath: 'polygon(0% 0%, 60% 0%, 60% 50%, 100% 50%, 100% 100%, 0% 100%)',
         
        }}>
          {mapData ? (
            <HighchartsReact
              highcharts={Highcharts}
              constructorType="mapChart"
              options={chartOptions}
              containerProps={{ className: "w-full h-full" }}
            />
          ) : (
            <div className="relative w-full h-full">
              
              <AnimatedMarkers />
            </div>
          )}
        </div>
        
        {/* Red container with content */}
        <div className="absolute top-0 right-0 w-2/5 h-1/2   flex flex-col items-start justify-center space-y-8">
          {/* Stats Cards */}
          <div className="flex flex-row gap-8 justify-center w-full ">
            <Card className="bg-white shadow-xl flex-1 h-28">
              <CardContent className="p-4 flex flex-col items-center">
                <h3 className="text-3xl font-bold mb-1">16+</h3>
                <p className="text-gray-500 text-base">Cities</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl flex-1 h-28">
              <CardContent className="p-4 flex flex-col items-center">
                <h3 className="text-3xl font-bold mb-1">9+</h3>
                <p className="text-gray-500 text-base">Planned Expansions</p>
              </CardContent>
            </Card>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-700 ">
            Serving 18+ Pincodes
through our dealer network
          </p>

          {/* CTA Button */}
          <div className="flex flex-row gap-4">
          <Button 
            className="bg-[#F8BB25] hover:bg-[#F48900] text-black px-4 py-3 text-lg font-medium rounded-lg transition-colors "
          >
            Become a Partner
          </Button>
          <Button 
            className="bg-[#F8BB25] hover:bg-[#F48900] text-black px-4 py-3 text-lg font-medium rounded-lg transition-colors "
          >
            Become a Driver
          </Button>
          </div>
        </div>
      </div>
    </section>
  );
}