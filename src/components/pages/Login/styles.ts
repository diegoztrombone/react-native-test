import { StyleSheet } from 'react-native';
import colors from 'assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  input: {
    borderWidth: 1,
    width: 150,
    borderColor: colors.gray2,
    borderRadius: 10,
  },
});
