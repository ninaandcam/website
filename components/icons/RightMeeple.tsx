import React from 'react'
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function RightMeeple(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M13 5V6C13 6 15 6.5 16 7C17 7.5 20 9 20 11C20 12 19 12.5 18 12.5H17C15 12.5 16 14 16 14L18 18C20 22 19 22 18 22H13C12 22 12 21 11 19C10 17 10 17 9 19C8 21 8 22 7 22H0C1.57999 19.8933 6 16.5425 6 14C6 10.5 2 10 0 12.5V11C0 9 3 7.5 4 7C5 6.5 7 6 7 6V5C7 5 7 2 10 2C13 2 13 5 13 5Z" />
    </SvgIcon>
  );
}