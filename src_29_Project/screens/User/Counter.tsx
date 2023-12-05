/*
 * @Date: 2023-11-24 11:12:32
 * @Description: description
 */
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import { increment, decrement } from '../../redux/actions/Counter';

const mapStateToProps = (state: any) => { 
  return {
    num: state.Count.num
  }
}

const Counter = (props: any) => {
  return (
    <View style={[styles.container]}>
      <Button title={'-'} onPress={() => props.decrement(1)} />
      <Text> { props.num } </Text>
      <Button title={'-'} onPress={() => props.increment(1)} />
    </View>
  );
};

export default connect(mapStateToProps, { increment, decrement })(Counter)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center'
  }
});
