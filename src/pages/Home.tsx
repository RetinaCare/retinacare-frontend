import Navbar from "../components/Navbar";

export default function Home() {
  return (
     <div className="min-h-screen bg-white">
      {/* Main container with exact Figma dimensions */}
      <div 
        className="mx-auto overflow-hidden h-[4496px] rounded-[20px_20px_20px_20px] bg-[#90D5FF99]"
        style={{
          // width: '1440px',
          maxWidth: '100%', // For responsiveness
          // borderRadius: '20px',
          // background: 'rgba(144, 213, 255, 0.6)' // #90D5FF99 - 60% opacity
        }}
      >
      <Navbar />

      {/* Page Content */}
    

        {/* Your landing page sections will go here */}
      </div>
    </div>
  );
};