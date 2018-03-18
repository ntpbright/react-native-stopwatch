import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import moment from 'moment'

const DATA = {
  timer: 1234567,
  labs: [12345, 2345, 34567, 98765],
}

function Timer({ interval }){
  const duration = moment.duration(interval)
  return (
    <Text style={styles.timer}>
      {duration.minutes()}:{duration.seconds()},{duration.milliseconds()}
    </Text>
  )
}
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer interval={DATA.timer}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    paddingTop: 130,
  },
  timer: {
    color: '#FFFFFF',
    fontSize: 76,
    fontWeight: '200',
  }
})
