import React from 'react'
import './Testimonial.css'

function Testimonial() {

 const testimonys = [
  {
    id : 1,
    image : 'person1',
    star : '5 star',
    testify: 'consectetur adipisicing elit Ratione veritatis explicabox',
    name :'micheal'
  },
  {
    id : 2,
    image : 'person1',
    star : '5 star',
    testify: 'consectetur adipisicing elit Ratione veritatis explicabox',
    name :'micheal'
  },
  {
    id:3,
    image : 'person1',
    star : '5 star',
    testify: 'consectetur adipisicing elit Ratione veritatis explicabox',
    name :'micheal'
  }
 ]

  return (
    <div className="testimonial">
      <h2>What Our Client Say About Us</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Ratione</p>
      <div key={testimonys.id} className="testimonial-container">
        {testimonys.map(testimony => 
          <div className="testimonial-card">
            <p>{testimony.star}</p>
            <p>{testimony.testify}</p>
            <h3>{testimony.name}</h3>

          </div>
        

        )}
      </div>

    </div>
  )
}

export default Testimonial