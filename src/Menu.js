import React from "react"
import Toggler from "./Toggler"

function Menu (props){
    return (
      <Toggler render = {
        (on, toggle) => (
          <div>
              <button
                onClick={toggle}>
                {on ? "Hide" : "Show"}
              Menu
              </button>
              <nav style={{display:on ? "block": "none"}}>
                <h6>Signed is as Coder17</h6>
                <a href="">Your Profile</a>
                <a href="">Your Repositories</a>
                <a href="">Your Stars</a>
                <a href="">Your Gists</a>
              </nav>
          </div>
        )
      }/>
    )
}

export default Menu
