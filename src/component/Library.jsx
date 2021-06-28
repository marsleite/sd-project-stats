import React from 'react';
import SearchBar from './SearchBar';
import HeaderNav from './HeaderNav';

export default function Library() {
  return (
    <div>
      <header>
        <HeaderNav />
      </header>
      <SearchBar />
    </div>
  )
}