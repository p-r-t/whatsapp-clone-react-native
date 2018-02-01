import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';

import TabBarMenu from './TabBarMenu';
import ChatsScane from './ChatsScene';
import StatusScane from './StatusScene';
import CallsScane from './CallsScane';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class MainScreen extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'CHATS' },
      { key: 'second', title: 'STATUS' },
      { key: 'third', title: 'CALLS' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });
  _renderHeader = props => <TabBarMenu {...props} />;

  _renderScene = SceneMap({
    first: ChatsScane,
    second: StatusScane,
    third: CallsScane,
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}s
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
