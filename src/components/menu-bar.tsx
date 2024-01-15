import React, { useState } from 'react'

import { insertionSort } from '@/Algorithms/insertion-sort'
import { mergeSort } from '@/Algorithms/merge-sort'
import { quickSort } from '@/Algorithms/quick-sort'
import { bubbleSort } from '@/Algorithms/bubble-sort'

interface MenuBarProps {
  size: number
  setSize: (newSize: number) => void
  state: any[]
  playing: boolean
  setPlaying: (playing: boolean) => void
  setHistory: (history: any[]) => void
  setIndex: (index: number) => void
  setSpeed: (speed: number) => void
}

export function MenuBar({
  size,
  setSize,
  state,
  playing,
  setPlaying,
  setHistory,
  setIndex,
  setSpeed,
}: MenuBarProps) {
  const [algo, setAlgo] = useState<string>('')

  function _handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setAlgo(event.target.value)
  }

  const handleClick = () => {
    switch (algo) {
      case 'InsertionSort': {
        setHistory(insertionSort(state))
        setPlaying(true)
        break
      }
      case 'MergeSort': {
        setHistory(mergeSort(state))
        setPlaying(true)
        break
      }
      case 'QuickSort': {
        setHistory(quickSort(state))
        setPlaying(true)
        break
      }
      case 'BubbleSort': {
        setHistory(bubbleSort(state))
        setPlaying(true)
        break
      }
      default: {
        setHistory(insertionSort(state))
        setPlaying(true)
      }
    }
  }

  function updateSize(newSize: number) {
    if (newSize > 280) {
      newSize = 280
    }
    setSize(newSize)
  }

  let timeOut: NodeJS.Timeout
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (timeOut !== undefined) {
      clearTimeout(timeOut)
    }
    timeOut = setTimeout(() => updateSize(parseInt(e.target.value, 10)), 500)
  }

  function handleSpeedChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSpeed(parseInt(event.target.value, 10))
  }

  return (
    <div className='bg-white  flex flex-wrap items-center justify-center w-[30%]  gap-5 py-2 text-zinc-400 text-center border-2 border-zinc-400 rounded-md m-2'>
      <div>
        <h1 className='text-2xl font-bold text-zinc-600 m-2 text-center'>
          Menu
        </h1>
      </div>
      <div className='w-full flex flex-col gap-5 px-2 '>
        <div className='flex flex-col gap-2  justify-center '>
          <p className='text-zinc-600 font-semibold text-xl  '>Input Size</p>
          <input
            className='text-zinc-400 text-center border-2 border-zinc-400 rounded-md'
            type='number'
            min={5}
            max={280}
            defaultValue={20}
            onChange={handleInputChange}
          />
        </div>
        <div className='flex flex-col gap-2  justify-center '>
          <p className='font-semibold text-xl text-zinc-600 '>
            Sorting Algorithm
          </p>
          <select
            name='Sorting Algo'
            onChange={_handleChange}
            className='text-zinc-400 text-center border-2 border-zinc-400 rounded-md'
          >
            <option value='BubbleSort'>Bubble Sort</option>
            <option value='InsertionSort'>Insertion Sort</option>
            <option value='MergeSort'>Merge Sort</option>
            <option value='QuickSort'>Quick Sort</option>
          </select>
        </div>

        <div className='flex flex-col gap-2 justify-center '>
          <p className='text-zinc-600 text-xl font-semibold'>Speed</p>
          <select
            className='text-zinc-400 text-center border-2 border-zinc-400 rounded-md'
            name='Sorting Algo'
            onChange={handleSpeedChange}
          >
            <option value={800}>Slow</option>
            <option value={600}>Medium</option>
            <option value={100}>Fast</option>
            <option value={0}>Lightning</option>
          </select>
        </div>
      </div>
      <div className='  w-full h-full flex  justify-center'>
        <div>
          <button
            className='border-2 rounded-md border-black px-4 py-2 hover:bg-zinc-600 text-zinc-400'
            onClick={handleClick}
            disabled={playing}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  )
}
