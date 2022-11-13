import { ReactNode } from 'react';

export default interface PopupTypes {
   isLoading?: string;
   children: ReactNode;
   isOpen: boolean;
   closeHandler: () => void;
   contentClassName?: string;
}
