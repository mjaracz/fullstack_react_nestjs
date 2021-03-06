import { makeStyles } from '@material-ui/styles';

export const useStyle = makeStyles({
  unauthorized: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 340,
  },
  unauthorizedText: {
    fontSize: 23,
    letterSpacing: 1.2,
    color: '#fff',
    '& > a': {
      textDecoration: 'none',
      color: '#bc36ff',
    },
  },
});
