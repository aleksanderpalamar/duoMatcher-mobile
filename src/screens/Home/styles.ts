import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  logo: {
    width: 214,
    height: 220,
    marginTop: 74,
    marginBottom: 48,
    alignSelf: 'center',
  },
  text: {
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    textAlign: 'center',
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
  }
});