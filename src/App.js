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

  // Handling Yesterday
  const isInputEnterYesterday = event => {
    if (currentYesterday === '' || currentYesterday === null) {
      setAlert(true)
    } else if (event.keyCode === 13) {
      if (temp === '') {
        const checkExistingDataYesterday = yesterdays.indexOf(currentYesterday)
        // -1 is data not exist
        if (checkExistingDataYesterday !== -1) {
          setExist(true)
        } else {
          setExist(false)
          setYesterdays([...yesterdays, event.target.value])
        }

        setAlert(false)
      } else {
        // eslint-disable-next-line no-plusplus
        for (let index = 0; index < yesterdays.length; index++) {
          const dataYesterday = yesterdays[index]
          if (dataYesterday === temp) {
            yesterdays[index] = event.target.value
            setTemp('')
            break
          }
        }
      }
      setCurrentYesterday('')
    }
  }

  // Remove data yesterdat
  const onRemoveDataYesterday = props => {
    const resultRemoveData = yesterdays.filter(yesterday => yesterday !== props)
    setYesterdays(resultRemoveData)
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
              onPressEnter={isInputEnterYesterday}
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
              onClick={() => onRemoveDataYesterday(yesterday)}
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
