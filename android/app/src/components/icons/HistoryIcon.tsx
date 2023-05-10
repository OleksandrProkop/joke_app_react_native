import React from 'react';
import {Svg, G, Path, Defs, ClipPath} from 'react-native-svg';

type Props = {
  isActive?: boolean;
};

export const HistoryIcon: React.FC<Props> = ({isActive = false}) => {
  return (
    <Svg width={28} height={28} fill="none">
      <G clipPath="url(#a)">
        <Path
          stroke={isActive ? '#9763FF' : '#C1C3C6'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 9v5h4m7 0c0 6.075-4.925 11-11 11S3 20.075 3 14 7.925 3 14 3s11 4.925 11 11Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h28v28H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
