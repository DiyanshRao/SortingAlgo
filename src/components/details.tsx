import Typewriter from 'typewriter-effect'
import { useState, useEffect } from 'react'

export const Details = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  return (
    <div className=' w-full text-zinc-400  border-2 border-zinc-400 rounded-md m-2 flex flex-row justify-between '>
      <div className='pl-5 '>
        <h1 className='text-zinc-600 text-3xl font-bold mt-5'>
          Hi, My name is Diyansh Rao
        </h1>
        <br />
        <p className='text-zinc-400 text-md font-semibold w-[400px] text-left'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  'Hello guys this project will help you understand the working of sorting algorithms such as BUBBLE SORT, MERGE SORT, INSERTION SORT and QUICK SORT.'
                )
                .start()
            }}
          />
        </p>
      </div>
      <div className=' text-zinc-600  text-right  mr-3'>
        <p className='text-md mb-2 font-semibold'>Note :</p>
        <div className='flex flex-col justify-center gap-3 font-semibold text-xl   '>
          <div className='text-blue-400'>Compare</div>
          <div className='text-green-600'>Ordered </div>
          <div className='text-rose-600'> Unordered </div>
        </div>
      </div>
    </div>
  )
}
