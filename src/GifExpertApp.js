import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp() {
  const [categories, setCategories] = useState(['One Punch']);

  const handleAdd = () => {
    console.log('click');
    setCategories([...categories, 'HunterXHunter']);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <div>
        <AddCategory setCategories={setCategories} />

        <hr />

        <ol>
          {categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))}
        </ol>
      </div>
    </>
  );
}

export default GifExpertApp;
