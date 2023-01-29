import axios from "axios";
import { useState } from "react";

/**
 * Word
 * - definition
 * - synonyms
 * - antonyms
 * - examples
 */

export function useWords() {
  const [word, setWord] = useState("");
  const [updatedWord, setUpdatedWord] = useState("");

  let genDef = [];
  const [def, setDef] = useState(genDef);

  const handleChange = (event) => {
    setWord(event.target.value);
  };

  const handleUpdate = (uevent) => {
    if (uevent.key === 'Enter') {
      setUpdatedWord(word);
      getDef("");
    }
  }

  const getDef = (opt) => {
    axios.request(
      {
        method: 'GET',
        url: `https://wordsapiv1.p.rapidapi.com/words/${word}/${opt}`,
        // baseURL: 'http://localhost:8000/words',
        // url: `${word}/${opt}`,
        headers: {
          'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
          'X-RapidAPI-Key': '31dadf50d4mshbf5f31120bce8e8p14f623jsn07a78d74c788'
        }
      }
    ).then(function (response) {
      // console.log(word);
      // console.log(response.data);

      const dataResults = response.data.results;
      // console.log(response.data.results.map(e => e));

      if (opt === "") {
        dataResults.map((e, key) => genDef.push(e.partOfSpeech + ' - ' + e.definition));
        setDef(genDef);
      } else {
        setDef(response.data[opt]);
      }
      setUpdatedWord(word);

    }).catch(function (error) {
      console.error(error);
    })
  };

  return { def, handleChange, handleUpdate, getDef };
};