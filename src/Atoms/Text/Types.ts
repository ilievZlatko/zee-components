import * as React from 'react'

export interface Props {
  type?: 'text'|'password'|'email'|'tel'|'search';
  label?: string;
  id: string;
  name?: string;
  required?: boolean;
  size?: number|undefined;
  placeholder?: string;
  maxLength?: number|undefined;
  minLength?: number|undefined;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
