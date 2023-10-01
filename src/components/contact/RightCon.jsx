import React from 'react'

const RightCon = () => {
  return (
    <div className=' col-span-2 p-6'>
        <form action="" className='flex flex-col space-y-4'>
            <input type="text" placeholder='Enter your name '  className='p-3 rounded-lg border-2'/>
            <input type="email" placeholder='Enter your email'  className='p-3 rounded-lg border-2'/>
            <textarea name="
            " id="" placeholder='Enter your message' className='p-3 rounded-lg border-2' cols="30" rows="10"></textarea>
            <button className='bg-red-600 text-white p-2 text-lg rounded-lg font-bold'>Send Message</button>
        </form>
    </div>
  )
}

export default RightCon