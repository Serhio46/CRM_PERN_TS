import React, { FC, ReactNode, useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import classnames from 'classnames';

import styles from './Popup.module.scss';
interface ContentProps {
   children: ReactNode;
   headerText?: string;
   onCloseModal: () => void;
   contentClassName?: string;
}

const PopupContent: FC<ContentProps> = ({ children, headerText, onCloseModal, contentClassName }) => {
   const [isActive, setIaActive] = useState<boolean>(false);

   useEffect(() => {
      setTimeout(() => setIaActive(true), 0);
   }, []);

   return (
      <div
         className={classnames(styles.popupContent, contentClassName, {
            [styles['is-active']]: isActive,
         })}
         onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
         <div className={styles.popupHeader}>
            {headerText}
            <FaTimes onClick={onCloseModal} />
         </div>
         {children}
      </div>
   );
};

export default PopupContent;
