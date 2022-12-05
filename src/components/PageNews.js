import React from 'react';
import { NavLink } from 'react-router-dom'

const PageNews = () => {
  return (
    <div>
      <h1>PageNews</h1>
      <hr/>
      <NavLink to="/news/101" className="p-2">News1</NavLink>
      <NavLink to="/news/102" className="p-2">News2</NavLink>
      <NavLink to="/news/103" className="p-2">News3</NavLink>
    </div>
  )
}
export default PageNews