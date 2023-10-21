'use client'
import React, { useState, useEffect } from 'react'
import './page.css'
import axios from 'axios'

export default function Home() {
  const [vocab, setVocab] = useState('Random Word Review')
  const [buttonText, setButtonText] = useState('Start')
  const [count, setCount] = useState(0)

  async function start() {
    try {
      const response = await axios.get("/api/user/get")
      setVocab(response.data.vocab)
      console.log(response.data.vocab)
      setButtonText('Next')
      console.log(response.data.message)
    } catch (err) {
      console.log(err.message)
    }
  }


  useEffect(() => {
    setCount((prev)=>prev+1)
  }, [vocab])



  return (
    <main className='main_section'>
      <div className='vocab_container'>
        {vocab.toLowerCase()}
      </div>
      {buttonText !== 'Start' && <h3 className='vocab_count'>{count-1}</h3>}
      {/* <h3 className='vocab_count'>{buttonText !== 'Start' && count}</h3> */}
      <button className='submit_button' onClick={() => {
        start()
      }}>
        {buttonText}
      </button>
    </main>
  )
}