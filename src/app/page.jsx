'use client'
import React, { useState, useEffect, useRef } from 'react'

import Left from '@/components/left/Left'
import Right from '@/components/right/Right'
import { Navbar } from '@/components/Navbar'

function generator(min, max, size) {
  if (min > max || size <= 0) {
    console.error('Invalid input parameters')
    return []
  }

  const randomArray = []
  for (let i = 0; i < size; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    randomArray.push(randomNumber)
  }

  return randomArray
}

function initialState(size = 20) {
  const arr = generator(10, 100, size)
  return arr.map((ele) => ({
    value: ele,
    compare: false,
    sorted: false,
    color: '#293451',
  }))
}

function Home() {
  const [size, setSize] = useState(20)
  const [state, setState] = useState(initialState(size))
  const [speed, setSpeed] = useState(300)
  let [history, setHistory] = useState([])

  const [playing, setPlaying] = useState(false)
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef()

  useEffect(() => {
    setPlaying(false)
    setIndex(0)
    clearTimeout(timeoutRef.current)
    setHistory([])
    setState(initialState(size))

    setHistory([])
  }, [size])

  useEffect(() => {
    if (index > 0) setState(history[index])
  }, [index])

  useEffect(() => {
    if (playing && index < history.length - 1) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => {
        setIndex((index) => index + 1)
      }, speed)
    } else {
      if (index >= history.length) setPlaying(false)
    }
  }, [index, playing])

  return (
    <div className=' flex flex-col'>
      <div className='flex flex-row'>
        <Left
          size={size}
          setSize={setSize}
          state={state}
          history={history}
          setPlaying={setPlaying}
          setHistory={setHistory}
          setIndex={setIndex}
          setSpeed={setSpeed}
          playing={playing}
        />

        <Right state={state} size={size} />
      </div>
    </div>
  )
}

export default Home
