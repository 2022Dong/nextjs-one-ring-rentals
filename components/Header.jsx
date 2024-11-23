"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
const Header = () => {
  const [searchInput, setSearchInput] = useState("");

  // Initialize state, and set default language.
  const [currentLanguage, setCurrentLanguage] = useState("English");

  const handleSubmit = (e) => { 
    const params = {}
    e.preventDefault();
    if (searchInput) params.data = searchInput;
  }

  return (
    <header id="header">
    <div id="top-bar">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <ul id="top-buttons">
              <li>
                <Link href="/"><i className="fa fa-sign-in"></i> Login</Link>
              </li>
              <li>
                <Link href="/"
                  ><i className="fa fa-pencil-square-o"></i> Register</Link>
              </li>
              <li className="divider"></li>
              <li>
                <div className="language-switcher">
                    <span><i className="fa fa-globe"></i> { currentLanguage }</span>
                    <ul>
                      {/* Change language on click */}
                    <li><Link href="/" onClick={() => setCurrentLanguage('Deutsch')}>Deutsch</Link></li>
                    <li><Link href="/" onClick={() => setCurrentLanguage('Español')}>Español</Link></li>
                    <li><Link href="/" onClick={() => setCurrentLanguage('Français')}>Français</Link></li>
                    <li><Link href="/" onClick={() => setCurrentLanguage('Português')}>Português</Link></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div id="nav-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Link href="/" className="nav-logo"
              ><Image 
              src="/assets/images/logo.png"
              alt="Logo" 
              width={200}
              height={100}
            /></Link>
            {/* <!-- BEGIN SEARCH --> */}
            <div id="sb-search" className="sb-search">
              <form onSubmit={handleSubmit}>
                <input
                  className="sb-search-input"
                  placeholder="Search..."
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  name="search"
                  id="search"
                />
                <input className="sb-search-submit" type="submit" value="" />
                <i className="fa fa-search sb-icon-search"></i>
              </form>
            </div>
            {/* <!-- END SEARCH --> */}
            {/* <!-- BEGIN MAIN MENU --> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button id="nav-mobile-btn">
                <i className="fa fa-bars"></i>
              </button>

              <ul className="nav navbar-nav">
                <li><Link href="/">Find a Rental</Link></li>
                <li><Link href="/">List your rental(TODO)</Link></li>
                <li><Link href="/">Travel Guides(TODO)</Link></li>
                <li><Link href="/regions">Regions</Link></li>
                <li><Link href="/news">News</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
            {/* <!-- END MAIN MENU --> */}
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header