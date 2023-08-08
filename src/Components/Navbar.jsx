import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-xl">
                <a className="navbar-brand" href="#">LOGO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link fw-600" aria-current="page" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-600" href="#writing">Writing Help</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-600 " href='#reviews'>Review</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-600 " href='#blog'>Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-600 " href='#contact'>Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-600 " href=''>Order</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
