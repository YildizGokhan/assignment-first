import React from 'react'
import Lesson from '../../pages/Lesson'
import { data } from '../../helper/data'



const LessonCard = () => {
  return (
    <div>
        <Lesson veri = {data}/>
    </div>
  )
}

export default LessonCard