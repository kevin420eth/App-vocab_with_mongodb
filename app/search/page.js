'use client'
import React, { useState } from 'react'
import './page.css'
import axios from 'axios'

export default function Home() {
  const [vocab, setVocab] = useState('')

  async function search() {
    console.log(vocab)

    const vocabData = { vocabulary: vocab }

    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${vocab}`)
      const vocabObject = response.data[0]
      word = vocabObject.word
      console.log(word)
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
        {vocab.length > 0 ? vocab : 'Search a word'}
      </div>
      <input
        className='vocab_input'
        type="text"
        placeholder='Enter a word'
        value={vocab}
        onChange={handleInputChange}
        required
      />
      <button className='submit_button' onClick={search}>
        Search
      </button>
    </main>
  )
}
