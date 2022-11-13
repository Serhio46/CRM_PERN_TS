import React, { FC } from 'react';
import { ButtonTypes } from './ButtonTypes';
import classnames from 'classnames';

import styles from './Button.module.scss';

const Button: FC<ButtonTypes> = ({ onClick, className }): JSX.Element => {
   return (
      <button className={classnames(styles.button, className)} onClick={onClick}>
         Tisni
      </button>
   );
};

export default Button;
