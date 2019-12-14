import * as React from 'react'

export interface Props {
  success?: boolean;
  info?: boolean;
  danger?: boolean;
  cancelled?: boolean;
  accepted?: boolean;
  children: React.ReactNode;
  rounded?: boolean;
}
