

const RightLoc = ({data}) => {
    const {title,image,location,phone}=data;
  return (
    <div className='bg-white col-span-2 p-10 rounded-xl shadow-xl'>
        <div className='flex flex-row-reverse flex-col items-center text-center lg:flex gap-8'>
            <img className='rounded-xl w-[70%] lg:w-[50%]' src={image} alt="" />
            <div >
            <h1 className='text-4xl pb-4 font-semibold'>{title}</h1>
            <h3>{location}</h3>
            <p>Phone: {phone}</p>
            </div>
        </div>
    </div>
  )
}

export default RightLoc