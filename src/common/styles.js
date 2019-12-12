import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    alignItems: 'center',
    padding: 15,
  },
  card: {
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      x: 0,
      y: 4,
    },
    shadowRadius: 6,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 6,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  column: {
    flexDirection: 'column',
    flex: 1,
  },
  errorMessageContainer: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 15,
    backgroundColor: '#fff6f6',
    width: width - 60,
  },
  errorMessageText: {
    color: '#9f3a38',
    fontWeight: 'bold',
  },
  headerIcon: {
    padding: 15,
    paddingVertical: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 285,
    height: 280,
    backgroundColor:
      '#fff',
    borderRadius: 6,
  },
  modalHeader: {
    backgroundColor: '#4d63be',
    flexDirection: 'row',
    borderTopStartRadius: 6,
    borderTopRightRadius: 6,
    justifyContent: 'space-between',
  },
  modalTitle: {
    padding: 15,
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
  modalCloseButtonWrapper: {
    padding: 15,
    borderTopRightRadius: 6,
  },
  modalBody: {
    padding: 15,
    flex: 1,
    justifyContent: 'space-between',
  },
  modalButton: {
    height: 40,
    width: 255,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  modalButtonGroup: {
    flexDirection: 'column',
  },
});
