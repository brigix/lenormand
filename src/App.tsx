import React from 'react';
import './App.css';
import combinations from './assets/lenormand_combinations.json'
import LenormandCombinations from './components/LenormandCombinations';
import Wrapper from './helpers/Wrapper';

const App = () => {
  console.log('app:', combinations)
  return (
    <Wrapper>
     <LenormandCombinations />
    </Wrapper>
  );
}

export default App;
