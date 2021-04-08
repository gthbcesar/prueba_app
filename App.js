import { StatusBar } from 'expo-status-bar';
import React, { useState, memo } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import logo from './assets/logo.png'

function Label({ title }) {
  console.log(`Rendered: ${title}`)
  return <Text>{title}</Text>
}

const LabelMemo = memo(Label)

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if(permissionResult.granted === false) {
      alert('Persmisson to access camera roll is required');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if(pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri })
    console.log(pickerResult);
  };

  let openShareDialogAsync = async () => {
    if(!(await Sharing.isAvailableAsync())){
      alert('Uh oh, sharing isnt avaible on your platform');
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  };


  if(selectedImage !== null){
    return(
      <View style={styles.container}>
        <Image
          source={{ uri:selectedImage.localUri }}
          style={styles.thumbnail}
        />
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.btn_share}>
          <Text style={styles.text_share}>Shre this photo</Text>
        </TouchableOpacity>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        style={{ fontSize: 42, color: 'steelblue' }}
        placeholder="Type here..."
        onChangeText={(text) => {
          setText(text)
        }}
      />
      <Text key="title" style={{ fontSize: 24 }}>
        {'\n'}You entered: {text}
      </Text>
      <Text style={styles.text_color}>Es primer texto de prueba, Hola mundo!</Text>
      <Text style={styles.text_color}>Mas y más texto por escribir</Text>
      <Image source={logo} style={styles.logo_style}/>
      <TouchableOpacity
        onPress={openImagePickerAsync}
        style={styles.touchable}
        activeOpacity={0.75} 
        underlayColor={"#f1f1f1"}
      >
        <Text style={styles.textTouchable}>Pick a photo</Text>
      </TouchableOpacity>
      <Button
        title="Press me"
        onPress={() => {
          alert('Pressed!')
        }}
      />
      <Text style={styles.text_color}>Hola qué onda Mike</Text>
      <>
      <Button
        title={`Pressed ${count} times`}
        onPress={() => {
          setCount(count + 1)
        }}
      />
      <LabelMemo title="Label with memo" />
      <Label title="Label" />
      </>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text_color:{
    color: '#000'
  },
  logo_style: {
    marginTop: 10,
    width: 305, 
    height: 180,
    marginBottom: 10
  },
  touchable: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  textTouchable: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "cover"
  },
  text_share: {
    fontSize: 20,
    color: '#fff',
  },
  btn_share: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  }
});
