export interface TextInputTypes extends React.ComponentPropsWithoutRef<'input'> {
   isReadonly?: boolean;
   renderContent?: () => JSX.Element;
   state?: 'default' | 'error' | 'valid';
   inputRef?: React.RefObject<HTMLInputElement>;
   wrapperProps?: Record<string, unknown>;
   contentClassName?: string;
}
