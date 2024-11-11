import React from 'react'

const AboutTitle = ({title, subtitle}:{title:string, subtitle:string}) => {
  return (
    <div className='mb-7'>
      <h3 className='font-[600] text-black mb-1 md:mb-7 whitespace-nowrap'>{title}</h3>
      <h5 className='font-[400] text-black'>{subtitle}</h5>
    </div>
  )
}

export default AboutTitle
