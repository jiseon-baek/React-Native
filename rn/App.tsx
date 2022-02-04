import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Person from './src/screens/Person'
import * as D from './src/data'

const person = D.createRandomPerson()

export default function App() {
  return (
    <SafeAreaView>
      <Person person={person} />
    </SafeAreaView>
  )
}