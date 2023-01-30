import React from 'react'

export default function User(props) {
  return (
    <div>
        {props.data.name} {props.data.age} {props.data.city} 
        <div>
        <img src={props.data.avatar} />
        </div>
    </div>
  )
}
