import React, { useEffect } from 'react'
import { gibberishConverter } from '../utils/i18nConverter'
import { Link, useHistory } from 'react-router-dom'
import { css } from '@emotion/core'
import { func, bool } from 'prop-types'

export default function Header ({ convertRoman, setConvertRoman, isI18nEnabled, setIsI18nEnabled }) {
  function handleClick () {
    setConvertRoman(!convertRoman)
  }
  let history = useHistory()

  useEffect(() => {
    setIsI18nEnabled(window.location.search.includes('i18n=true'))
  }, [history.location])

  return (
    <nav css={navStyle}>
      <ul >
        <li>
          <Link to='/'>{gibberishConverter('Transactions', isI18nEnabled)}</Link>
        </li>
        <li>
            |
        </li>
        <li>
          <Link to='/graphs'>{gibberishConverter('Graphs', isI18nEnabled)}</Link>
        </li>
      </ul>
      <div className='romanNumeral'>
        <div>{gibberishConverter('Roman Numeral Converter', isI18nEnabled)}</div>
        <input className='toggle' css={toggleStyle} onClick={handleClick} type='checkbox' />
      </div>
    </nav>
  )
}

Header.propTypes = {
  setConvertRoman: func,
  setIsI18nEnabled: func,
  convertRoman: bool,
  isI18nEnabled: bool
}

const navStyle = css`
  display: flex;
  justify-content: space-between;
  background: #40a8f8;
  padding: 10px 20px;
  background: linear-gradient(#40a8f8, #2791e3);

  .romanNumeral {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: white
  }

  a:hover {
    color: black
  }

  & > ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;
      color: white;
  }
  
  & > ul > li:not(:first-of-type) {
    margin-left: 16px;
  }

  li {
    font-size: 3vw;
  }
`

const toggleStyle = css`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 62px;
  height: 32px;
  display: inline-block;
  position: relative;
  border-radius: 50px;
  overflow: hidden;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #707070;
  transition: background-color ease 0.3s;
  transform: scale(.7);

:before {
  content: "   ";
  display: block;
  position: absolute;
  z-index: 2;
  width: 28px;
  height: 28px;
  background: #fff;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  font: 10px/28px Helvetica;
  text-transform: uppercase;
  font-weight: bold;
  text-indent: -22px;
  word-spacing: 37px;
  color: #fff;
  text-shadow: -1px -1px rgba(0,0,0,0.15);
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
  transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;
}

:checked {
  background-color: #4CD964;
}

:checked:before {
  left: 32px;
}
`
