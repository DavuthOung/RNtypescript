import React from 'react';
import {StyleSheet, View} from 'react-native';

class BaseScreen extends React.Component {
  constructor(props: any) {
    super(props);
  }

  Content(): any {}
  render() {
    return <View style={styles.container}>{this.Content()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BaseScreen;
