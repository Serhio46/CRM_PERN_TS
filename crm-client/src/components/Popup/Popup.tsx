import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';

import styles from './Popup.module.scss';
import PopupTypes from './PopupTypes';
import PopupContent from './PopupContent';

const PORTAL_CLASS_NAME = 'popup-modal';

const Popup: FC<PopupTypes> = ({ children, isOpen, closeHandler, ...otherProps }) => {
   //const [isActive, setIsActive] = useState<boolean>(false);
   const element = useMemo(() => {
      const el = document.createElement('div');
      el.classList.add(PORTAL_CLASS_NAME);
      return el;
   }, []);

   useEffect(() => {
      const rootElem = document.getElementById('popup');
      rootElem!.appendChild(element);
      return () => {
         rootElem!.removeChild(element);
      };
   }, []);

   const renderChildren = () => {
      return (
         <div
            className={classnames(styles.popupBackground, {
               [styles['is-active']]: isOpen,
            })}
            onClick={closeHandler}
         >
            <PopupContent {...otherProps} onCloseModal={closeHandler} headerText="Login">
               {children}
            </PopupContent>
         </div>
      );
   };

   return isOpen ? createPortal(renderChildren(), element) : null;
};

export default Popup;
