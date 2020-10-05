import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  App: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100vh'
  },
  LeftContent: {
    width: '50%',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none'
    // backgroundColor: '#efe'
  },
  RightContent: {
    width: '50%',
    textAlign: 'center',
    backgroundColor: '#efd'
  },
  DivDivider: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Divider: {
    height: '50%'
  },
  spanName: {
    display: 'flex',
    position: 'absolute',
    top: 400,
    left: 95
  },
  yesterdayValue: {
    width: '40%',
    display: 'block',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 550,
    left: 95
  },
  listValue: {
    marginBottom: 10,
    textAlign: 'justify'
  },
  divValue: {
    display: 'flex',
    marginBottom: 10
  },
  buttonRemove: {
    marginRight: 10
  },
  alert: {
    display: 'flex',
    color: 'red',
    position: 'absolute',
    top: 511,
    left: 95
  }
})

export default useStyles
