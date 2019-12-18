import { Props as IOption } from './Option/Types'

export interface Props {
  options: IOption[];
  label: string;
  value: string|number|null;
  onChange: (option: IOption) => void;
}

export interface State {
  isOpen: boolean;
  selectedOption: IOption|null;
}
