import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';

const reactotron = Reactotron.configure({
  host: '192.168.1.7',
  name: 'News',
})
  .useReactNative()
  .setAsyncStorageHandler(AsyncStorage)
  /* .use(reactotronRedux()) */
  .connect();

export default reactotron;
