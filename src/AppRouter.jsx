import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Nav } from './components/Nav';

import { HomePage, Landing, PokemonPage, SearchPage } from './views';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Landing />} />
        <Route path='pokedex' element={<HomePage />} />
        <Route path='pokemon/:id' element={<PokemonPage />} />
        <Route path='search' element={<SearchPage />} />
      </Route>

      <Route path='*' element={<Navigate to='/'/>} />
    </Routes>
  )
}
