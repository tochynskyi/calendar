import React, { FC } from 'react'
import DaysDisplay from '../DaysDisplay/DaysDisplay'
import style from './LargeCalendar.module.scss'

const LargeCalendar: FC = () => {
	
  return (
	<DaysDisplay display='large'/>
  )
}

export default LargeCalendar