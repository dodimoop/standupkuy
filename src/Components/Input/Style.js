import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  Input: {
    width: '80%',
    border: 'none',
    fontSize: 32,

    '&:focus': {
      boxShadow: 'none'
    }
  }
})

export default useStyles
