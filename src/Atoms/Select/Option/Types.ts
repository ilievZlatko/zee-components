export interface Props {
  label: string|number;
  selected?: boolean;
  value: number|string|boolean|undefined|null;
  onSelect?: (value: number|string|boolean|undefined|null) => void;
}
