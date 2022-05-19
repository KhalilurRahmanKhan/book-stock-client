import React from 'react';

const Navbar = () => {
    return (
        <nav ClassName="navbar navbar-expand-lg bg-light">
        <div ClassName="container-fluid">
            <a ClassName="navbar-brand" href="sfg">Navbar</a>
            <button ClassName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span ClassName="navbar-toggler-icon"></span>
            </button>
            <div ClassName="collapse navbar-collapse" id="navbarSupportedContent">
            <ul ClassName="navbar-nav me-auto mb-2 mb-lg-0">
                <li ClassName="nav-item">
                <a ClassName="nav-link active" aria-current="page" href="fsdg">Home</a>
                </li>
                <li ClassName="nav-item">
                <a ClassName="nav-link" href="sfgsr">Link</a>
                </li>
                <li ClassName="nav-item dropdown">
                <a ClassName="nav-link dropdown-toggle" href="sfgsg" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <ul ClassName="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a ClassName="dropdown-item" href="fdgdf">Action</a></li>
                    <li><a ClassName="dropdown-item" href="fdgdf">Another action</a></li>
                    <li><a ClassName="dropdown-item" href="fdgdf">Something else here</a></li>
                </ul>
                </li>
            
            </ul>
            
            </div>
        </div>
        </nav>
    );
};

export default Navbar;