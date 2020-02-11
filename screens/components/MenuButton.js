import * as React from 'react';
import { Component } from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import { styles } from '../../Style';

export default class MenuButton extends React.Component {
  render() {
    return (
      <View style={styles.menuButtonWrapper}>
        <TouchableHighlight onPress={() => this.props.navigation.toggleDrawer()}>
          <Image style={styles.menuButton}
            source={require('../../resources/images/menu_button.png')}
          />
        </TouchableHighlight >
      </View >
    );
  }
}

