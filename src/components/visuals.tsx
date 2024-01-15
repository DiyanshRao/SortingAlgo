'use client'
import React from 'react'
import { useState, useEffect } from 'react'

interface VisualsProps {
  state: any[]
  size: number
}

export function Visuals({ state, size }: VisualsProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  return (
    <div className=' justify-center w-full bg-white p-2  '>
      <div
        className={`flex flex-row  justify-center items-end border-2 border-black p-2 rounded-lg ${
          size > 40 ? 'gap-0' : 'gap-1'
        }`}
      >
        {state.map((obj: { value: number; color: string }, index: number) => (
          <div
            key={index}
            className='flex flex-col  items-center justify-center gap-1'
          >
            <div
              style={{
                height: `${obj.value * 3}px`,
                width: `${(Math.floor(70 / size) + 1) * 5}px`,
                backgroundColor: `${obj.color}`,
                color: 'white',
              }}
            />
            {size < 41 && (
              <p className='text-sm text-zinc-500 text-center border border-zinc-500 p-1 rounded-lg'>
                {obj.value}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
