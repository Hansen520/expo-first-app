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
    num: state.Counter.num
  }
}

const Counter = (props: any) => {
  return (
    <View style={[styles.container]}>
      <View>
        <Button title={'-'} onPress={() => props.decrement(1)} />
        <Text> { props.num } </Text>
        <Button title={'+'} onPress={() => props.increment(1)} />
      </View>
    </View>
  );
};

export default connect(mapStateToProps, { increment, decrement })(Counter)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignContent: 'center'
  }
});
