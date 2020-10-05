import React, { useState } from 'react'
import { Divider, Button } from 'antd'
// import { isEmpty } from 'lodash'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import ReactTextFormat from 'react-text-format'
import Input from './Components/Input/Input'
import Style from './Style'

const App = () => {
  // State
  const [currentName, setCurrentName] = useState('')
  const [enter, setEnter] = useState(false)
  const [name, setName] = useState('')
  const [currentYesterday, setCurrentYesterday] = useState('')
  const [yesterdays, setYesterdays] = useState([])
  const [temp, setTemp] = useState('')
  const [alert, setAlert] = useState(false)
  const [exist, setExist] = useState(false)

  // Handling name
  const isInputEnterName = event => {
    if (event.keyCode === 13) setName(event.target.value)
    setEnter(true)
  }

  // Change data yesterday
  const onChangeDataYesterday = props => {
    setCurrentYesterday(props)
    setTemp(props)
  }

  const classes = Style()
  return (
    <div className={classes.App}>
      {alert ? <p className={classes.alert}>Required!</p> : ''}
      {exist ? <p className={classes.alert}>Data Already Exist!</p> : ''}

      <div className={classes.LeftContent}>
        {!enter ? (
          <>
            <span className={classes.spanName}> {"Hi, what's your name?"}</span>
            <Input
              placeholder="Type your name here"
              className={classes.Input}
              value={currentName}
              onPressEnter={isInputEnterName}
              onChange={e => setCurrentName(e.target.value)}
            />
          </>
        ) : (
          <>
            <span className={classes.spanName}>What did you do yesterday?</span>
            <Input
              placeholder="Type your yesterday's work here"
              className={classes.Input}
              value={currentYesterday}
              onChange={e => setCurrentYesterday(e.target.value)}
            />
          </>
        )}
      </div>
      <div className={classes.yesterdayValue}>
        {yesterdays.map((yesterday, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className={classes.divValue}>
            <Button
              shape="circle"
              size="small"
              type="dashed"
              danger
              className={classes.buttonRemove}
            >
              <DeleteOutlined />
            </Button>
            <Button
              shape="circle"
              size="small"
              type="dashed"
              color="primary"
              className={classes.buttonRemove}
              onClick={() => onChangeDataYesterday(yesterday)}
            >
              <EditOutlined />
            </Button>
            <li className={classes.listValue}>
              <ReactTextFormat
                terms={['Link', 'phone', 'image', 'Anchor', 'email', 'Credit']}
                linkTarget="_blank"
                imageDecorator
              >
                {yesterday}
              </ReactTextFormat>
            </li>
          </div>
        ))}
      </div>
      <div className={classes.DivDivider}>
        <Divider type="vertical" className={classes.Divider} />
      </div>
      <div className={classes.RightContent}>
        {name === '' ? '' : `Name: ${name}`} <br />
        {yesterdays}
      </div>
    </div>
  )
}

export default App
