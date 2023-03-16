import React, { useState } from "react";
import emojiList from "./emoji";
import Cards from "./Components/Cards";
import Input from "./Components/Input";
import "./App.css";

export default function App() {
  const defaultList = emojiList.map((items) => {
    return items;
  });
  const [search, setSearch] = useState(defaultList);
  function emojiSearch(inputText) {
    console.log(inputText);
    const searchResults = emojiList.filter((result) => {
      const text = inputText.toString().toLowerCase();
      return result.type.includes(text);
    });
    setSearch(searchResults);
  }
  return (
    <div className="App">
      <div className="input-style">
        <Input onSearch={emojiSearch} />
      </div>
      <div className="body-style">
        {search.map((emoList) => (
          <Cards
            id={emoList.id}
            key={emoList.id}
            name={emoList.name}
            emoji={emoList.emoji}
            type={emoList.type}
          />
        ))}
      </div>
    </div>
  );
}
