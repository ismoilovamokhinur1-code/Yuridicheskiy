import React from 'react';
import "./header.css";
import logo from "../../assets/logo.svg";
import wk from "../../assets/wk.svg";

export default function Header() {
  return (
  <header>
    <div className="header_wrapper">
        <img src={logo} alt="logo" />

        <div className='header_info'>
            <ul className='header_wrapper_ul'>
                <li>
                    <a href="tel:+7 937 00 99 999">+7 937 00 99 999</a>
                </li>
            </ul>

            <button className='header_btn'>
                Связаться с нами
            </button>

            <img src={wk} alt="wk" />
        </div>
    </div>

    <div className='header_liner'>

    </div>
  </header>
  )
}
