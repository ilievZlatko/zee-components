import { Props as IOption } from './Option/Types'

export interface Props {
  options: IOption[];
  label: string;
  onChange: (option: IOption) => void;
}

export interface State {
  isOpen: boolean;
  selectedOption: null|IOption;
}
