import React from 'react'
import { Input } from 'antd'
import Style from './Style'

const InputComponent = ({ ...props }) => {
  const classes = Style()
  return (
    <>
      <Input {...props} className={classes.Input} />
    </>
  )
}

export default InputComponent
