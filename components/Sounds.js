import { Audio } from 'expo-av';

function loadSound(file){
  const soundObject = new Audio.sound();
  soundObject.loadAsync(file);
  return  soundObject;
}

let sounds =  {
  bat: loadSound('../assets/sound/bat.wav');
  file: loadSound('../assets/sound/fire.wav');
  bang: loadSound('../assets/sound/bang.wav');
  door: loadSound('../assets/sound/door_open.wav');
}

export default sounds;