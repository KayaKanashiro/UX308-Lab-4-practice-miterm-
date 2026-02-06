import {Hello} from './Hello.jsx';
import { SnowRemoval } from './SnowRemoval.jsx';
import {
  View,
} from 'react-native';
//component names always start with a capital
export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />
      <SnowRemoval cm={3} />
      <SnowRemoval cm={1.5} />
    </View>
  );
}

