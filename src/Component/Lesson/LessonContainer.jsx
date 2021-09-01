import { connect } from 'react-redux';
import { compose } from 'redux';
import Lesson from "./Lesson";


let mapStateToProps = (state) => {
    return {
        lessonColom1: state.lessonsPage.lessonColom1,
        lessonColom2: state.lessonsPage.lessonColom2,
    }
}

export default compose (
    connect(mapStateToProps, {})
)
(Lesson);