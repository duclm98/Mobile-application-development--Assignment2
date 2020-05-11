import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [index, setIndex] = useState(0);
  const [colors, setColors] = useState(['white']);
  const [color, setColor] = useState('white');

  const onPressRed = () => {
    setColor(colors.push('red'));
    setIndex(index + 1);
    console.log(index);
    setColor('red');
  }

  const onPressGreen = () => {
    setColor(colors.push('green'));
    setIndex(index + 1);
    console.log(index);
    setColor('green');
  }

  const onPressBlue = () => {
    setColor(colors.push('blue'));
    setIndex(index + 1);
    console.log(index);
    setColor('blue');
  }

  const onPressUndo = () => {
    console.log(colors);
    setIndex(index - 2);
    console.log(index);
    setColor(colors[index]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={onPressRed}>
          <Text style={{...styles.text, backgroundColor: 'red'}}></Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressGreen}>
          <Text style={{...styles.text, backgroundColor: 'green'}}></Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressBlue}>
          <Text style={{...styles.text, backgroundColor: 'blue'}}></Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressUndo}>
          <Text style={{...styles.text, backgroundColor: 'white', borderWidth: 2, borderColor: 'black'}}>Undo</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{...styles.text, backgroundColor: 'white', borderWidth: 2, borderColor: 'black', }}>Redo</Text>
        </TouchableOpacity>
      </View>
      <View style={{...styles.square, width: 120, height: 120, backgroundColor: `${color}`}}></View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: 'skyblue',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  buttons: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: "flex-start",
  },
  text: {
    paddingVertical: 10,
    paddingHorizontal: 3,
    margin: 10,
    width: 40,
    height: 40,
  },
  square: {
    display: 'flex',
    alignSelf: 'center',
  }
});
