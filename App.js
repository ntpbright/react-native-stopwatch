import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import moment from 'moment'

const DATA = {
  timer: 1234567,
  labs: [12345, 2345, 34567, 98765],
}

function Timer({ interval }){
  const duration = moment.duration(interval)
  const centisecond = Math.floor(duration.milliseconds() / 10 )
  return (
    <Text style={styles.timer}>
      {duration.minutes()}:{duration.seconds()},{centisecond}
    </Text>
  )
}

function RoundButton( {title, color, backgroundColor}){
  return (
    <View style={[ styles.button, { backgroundColor: backgroundColor }]}>
      <View style={ styles.buttonBorder }>
        <Text style={[ styles.buttonTitle, {color}]}>{title}</Text>
      </View>
    </View>
  )
}

function ButtonsRow({ children }){
  return (
    <View style={styles.buttonsRow}>{children}</View>
  )
}

function Lap({ number, interval}){
  return (
    <View>
      <Text>Lap {number}</Text>
      <Text>{interval}</Text>
    </View>
  )
}

function lapsTable({ laps }) {
  return (
    <ScrollView>
      {laps.map((lap, index) => (
        <Lap number={index} interval={lap} />
      ))}
    </ScrollView>
  )
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer interval={DATA.timer}/>
        <ButtonsRow>
          <RoundButton title='Reset' color= '#FFFFFF' backgroundColor= '#3D3D3D' />
          <RoundButton title='Start' color= '#50D167' backgroundColor= '#1B361F' />
        </ButtonsRow>
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
    paddingHorizontal: 20,
  },
  timer: {
    color: '#FFFFFF',
    fontSize: 76,
    fontWeight: '200',
  },
  button: {
   width: 80,
   height: 80,
   borderRadius: 40,
   justifyContent: 'center',
   alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 18,
  },
  buttonBorder: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 80,
  }
})
