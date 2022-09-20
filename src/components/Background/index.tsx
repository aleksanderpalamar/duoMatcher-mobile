import React from 'react';
import { ImageBackground } from 'react-native';

import BackgroundImg from '../../assets/background-galaxy.png';

interface Props {
  children: React.ReactNode;
}

import { styles } from './styles';

export function Background({ children }: Props) {
  return (
    <ImageBackground 
      style={styles.container}
      source={BackgroundImg}
      defaultSource={BackgroundImg}
    >
      {children}
    </ImageBackground>
  );
}