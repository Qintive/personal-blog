import React from 'react';
import './InTheLesson.css'

const InTheLesson1 = () => {
  return (
    <div className='eas'>
      <div className='two' />
      <div className='textInTheLesson'>
        <h1>
        Day 1 - SPA (simple page applications)
        </h1>
      </div>
      <div className='textInTheLesson'>
        <span>
          <h4>
          Смысл SPA заключается в том, что сервер не отправляет каждый раз новый HTML при любой нашем запросе на сайте (переход в другой раздел, новое сообщение и т.д.). Он отправляет изначально один универсальный HTML, на который в следствии накладывается js код. При переходе с раздела «сообщение» в раздел «новости» идет запрос на сервер, чтобы тот вернул нам js код для раздела «новости».
          </h4>      
      </span>
      </div>
      <div className='iframe'>
         <iframe width="775" height="436" src="https://www.youtube.com/embed/TPYgQvY9VVQ?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

    </div>

  )
}

export default InTheLesson1;