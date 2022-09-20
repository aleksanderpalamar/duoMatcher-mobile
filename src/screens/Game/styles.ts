import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 32,
    marginTop: 28,
    justifyContent: 'space-between',
  },
  logo: {
    width: 72,
    height: 72,
  },
  text: {
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BLACK,
  },
  right: {
    width: 20,
    height: 20,
  },
  cover: {
    width: 311,
    height: 160,    
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 32,
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: 'flex-start',
  },
  containerList: {
    width: '100%',
  },
  emptytext: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.CAPTION_300,    
  },
  emptyListContent: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});