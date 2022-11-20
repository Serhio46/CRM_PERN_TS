import React, { useState } from 'react';
import './sass/src/global.scss';
import Button from './components/atoms/Button/Button';
import LoginForm from './components/organisms/LoginForm';

function App() {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <div className="App">
         Hi? im here
         <Button onClick={() => setIsOpen(true)} value={'Log IN'} />
         <LoginForm isOpen={isOpen} closeHandler={() => setIsOpen(false)} />
      </div>
   );
}

export default App;
