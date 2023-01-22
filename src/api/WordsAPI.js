import React from "react";
import axios from "axios";
import { useState } from "react";

/**
 * Word
 * - pronunciation
 * - definition
 * - synonyms
 * - antonyms
 * - examples
 */

export function WordsAPI() {
  const [word, setWord] = useState("");
  // const [genExcuse, setGenExcuse] = useState(null);
  let genDef = [];
  const [def, setDef] = useState(genDef);

  const fetchExcuse = (excuse) => {
    axios.request(
      {
        method: 'GET',
        url: `https://wordsapiv1.p.rapidapi.com/words/${word}/${excuse}`,
        headers: {
          'X-RapidAPI-Key': '31dadf50d4mshbf5f31120bce8e8p14f623jsn07a78d74c788',
          'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
      }
    ).then(function (response) {
      console.log(response.data[excuse]);
      // setGenExcuse(response.data[excuse]);
      // console.log(`gen -->> ${gen}`);
      console.log(word);
      // console.log(genExcuse);
      // for (let i=0; i<genExcuse.length; i++) {
      //     console.log(genExcuse[i].definition);
      //     console.log(genExcuse[i].partOfSpeech);
      //     // genDef = genExcuse[i].definition;
      // }
      response.data[excuse].forEach(element => {
        console.log(`forEach -->> ${element.definition}`);
        genDef.push(element.definition);
      });
      setDef(genDef);
    }).catch(function (error) {
      console.error(error);
    })
  };
  // console.log(`def ++ ${def}`);

  return (
    <div>
      <h1>Word api</h1>
      <input placeholder="enter word"
        onChange={(event) => {
          setWord(event.target.value);
        }} />
      {/* {word} */}

      {/* <button onClick={() => fetchExcuse("pronunciation")}>pronunciation</button> */}
      <button onClick={() => fetchExcuse("definitions")}>definition</button>
      {/* <button onClick={() => fetchExcuse("synonyms")}>synonyms</button> */}
      {/* <button onClick={() => fetchExcuse("antonyms")}>antonyms</button> */}
      {/* <button onClick={() => fetchExcuse("examples")}>examples</button> */}

      <h2>definition: </h2>
      {def.map(deff => (
        <li>{deff}</li>

      ))}
    </div>
  );
};