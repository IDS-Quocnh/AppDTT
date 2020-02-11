import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import MenuButton from './components/MenuButton';
import { styles } from '../Style';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.Layout}>
        <SafeAreaView>
          <Text>Feed Screens</Text>
          <MenuButton navigation={this.props.navigation}> </MenuButton>
        </SafeAreaView >
      </View>
    );
  }
}