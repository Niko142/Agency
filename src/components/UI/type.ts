export interface BlockTitleProps {
  title: string;
  description: string;
  descriptionSize?: string;
}

export interface BurgerMenuButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

interface InputProps {
  label?: string;
  name: string;
  value: string;
}

export interface InputTextProps extends InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export interface TextareaProps extends InputProps {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

export interface InputRadioProps extends InputProps {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
