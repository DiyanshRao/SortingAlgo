'use client'
import React, { useState, useEffect, useRef } from 'react'

import { MenuBar } from '@/components/menu-bar'
import { Visuals } from '@/components/visuals'
import { Details } from '@/components/details'
import { Footer } from '@/components/footer'

interface Element {
  value: number
  compare: boolean
  sorted: boolean
  color: string
}

function generator(min: number, max: number, size: number): number[] {
  if (min > max || size <= 0) {
    console.error('Invalid input parameters')
    return []
  }

  const randomArray: number[] = []
  for (let i = 0; i < size; i++) {
    const randomNumber: number =
      Math.floor(Math.random() * (max - min + 1)) + min
    randomArray.push(randomNumber)
  }

  return randomArray
}

function initialState(size = 20): Element[] {
  const arr: number[] = generator(10, 100, size)
  return arr.map((ele) => ({
    value: ele,
    compare: false,
    sorted: false,
    color: '#293451',
  }))
}

function Home(): JSX.Element {
  const [size, setSize] = useState<number>(20)
  const [state, setState] = useState<Element[]>(initialState(size))
  const [speed, setSpeed] = useState<number>(300)
  const [history, setHistory] = useState<Element[][]>([])
  const [playing, setPlaying] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(0)
  const timeoutRef = useRef<number | undefined>()

  useEffect(() => {
    setPlaying(false)
    setIndex(0)
    clearTimeout(timeoutRef.current)
    setHistory([])
    setState(initialState(size))
  }, [size])

  useEffect(() => {
    if (index > 0) setState(history[index])
  }, [index, history])

  useEffect(() => {
    if (playing && index < history.length - 1) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = window.setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1)
      }, speed)
    } else {
      if (index >= history.length) setPlaying(false)
    }
  }, [index, playing, history, speed])

  return (
    <div className='flex flex-col h-screen bg-white'>
      <div className='flex flex-row'>
        <MenuBar
          size={size}
          setSize={setSize}
          state={state}
          setPlaying={setPlaying}
          setHistory={setHistory}
          setIndex={setIndex}
          setSpeed={setSpeed}
          playing={playing}
        />
        <Details />
      </div>
      <div className='bg-white h-full flex flex-col justify-between'>
        <Visuals state={state} size={size} />
        <Footer />
      </div>
    </div>
  )
}

export default Home
