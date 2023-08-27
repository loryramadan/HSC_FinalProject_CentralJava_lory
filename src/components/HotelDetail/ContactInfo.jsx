import Map from '/src/assets/map.jpeg'
// import Location from '/src/assets/location.svg'
import {TiWeatherSunny} from 'react-icons/ti'
import {HiMail} from 'react-icons/hi'
import {TiLocation} from 'react-icons/ti'

const ContactInfo = () => {
  return (
    <div className='mx-auto px-10 py-2 h-full max-w-[1224px] min-w-fit m-5'>
        <div className='container max-w-[634px] mx-auto h-full'>
            <div className='h-full text-center justify-center pt-10 pb-10'>
                <div className='mb-2 px-10 font-lora'>
                    <TiLocation size={25} className='w-full'/>
                    <h2>where is jogja?</h2>
                </div>
                <div className='px-2 w-[248px]  mx-auto'>
                    <img className='w-[248px] h-[430px] object-cover' src={Map} />
                </div>
            </div>
            <div className='h-full text-center  py-5'>
                <TiWeatherSunny size={30} className='w-full'/>
                <h2 className='mt-4 font-lora'>season</h2>
                <p className='mt-4 font-poppins'>suitable all year</p>
            </div>
            <div className='h-[300px] text-center pt-16 rounded-lg bg-button2'>
                <HiMail size={30} className='w-full h-7'/>
                <h2 className='mt-4 font-lora'>Contact</h2>
                <p className='mt-4 font-poppins'>jogja hotel</p>
                <button className='mt-4 bg-button2 border rounded-lg p-3 text-button font-poppins'>view website</button>
            </div>
        </div>
    </div>
  )
}

export default ContactInfo