'use client'
import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import './page.css'

export default function Home() {
  const [vocab, setVocab] = useState('')

  async function search() {

    const vocabData = { vocabulary: vocab }

    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${vocab}`)
      const vocabObject = response.data[0]
      const word = vocabObject.word
      const partofspeech = vocabObject.meanings[0].partOfSpeech
      const definition = vocabObject.meanings[0].definitions[0].definition
      console.log(partofspeech)
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
        <Link href={`/search/${vocab}`}>Search</Link>
      </button>
    </main>
  )
}
