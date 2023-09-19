"use client"
import { useState } from 'react'
import styles from './styles.module.css'
import axios from 'axios'

export default function Word({ params }) {
    const [gptAnswer, setGptAnswer] = useState([])

    const gpt = async (word) => {
        console.log(word)
        const data = {
            question: `What does the vocabulary "${word}" mean?  Return me a json file in this format
            {
                "word": "apple",
                "meanings": [
                  {
                    "part_of_speech": "noun",
                    "meaning": "A round or oval fruit with red, yellow, or green skin and crisp white flesh, often eaten fresh or used in various culinary dishes and beverages.",
                    "example":
                      "She picked a ripe apple from the tree."
                  },
                  {
                    "part_of_speech": "verb",
                    "meaning": "To throw or propel something in an arc, typically referring to a projectile or object in a game or sport.",
                    "example": 
                      "He apple'd the basketball into the hoop from half-court."
                  }
                ]
              }
              `
        }

        try {
            const response = await axios.post("/api/gpt", data)
            const answer = JSON.parse(response.data.answer)
            console.log(answer)
            const wordMeanings = answer.meanings
            console.log(response.data.message)
            console.log(response.data.answer)
            setGptAnswer(wordMeanings)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <main className={styles.main_section}>
            <div className={styles.vocab_container}>
                <div className={styles.word}>{params.word}</div>
                <hr className={styles.hr_line} />
                {/* <div className={styles.meaning}>1. The round fruit of a tree of the rose family, which typically has thin green or red skin and crisp flesh.</div>
                <div className={styles.example}>- I am eating a juicy red apple.</div> */}
                <div>
                    {
                        gptAnswer.map((item, key) => {
                            return (
                                <div key={key}>
                                    <div className={styles.meaning}>{key+1}. {item.meaning}</div>
                                    <div className={styles.example}>- {item.example}</div>
                                </div>

                            )
                        })
                    }
                </div>


            </div>
            <button className={styles.generate_button} onClick={() => gpt(params.word)}>
                Generate
            </button>

        </main>
    )
}