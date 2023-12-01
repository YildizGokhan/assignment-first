import React from 'react'
import "../components/LessonCard/lesson.css"

const Lesson = ({ veri }) => {
    return (
        <main>
            <div className='container'>
                {veri.map(({ id, name, hour, image }) => (
                    <div key={id} className='lesson'>
                        <div>
                            <img src={image} alt="img" />
                        </div>

                        <div className='lessontext'>
                            <p className='lessonparagraph'><span className='lessonspan'>Lesson Name:</span>{name}</p>
                            <p className='lessonparagraph' ><span className='lessonspan'>Lesson Hour: </span>{hour}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>

    )
}

export default Lesson