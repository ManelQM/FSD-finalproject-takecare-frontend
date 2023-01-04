
        import React from "react";
        import "./Header.css";
        import {Link} from "react-router-dom"; 

        const Header = () => {
            return (
                <div className="headerDesign">
                    <div>
                        <Link to="./login">
                          <button>Login</button>
                        </Link>
                        <Link to="./register">
                          <button>Register</button>
                        </Link>    
                    </div>
                </div>
            );
        };

        export default Header; 