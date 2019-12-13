export interface Props {
  children?: React.ReactNode | string;
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  toggle?: boolean;
  value?: string|boolean;
  onClick: (event: string|boolean|undefined) => void;
}

export interface State {
  isSelected: boolean;
}
