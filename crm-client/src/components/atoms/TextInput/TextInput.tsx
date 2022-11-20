import React, { FC, forwardRef } from 'react';
import classnames from 'classnames';

import { TextInputTypes } from './TextInput.types';
import styles from './TextInput.module.scss';

const TextInput = forwardRef<HTMLInputElement, TextInputTypes>(({}, ref) => {
   return (
      <div>
         <input className={classnames(styles.input)} type="text" placeholder="Insert you email" />
      </div>
   );
});

export default TextInput;
