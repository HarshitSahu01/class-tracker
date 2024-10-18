import React from 'react'

const Map = () => {
  return (
    <div>

        <div className="map min-h-screen min-w-screen overflow-hidden  pb-24 relative">
        <iframe className='border-0 min-h-screen w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.3908650294493!2d79.05904737427731!3d21.176626382685452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1a8970c08e9%3A0xfe4a9c97e7e671cb!2sShri%20Ramdeobaba%20College%20of%20Engineering%20and%20Management!5e0!3m2!1sen!2sin!4v1729187471509!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        {/* <iframe src="https://www.google.com/maps/d/embed?mid=1UJpLxQcrWMsXVaPrhgKIfvYKUOlxTgc&ehbc=2E312F" width="640" height="480"></iframe> */}
        </div>
    </div>
  )
}

export default Map