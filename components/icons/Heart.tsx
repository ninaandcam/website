import React from 'react'
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function Heart(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M6 14C6 16.5 10 20 12 22C14 20 18 16.5 18 14C18 10.5 14 10 12 12.5C10 10 6 10.5 6 14Z" />
    </SvgIcon>
  );
}