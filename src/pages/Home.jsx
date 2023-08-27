import Gambar6 from '/src/assets/gambar6.jpg';
import TitleHome from '../components/LandingPage/TitleHome'
import HotelCarausel from '../components/HotelList/Caraousel/HotelCarausel'

const Home = () => {
  return (
    
    <><div>
      <div className="mb-20 w-full h-screen relative">
        <img
          className='w-full h-full object-cover'
          src={Gambar6} alt="/" />
      </div>
      <div className="absolute top-0 h-screen flex flex-col space-y-10 justify-center items-center bg-[#020617] opacity-60 xl:w-1/3 sm:w-1/2 z-0">
        <div className="text-center space-y-5">
          <h3 className="text-5xl font-bold text-font1">Place To Stay in Jogja</h3>
          <p className="mx-10 text-font1">Here are some of the many accommodation you find in Jogja</p>
        </div>
        <div className="space-x-4">
          <button className="text-white border-2 hover:border-[#1D764A] py-2 px-5 rounded-md">Road Map</button>
          <button className="text-white border-2 hover:border-[#1D764A] py-2 px-5">Read More</button>
        </div>
      </div>
    </div>
    <TitleHome />
    <HotelCarausel />
    </>
  );
};

export default Home