import React, { useState } from 'react'
import SearchBar from './SearchBar'
import axios from 'axios';
import SearchResult from './SearchResult';
import { search } from '../../utils';

const Search = () => {

  const [timer, setTimer] = useState(null);
  const [data, setData] = useState([]);

  const handleInput = (query) => {

    if(query !== ''){
      if (timer) clearTimeout(timer);

      const newTimer = setTimeout(() => {
        search(query, setData);
      }, 500);

      setTimer(newTimer);
    }
  }

  return (
    <div>
      <SearchBar handleInput={handleInput} />
      <SearchResult data={data} />
    </div>
  )
}

export default Search
