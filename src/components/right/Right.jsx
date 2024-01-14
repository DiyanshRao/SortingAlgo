'use client'
import React from 'react'

function Right({ state, size }) {
  return (
    <div className='w-full bg-white flex flex-col justify-between '>
      <div className='flex flex-row justify-end gap-5 font-semibold text-xl'>
        <div className='text-blue-400'>Compare</div>
        <div className='text-green-600'> Ordered</div>
        <div className='text-rose-600'> Unordered </div>
      </div>
      <div className='flex flex-row gap-5 justify-center items-end border-2 border-black p-2 rounded-lg m-2 '>
        {state.map((obj, index) => (
          <div
            key={index}
            className=' flex flex-col gap-4 items-center justify-center'
          >
            <div
              style={{
                height: `${obj.value * 3}px`,
                width: `${Math.floor(70 / size) * 5}px`,
                backgroundColor: `${obj.color}`,
                color: 'white',
              }}
            />
            <p className='text-sm text-zinc-500 text-center border border-zinc-500 p-1 rounded-lg'>
              {obj.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Right
