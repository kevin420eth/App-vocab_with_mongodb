'use client'
import React, { useState } from 'react'
import './page.css'
import axios from 'axios'

export default function Home() {
  const [vocab, setVocab] = useState('Random Word Review')

  async function start() {
    try {
      const response = await axios.get("/api/user/get")
      setVocab(response.data.vocab)
      console.log(response.data.message)
    }catch(err){
      console.log(err.message)
    }

  }

  return (
    <main className='main_section'>
      <div className='vocab_container'>
        {vocab}
      </div>
      <button className='submit_button' onClick={start}>
        Start
      </button>
    </main>
  )
}