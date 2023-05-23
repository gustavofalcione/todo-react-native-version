import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 8,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#262626',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333333',
    marginBottom: 8
  },
  description: {
    color: '#F2F2F2',
    flex: 1,
    maxWidth: 400,
  },
  checkbox: {
   height: 18,
   width: 18,
   borderRadius: 9999,
  },

  isCompleted: {
    textDecorationLine: 'line-through',
    color: '#808080',
    flex: 1,
    maxWidth: 400,
  }
})