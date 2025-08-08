export interface BlockTitleProps {
  title: string;
  description: string;
  descriptionSize?: string;
}

export interface BurgerMenuButtonProps {
  onClick: () => void;
  isOpen: boolean;
}
