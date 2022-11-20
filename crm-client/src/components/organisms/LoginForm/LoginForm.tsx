import React, { FC, useCallback } from 'react';

import Popup from '../../atoms/Popup/';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';

interface LoginForm {
   isOpen: boolean;
   closeHandler: (isOpen: boolean) => void;
}

const LoginForm: FC<LoginForm> = ({ isOpen, closeHandler }) => {
   const handleSubmit = useCallback(async (e: React.FormEvent) => {
      e.preventDefault();
      //validate
      //send to server
      //get res
      //close popup if everything is fine
      console.log('Submit');
   }, []);

   return (
      <Popup
         contentClassName="ds-width-half ds-height-half"
         closeHandler={() => closeHandler(false)}
         isOpen={isOpen}
         headerText={'Login'}
      >
         <form onSubmit={handleSubmit}>
            <div className="ds-flex ds-flex-align-center ds-padding-top-xs ds-flex-direction-column">
               <TextInput />
               <TextInput />
               <Button type="submit" value={'Login'} />
               Forgot your password?
            </div>
         </form>
      </Popup>
   );
};

export default LoginForm;
