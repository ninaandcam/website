import React from 'react'
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function LeftMeeple(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M11 5V6C11 6 9 6.5 8 7C7 7.5 4 9 4 11C4 12 5 12.5 6 12.5H7C9 12.5 8 14 8 14L6 18C4 22 5 22 6 22H11C12 22 12 21 13 19C14 17 14 17 15 19C16 21 16 22 17 22H24C22.42 19.8933 18 16.5425 18 14C18 10.5 22 10 24 12.5V11C24 9 21 7.5 20 7C19 6.5 17 6 17 6V5C17 5 17 2 14 2C11 2 11 5 11 5Z" />
    </SvgIcon>
  );
}
