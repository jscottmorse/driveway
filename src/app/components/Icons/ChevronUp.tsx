import React from 'react';

import { Icon, IconProps } from '@/app/components/Icons/Icon';
import { DrivewayColor } from '@/app/styles/colors';

export default function ChevronUp({ className, color = DrivewayColor.blue }: IconProps) {

  return (
    <Icon className={className} color={color} viewBox="0 0 16 9">
      <path
        d="M7.19188 0.322183C7.63819 -0.107394 8.36181 -0.107394 8.80812 0.322183L15.6653 6.92218C16.1116 7.35176 16.1116 8.04824 15.6653 8.47782C15.219 8.90739 14.4953 8.90739 14.049 8.47782L8 2.65563L1.95098 8.47782C1.50467 8.90739 0.781049 8.90739 0.334735 8.47782C-0.111578 8.04824 -0.111578 7.35176 0.334735 6.92218L7.19188 0.322183Z"/>
    </Icon>
  );
}
