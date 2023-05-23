import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',
    padding: 24,
    flex: 1,
  },
  countTasksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 22
  },
  countTaksContent: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  createdTasksTitle: {
    fontWeight: '700',
    color: '#4EA8DE',
    fontSize: 14
  },
  fineshedTasksTitle: {
    fontWeight: '700',
    color: '#8284FA',
    fontSize: 14
  },
  counter: {
    width: 24,
    backgroundColor: '#333333',
    borderRadius: 999,
    alignItems: 'center'
  },
  counterText: {
    color: '#D9D9D9',
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 8,
    paddingLeft: 8,
    fontWeight: '700',
    fontSize: 12
  },
  input: {
    height: 54,
    padding: 16,
    borderRadius: 6,
    backgroundColor: '#262626',
    flex: 1,
    marginRight: 4,
    color: '#f2f2f2',
    fontSize: 16
  },
  button: { 
    height: 52,
    width: 52,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  }
})