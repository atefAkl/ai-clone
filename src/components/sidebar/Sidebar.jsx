
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
// import stateome } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";


import "./sidebar.css";
import { useContext, useState } from "react";
import { Context } from "../context";

const Sidebar = () => {

    const [expand, setExpand] = useState(false);
    const {onSent, prevPrompts, setRecentPrompt} = useContext(Context);
    console.log(prevPrompts);
const toggleExpandMenu = () => {
    setExpand(!expand);
}
    return (
      <div id="sidebar" className={expand ? "sidebar expanded" : "sidebar"}>
        <div id="top">
          <div className="menuToggleIcon" onClick={toggleExpandMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="createNewChatButton">
            <div className="chat-item">
              <FontAwesomeIcon icon={faPlus} />
              {expand && <span className="new-chat-text">New ....</span>}
            </div>
          </div>
          <div className="recent">
            {expand && <h3 className="recent-title">Recent</h3>}

            {prevPrompts.length > 0 && (
              <div className="chat-items">
                {prevPrompts.map((item, i) => (
                  <div className="chat-item" key={i}>
                    <FontAwesomeIcon icon={faCommentAlt} />
                    {expand && (
                      <span>
                        {item.substring(0, 18)} {item.length > 18 && "..."}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div id="bottom">
          <div className="chat-items">
            <div className="chat-item">
              <FontAwesomeIcon icon={faQuestionCircle} />
              {console.log(expand)}
              {expand && <span>Help</span>}
            </div>
            <div className="chat-item">
              <FontAwesomeIcon icon={faHistory} />
              {expand && <span>Activity</span>}
            </div>
            <div className="chat-item">
              <FontAwesomeIcon icon={faCog} />
              {expand && <span>Setting</span>}
            </div>
          </div>

          <div className="location">
            {expand && (
              <div className="chat-item">
                hello again
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>Cairo-Egypt</span>
                <footer>
                  From your IP address, <a href="">change location ?</a>
                </footer>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}

export default Sidebar;
