import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="/logo.png" alt="logo" width={200}/>
                    <box-icon name='menu'></box-icon>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" href="/">
                                    <i className="fa-solid fa-house"></i> Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" href="/signup">
                                    Products
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" href="/loginForm">
                                    Login
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" href="/signup">
                                    SignUp
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;