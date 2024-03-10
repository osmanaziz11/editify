/* eslint-disable prettier/prettier */
import React from 'react';
import {Svg, Path, G} from 'react-native-svg';

export const StarFour = ({size}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256">
      <Path
        fill="#735AF4"
        d="M240 128a15.79 15.79 0 0 1-10.5 15l-63.44 23.07L143 229.5a16 16 0 0 1-30 0L89.93 166L26.5 143a16 16 0 0 1 0-30L90 89.93l23-63.43a16 16 0 0 1 30 0L166.07 90l63.43 23a15.79 15.79 0 0 1 10.5 15"
      />
    </Svg>
  );
};

export const Home = ({size, color = '#735AF4'}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48">
      <Path
        fill={color}
        d="M41.708 25.794L24.058 8.086L6.294 25.792a1 1 0 1 0 1.412 1.416L11 23.925V39a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V23.904l3.292 3.302a1 1 0 1 0 1.416-1.412"
      />
    </Svg>
  );
};

export const Search = ({size, color = '#735AF4'}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32">
      <Path
        fill={color}
        d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9"
      />
    </Svg>
  );
};

export const Box = ({size, color = '#735AF4'}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 15 15">
      <Path
        fill={color}
        d="M7.303.04a.5.5 0 0 1 .394 0L14.5 2.956l-7 3l-7-3zM0 3.83v7.67c0 .2.12.38.303.46L7 14.83v-8zm8 3l7-3v7.67a.5.5 0 0 1-.303.46L8 14.83z"
      />
    </Svg>
  );
};

export const Profile = ({size, color = '#735AF4'}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05c1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"
      />
    </Svg>
  );
};

export const Drawer = ({size, color = '#735AF4'}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24">
      <Path
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 8h12M6 12h12M6 16h12"
      />
    </Svg>
  );
};

export const Arrow = ({size, color = '#735AF4'}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24">
      <G fill="none">
        <Path
          fill={color}
          d="M12.75 4a.75.75 0 0 0-1.5 0zm-1.5 0v16h1.5V4z"
          opacity="0.5"
        />
        <Path
          stroke="#735AF4"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="m18 14l-6 6l-6-6"
        />
      </G>
    </Svg>
  );
};

export const Bell = ({size, color = '#735AF4'}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16">
      <G fill={color}>
        <Path
          fill-rule="evenodd"
          d="M12.994 7.875A4.008 4.008 0 0 1 12 8h-.01v.217c0 .909.143 1.818.442 2.691l.371 1.113h-9.63v-.012l.37-1.113a8.633 8.633 0 0 0 .443-2.691V6.004c0-.563.12-1.113.347-1.616c.227-.514.55-.969.969-1.34c.419-.382.91-.67 1.436-.837c.538-.18 1.1-.24 1.65-.18l.12.018a4 4 0 0 1 .673-.887a5.15 5.15 0 0 0-.697-.135c-.694-.072-1.4 0-2.07.227c-.67.215-1.28.574-1.794 1.053a4.923 4.923 0 0 0-1.208 1.675a5.067 5.067 0 0 0-.431 2.022v2.2a7.61 7.61 0 0 1-.383 2.37L2 12.343l.479.658h3.505c0 .526.215 1.04.586 1.412c.37.37.885.586 1.412.586c.526 0 1.04-.215 1.411-.586s.587-.886.587-1.412h3.505l.478-.658l-.586-1.77a7.63 7.63 0 0 1-.383-2.381zM7.982 14.02a.997.997 0 0 0 .706-.3a.939.939 0 0 0 .287-.705H6.977c0 .263.107.515.299.706a.999.999 0 0 0 .706.299"
          clip-rule="evenodd"
        />
        <Path d="M12 7a3 3 0 1 0 0-6a3 3 0 0 0 0 6" />
      </G>
    </Svg>
  );
};
