import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div className='h-[100vh]  w-full'>
        {children}</div>
  )
}

export default layout