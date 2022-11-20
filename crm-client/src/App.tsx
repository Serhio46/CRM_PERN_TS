import React, { useState } from 'react';
import './sass/src/global.scss';
import Button from './components/atoms/Button/Button';
import Popup from './components/Popup/Popup';
import TextInput from './components/atoms/TextInput.tsx/TextInput';

function App() {
   const [isOpens, setIsOpen] = useState(false);
   return (
      <div className="App">
         Hi? im here
         <Button onClick={() => setIsOpen(true)} />
         <Popup
            contentClassName="ds-width-half"
            closeHandler={() => setIsOpen(false)}
            isOpen={isOpens}
            headerText={'Login'}
         >
            <TextInput />
         </Popup>
      </div>
   );
}

export default App;
