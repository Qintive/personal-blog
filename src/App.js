import React, { Component } from 'react'
import './App.css';
import MainScreen from './Component/Main/MainScreen';
import { Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Menu from './Menu/Menu';
import { compose } from 'redux';
import { connect } from 'react-redux';
import InTheLesson from './Component/Lesson/InTheLesson/InTheLesson';
import InTheLesson1 from './Component/Lesson/InTheLesson/IntheLesson1';
import InTheLesson2 from './Component/Lesson/InTheLesson/IntheLesson2'

class App extends Component {

  render() {
    return (
      <div className='app-wrapper'>
        <Header />
        <div>
          <Route path exact='/' render={() => <MainScreen />} />
          <Route path ='/main' render={() => <Menu props={this.props.state}/>} />
          <Route path ='/inTheLesson/1' render={() => <InTheLesson1 />} />
          <Route path ='/inTheLesson/2' render={() => <InTheLesson />} />
          <Route path ='/inTheLesson/3' render={() => <InTheLesson2 />} />
        </div>
      </div>
    )
  }
}

//Работает! Нужно заполнять и оформлять + по возвожности зарефакторить роуты связанные с наполнением уроков хотя бы в другую компоненту//


export default compose(
  connect()
)(App);