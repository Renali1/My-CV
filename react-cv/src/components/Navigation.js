import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="sidebar">
        <div className="id">
            <div className="idContent">
                <img src="./media/37304171.jpg" alt="profil-pic"></img>
                <h3>Jonathan Fleurentin</h3>
            </div>
        </div>
        <div className="navigation">
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="navActive">
                        <span>Accueil</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/contact" activeClassName="navActive">
                        <span>Contact</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/competences" activeClassName="navActive">
                        <span>Competences</span>
                    </NavLink>
                </li>
                <li>
                    {/* <NavLink exact to="/portfolio" activeClassName="navActive">
                        <span>Experiences</span>
                    </NavLink> */}
                </li>
            </ul>
            <div className="signature">
                <p>Mon CV - 2022</p>
            </div>
        </div>
    </div>
  );
};

export default Navigation;