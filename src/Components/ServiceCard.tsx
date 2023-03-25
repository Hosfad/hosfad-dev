import React from 'react'


function ServiceCard({color, title ,children}:any) {
  return (
    <div className={`bg-${color}-500 w-full rounded-3xl py-2 font-bold inline-block text-bold text-gray7  shadow-xl `}>
            <div className={`bg-gray6 w-full rounded-2xl font-bold inline-block text-bold text-gray7 px-6 py-4 shadow-xl`}>
                <h1 className={`text-4xl`}>{title}</h1>
            <h2 className='mt-2'>{children}</h2>
        </div>
    </div>
  )
}

export default ServiceCard