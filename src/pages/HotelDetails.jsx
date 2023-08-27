import ContactInfo from '../components/HotelDetail/ContactInfo'


import ImgDetail from '/src/assets/gambar1.jpg'

import {BsFillShareFill} from 'react-icons/bs'
import {BsBookmarkCheck} from 'react-icons/bs'


const HotelDetails = () => {
  return (
    <>
    <div className='object-cover grid grid-cols-4 shrink-0 lg:grid-cols-12 min-w-fit'>
      <img src={ImgDetail} className='h-[518.39px] object-cover col-span-4 lg:col-span-5' />
    </div>
    <div>
    <div className='mt-3 py-5 px-5'>
            <div className='flex justify-between gap-4'>
                <h2 className='grow py-5 font-medium text-base font-lora'>Acomodation</h2>
                <div className='flex flex-row gap-4 py-5 text-lg font-normal font-poppins text-button'>
                    <span>Share</span>
                    <butoon><BsFillShareFill size={23}/></butoon>
                </div>
                <div className='flex flex-row gap-4 py-5 text-lg font-normal font-poppins text-button'>
                    <span>Save</span>
                    <butoon><BsBookmarkCheck size={24}/></butoon>
                </div>
            </div>
            <div className='mt-3 text-2xl font-medium font-lora'>
                <h1>Jogja Hotel</h1>
            </div>
            <div className='mt-5 text-sm font-normal font-poppins'>
                <p>Jogja Hotel Tampere rooms invite you to perfect rest and enjoyment! Our selection of rooms offers a mystical atmosphere and story all designed to make your stay more enjoyable. We are happy to tell you more about the details you can find in our rooms. </p>
            </div>
        </div>
    </div>
    <ContactInfo />
    </>
  )
}

export default HotelDetails