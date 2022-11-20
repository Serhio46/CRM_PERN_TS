import { ReactNode } from 'react';

export default interface PopupTypes {
   headerText?: string;
   isLoading?: string;
   children: ReactNode;
   isOpen: boolean;
   closeHandler: () => void;
   contentClassName?: string;
}
