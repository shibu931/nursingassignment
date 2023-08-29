import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    function toggleNav(){
        const element = document.querySelector('.navbar-collapse');
        element.classList.toggle('show')
    }
    useEffect(() => {
        const header = document.getElementsByTagName("nav");
        const element1 = document.querySelector('.hero-banner');
        const observer1 = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) {
              header[0].classList.add('bg-light', 'shadow', 'sticky-top');
            } else {
              header[0].classList.remove('sticky-top', 'bg-light', 'shadow');
            }
          });
        }, {
          root: null,
          rootMargin: "-200px",
          threshold: "0"
        });
        observer1.observe(element1);
        return () => {
          observer1.disconnect();
        };
      }, [])
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid px-2 px-sm-5">
                <a className="navbar-brand" href="#"><img src="./assets/img/logo.webp" width={150} alt="" /></a>
                <button className="navbar-toggler" type="button" onClick={toggleNav}>
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
                        {/* <li className="nav-item">
                            <Link className="nav-link fw-600 " to='/blog'>Blog</Link>
                        </li> */}
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
