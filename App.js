import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import uuid from 'react-uuid'

export default function App() {
  const id = uuid();

  // Xác định đang ở màu nào
  const [index, setIndex] = useState(id);
  // Xét màu mặc định
  const [color, setColor] = useState('white');
  // Object chứa data theo định dạng: id, color, prev(object chứa màu trước đó), next(object chứa màu sau đó)
  const [objColor, setObjColor] = useState({
    id: id,
    color: 'white',
  })

  const onPressRed = () => {
    let objCol = objColor;

    // Tìm màu hiện tại
    while (objCol.next && objCol.id !== index) {
      objCol = objCol.next;
    }

    // Gán màu kế tiếp
    const id = uuid();
    objCol.next = {
      id,
      prev: index,
      color: 'red'
    }

    setIndex(id);
    setColor('red');
  }

  const onPressGreen = () => {
    let objCol = objColor;
    while (objCol.next && objCol.id !== index) {
      objCol = objCol.next;
    }

    const id = uuid();
    objCol.next = {
      id,
      prev: index,
      color: 'green'
    }

    setIndex(id);
    setColor('green');
  }

  const onPressBlue = () => {
    let objCol = objColor;
    while (objCol.next && objCol.id !== index) {
      objCol = objCol.next;
    }

    const id = uuid();
    objCol.next = {
      id,
      prev: index,
      color: 'blue'
    }

    setIndex(id);
    setColor('blue');
  }

  const onPressUndo = () => {
    let currentObj = {
      ...objColor
    };

    // Tìm màu hiện tại
    while (currentObj.next && currentObj.id !== index) {
      currentObj = currentObj.next;
    }

    //Tìm màu trước đó
    if (currentObj.prev) {
      let prevObj = {
        ...objColor
      };
      while (prevObj.next && prevObj.id !== currentObj.prev) {
        prevObj = prevObj.next;
      }
      setIndex(prevObj.id);
      setColor(prevObj.color);
    }
  }

  const onPressRedo = () => {
    let currentObj = {
      ...objColor
    };

    // Tìm màu hiện tại
    while (currentObj.next && currentObj.id !== index) {
      currentObj = currentObj.next;
    }

    // Tìm và gán màu phía sau
    if (currentObj.next) {
      let nextObj = currentObj.next;
      setIndex(nextObj.id);
      setColor(nextObj.color);
    }
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

        <TouchableOpacity onPress={onPressRedo}>
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
    flexDirection: 'row',
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
