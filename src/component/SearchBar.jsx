import React, { useState } from 'react';

export default function SearchBar() {
  const [userChar, setUserChar] = useState('');
  const [selectedConsole, setConsole] = useState('1');

  return (
    <div>
        <form>
          <label htmlFor="ctl">
          <label>
              <select
                name="selectedConsole"
                onChange={ event => setConsole(event.target.value) }
                value={ selectedConsole }
                className="labelbusca"
              >
                <option value="1">XBOX</option>
                <option value="2">PSN</option>
                <option value="3">Steam</option>
              </select>
            </label>
            <input 
              name="searchText"
              onChange={ event => setUserChar(event.target.value) }
              type="text"
              value={ userChar }
              placeholder="Guardian"
              className="inputbusca"
            />
          </label>
        </form>
      </div>
  )
}