import { useWords } from "../component/useWords";
import '../pages/Styles.css';
import '../pages/Respse.css';

export function Welcome() {
    const { def, handleChange, updatedWord, handleUpdate, getDef } = useWords();

    return (
        <div className="container">

            <div className="container-head">
                <div className="welcome">
                    <p className="text-sm">Welcome to</p>
                    <p className="text-lg">Cuddwords</p>
                </div>

                <div className="enter-word">
                    <input placeholder="Enter a word . ."
                        onChange={handleChange}
                        onKeyDown={handleUpdate}
                    />
                    <button onClick={() => getDef("")}>Okay, go!</button>
                </div>
            </div>

            <div className="container-body">
                <p className="text-md"> {updatedWord}</p>
                <div className="def-opt">
                    <button onClick={() => getDef("")}>definition</button>
                    <button onClick={() => getDef("synonyms")}>synonyms</button>
                    <button onClick={() => getDef("antonyms")}>antonyms</button>
                    <button onClick={() => getDef("examples")}>examples</button>
                </div>
                <div className="def-des">
                    {def.map((deff, key) => (
                        <div className="def-li">
                            <li>{deff}</li>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}