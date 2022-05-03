import { useState } from "react";
import Hash from "./Hash";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <>
      <input
        type="text"
        value={text}
        placeholder="password"
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        handleClick={async () => {
          try {
            setLoading(true);
            setResult(await Hash(text));
            setLoading(false);
          } catch (error) {
            setLoading(false);
          }
        }}
        text="Hash"
      />
      {loading ? <h1>loading...</h1> : <h1>{result}</h1>}
    </>
  );
};

export default App;
