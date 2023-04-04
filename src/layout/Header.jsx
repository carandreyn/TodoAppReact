import React from 'react'

function Header() {
  return (
    <nav className="navbar bg-body-tertiary">
    <div className="container-fluid" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <h2 className="navbar-brand mb-0 h1">Todo App</h2>
    </div>
    </nav>
  )
}

export default Header