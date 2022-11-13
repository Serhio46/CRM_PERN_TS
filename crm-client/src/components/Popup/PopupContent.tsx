import React, { FC, ReactNode } from 'react';
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
   return (
      <div
         className={classnames(styles.popupContent, contentClassName)}
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
