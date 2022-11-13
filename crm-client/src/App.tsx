import React, { useState } from 'react';
import './sass/src/global.scss';
import Button from './components/Button/Button';
import Popup from './components/Popup/Popup';

function App() {
   const [isOpens, setIsOpen] = useState(false);
   return (
      <div className="App">
         Hi? im here
         <Button className="ds-padding-bottom-lg" onClick={() => setIsOpen(true)} />
         <Popup contentClassName="ds-width-half" closeHandler={() => setIsOpen(false)} isOpen={isOpens}>
            {'asdas1111dasd'}
         </Popup>
      </div>
   );
}

export default App;
