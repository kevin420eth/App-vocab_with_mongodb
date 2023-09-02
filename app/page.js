'use client'
import React, { useState } from 'react'
import './page.css'
import axios from 'axios'

export default function Home() {
  const [vocab, setVocab] = useState('')

  async function submit() {
    console.log(vocab)

    const vocabData = { vocabulary: vocab }

    try {
      const response = await axios.post("/api/user/add", vocabData)
      console.log(response.data.message)
      setVocab("")
    } catch (err) {
      console.log(err.message)
      console.log(response.data.message)
    }
  }

  function handleInputChange(e) {
    setVocab(e.target.value)
  }

  return (
    <main className='main_section'>
      <div className='vocab_container'>
        {vocab.length > 0 ? vocab : 'Enter a word'}
      </div>
      <input
        className='vocab_input'
        type="text"
        placeholder='Enter a vocabulary'
        value={vocab}
        onChange={handleInputChange}
        required
      />
      <button className='submit_button' onClick={submit}>
        Submit
      </button>
    </main>
  )
}
