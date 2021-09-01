import './Lesson.css'
import LessonItemColom2 from "./LessonItem/LessonItemColom2";
import LessonItemColom1 from './LessonItem/LessonItemColom1';

const Lesson = (props) => {

  let nameElementColom1 = props.lessonColom1.map(l => <LessonItemColom1 title={l.title} photo={l.photo} id={l.id}/>)
  let nameElementColom2 = props.lessonColom2.map(l => <LessonItemColom2 title={l.title} photo={l.photo} id={l.id}/>)


  
  return (<div className='appWr'>
    <div className='BlockCenter'>
      <span className='nameElementColom1'>{nameElementColom1}</span>
      <span className='nameElementColom2'>{nameElementColom2}</span>
    </div>
  </div>
  )
}

export default Lesson;