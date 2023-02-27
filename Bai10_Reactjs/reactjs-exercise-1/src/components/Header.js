import React, { Component } from 'react'
import './header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar bg-dark text-muted">
            <div className='container'>
                <p className="navbar-brand text-white font-weight-bold">Start Boostrap</p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <div className="nav-link font-weight-bold text-white" >Home <span className="sr-only">(current)</span></div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" >Abount</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" >Service</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">Contact</div>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
      </header>
    )
  }
}

export default Header
