import React, { FC, forwardRef } from 'react';
import { ButtonTypes } from './ButtonTypes';
import classnames from 'classnames';

import styles from './Button.module.scss';

const Button: FC<ButtonTypes> = forwardRef(({ value, onClick, className }, ref): JSX.Element => {
   return (
      <button className={classnames(styles.button, className)} onClick={onClick}>
         {value}
      </button>
   );
});

export default Button;
