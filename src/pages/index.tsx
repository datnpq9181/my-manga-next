import React, { useState } from 'react';
import Navbar from './navbar';
import Manga from './manga';

export default function Home() {
  

  return (
    <div>
      <div className="container mx-auto px-4 dark">
        <Navbar/>
        <Manga />
      </div>
    </div>
  );
}