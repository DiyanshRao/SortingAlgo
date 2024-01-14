import React, { useState } from 'react'

import { insertionSort } from '../../Algorithms/insertion-sort'
import { mergeSort } from '../../Algorithms/merge-sort'
import { quickSort } from '../../Algorithms/quick-sort'
import { bubbleSort } from '../../Algorithms/bubble-sort'

function Left({
  size,
  setSize,
  state,
  playing,
  setPlaying,
  setHistory,
  setIndex,
  setSpeed,
}) {
  const [algo, setAlgo] = useState('')

  function _handleChange(event) {
    setAlgo(event.target.value)
  }

  const handleClick = () => {
    switch (algo) {
      case 'InsertionSort': {
        console.log('inside insertion switch')
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

  function updateSize(newSize) {
    setSize(newSize)
  }

  let timeOut
  function handleInputChange(e) {
    if (timeOut !== undefined) {
      clearTimeout(timeOut)
    }
    timeOut = setTimeout(() => updateSize(e.target.value), 500)
  }

  function handleSpeedChange(event) {
    setSpeed(event.target.value)
  }
  return (
    <div className='bg-blue-300 h-screen flex flex-wrap items-center justify-center w-[20%]'>
      <div>
        <h1 className='text-2xl font-bold text-white m-2 text-center'>
          SORTING VISUALIZATION
        </h1>
      </div>
      <div className='w-full flex flex-col gap-5'>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <p className='text-white font-semibold text-xl '>Input Size</p>
          <input
            className=''
            type='range'
            min='5'
            max='50'
            onChange={handleInputChange}
          />
        </div>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <p className='font-semibold text-xl text-white  '>
            Sorting Algorithm
          </p>
          <select name='Sorting Algo' onChange={_handleChange}>
            <option value='BubbleSort'>Bubble Sort</option>
            <option value='InsertionSort'>Insertion Sort</option>
            <option value='MergeSort'>Merge Sort</option>
            <option value='QuickSort'>Quick Sort</option>
          </select>
        </div>

        <div className='flex flex-col gap-4 items-center justify-center'>
          <p className='text-white text-xl font-semibold'>Speed</p>
          <input
            type='range'
            id='vol'
            name='vol'
            min='200'
            max='1000'
            onChange={handleSpeedChange}
          />
        </div>
      </div>
      <div>
        <button
          className='bg-zinc-400 border-2 rounded-md border-black px-4 py-2 hover:bg-zinc-600'
          onClick={handleClick}
          disabled={playing}
        >
          Start
        </button>
      </div>
    </div>
  )
}

export default Left
