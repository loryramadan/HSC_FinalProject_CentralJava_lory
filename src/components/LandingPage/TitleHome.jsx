
const TitleHome = () => {
  return (
    <div className='h-full w-full lg:grid lg:grid-cols-12 px-2 mb-5 mx-auto md:px-40'>
        <div className='col-span-6'>
            <h1 className='text-font2 border-t border-black pt-4 font-lora' >
                Hotels and hostels
            </h1>
        </div>
        <div className="col-span-6">
            <p className='mt-10 text-font2 text-center font-poppins'>
            Whether you`re traveling on a budget or booking a Presidential Suite, Jogja has accommodations to suit your needs. Stay at a local, family-run establishment or book a room at your preferred global hotel chain.
            </p>
        </div>
    </div>
  )
}

export default TitleHome