import React from 'react'
import { userStatusConvertor, userStatusConvertorIcon } from '../utils/helpers'

function UserStatus(props) {
  const [color, setColor] = React.useState('#536b88')
  const [bgColor, setBgColor] = React.useState('#f7f9fc')
  const [title, setTitle] = React.useState('#f7f9fc')
  const {
    status,
    borderWidth,
    border = false,
    iconMargin = 'ml-1',
    m = 'm-1',
    p = 'py-1 px-2',
    titleFontSize = 'text-xs',
  } = props

  React.useEffect(() => {
    userStatusConvertor(setColor, setBgColor, setTitle, status)
  }, [status])

  return (
    <div
      className={`${p} ${m} inline-flex rounded-lg items-center`}
      style={{
        backgroundColor: bgColor,
        fontFamily: 'YekanLight',
        borderWidth: border ? borderWidth : 0,
      }}
    >
      <img className={`w-5 ${iconMargin}`} src={userStatusConvertorIcon(status)} alt="آیکن" />
      <span className={`text-white ${titleFontSize} font-yekanlight`} style={{ color }}>
        {title}
      </span>
    </div>
  )
}
export default UserStatus
