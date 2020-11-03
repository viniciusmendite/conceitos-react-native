import React, {useEffect} from 'react';
import {View} from 'react-native';

import api from './services/api';

export default function App() {

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data)
    })
  }, [])
  return(
    <View/>
  );
}