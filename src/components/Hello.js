import React from 'react'

const Hello = ({user}) => {
  return (
    <div>
        <h4>👋🏻 Welcome back, {user.split(" ")[0]}!</h4>
        <p class="lead">How are we Edvolving today?</p>
    </div>
  )
}

export default Hello