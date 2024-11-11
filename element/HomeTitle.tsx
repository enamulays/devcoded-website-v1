import React from 'react'


const HomeTitle = ({title, content1, content2}:{title:string, content1?:string, content2:string}) => {
  return (
    <div>
      <h2 className='text-primary font-[600] text-[24px] md:text-[32px] leading-[normal] mb-[28px]'>{title}</h2>
      <p className='text-[16px] md:text-[18px] font-[500] leading-[normal] mb-[28px]'>{content1}</p>
      <p className='text-[16px] md:text-[18px] font-[500] leading-[normal] mb-[32px]' dangerouslySetInnerHTML={{__html:content2}}/>
    </div>
  )
}

export default HomeTitle
