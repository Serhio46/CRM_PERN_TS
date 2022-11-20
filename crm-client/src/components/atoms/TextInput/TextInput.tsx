import React, { forwardRef, useState, useCallback } from 'react';
import classnames from 'classnames';

import { TextInputTypes } from './TextInput.types';
import styles from './TextInput.module.scss';

const TextInput = forwardRef<HTMLInputElement, TextInputTypes>(
   (
      { type, placeholder, state, isReadonly, disabled, className, inputRef, onFocus, onBlur },
      ref
   ) => {
      const [focused, setFocus] = useState(false);
      const handleFocus = useCallback(
         (event: React.FocusEvent<HTMLInputElement, Element>) => {
            setFocus(true);
            onFocus?.(event);
         },
         [onFocus]
      );
      const handleBlur = useCallback(
         (event: React.FocusEvent<HTMLInputElement, Element>) => {
            setFocus(false);
            onBlur?.(event);
         },
         [onBlur]
      );
      return (
         <div
            ref={ref}
            className={classnames(styles.wrapper, className, {
               [styles['wrapper--error']]: state === 'error',
               [styles['wrapper--valid']]: state === 'valid',
               [styles['wrapper--disabled']]: isReadonly || disabled,
               [styles['wrapper--focused']]: focused,
            })}
         >
            <input
               ref={inputRef}
               className={classnames(styles.input)}
               type={type}
               placeholder={placeholder}
               onFocus={handleFocus}
               onBlur={handleBlur}
            />
         </div>
      );
   }
);

export default TextInput;
