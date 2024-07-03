import React from 'react';

import { Icon, IconProps } from '@/app/components/Icons/Icon';
import { DrivewayColor } from '@/app/styles/colors';

export default function ChevronDown({ className, color = DrivewayColor.blue }: IconProps) {

  return (
    <Icon className={className} color={color} viewBox="0 0 16 9">
      <path
        d="M8.80812 8.67782C8.36181 9.10739 7.63819 9.10739 7.19188 8.67782L0.334735 2.07782C-0.11158 1.64824 -0.11158 0.951759 0.334735 0.522182C0.781048 0.0926056 1.50467 0.0926056 1.95098 0.522182L8 6.34437L14.049 0.522182C14.4953 0.0926056 15.219 0.0926056 15.6653 0.522182C16.1116 0.951759 16.1116 1.64824 15.6653 2.07782L8.80812 8.67782Z"/>
    </Icon>
  );
}
