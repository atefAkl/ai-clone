import './main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile from "./profile.jpg";
import aiProfile from "./ai-pic.png";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
// import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { cards } from '../data';
import Card from './card';
import { useContext } from 'react';
import { Context } from '../context';
import Loading from "./loading";
import Markdown from "react-markdown";

const Main = () => {

   const {
     setPrevPrompt,
     recentPrompt,
     showResult,
     isLoading,
     resultData,
     onSent,
     input,
     setInput,
   } = useContext(Context);

 
    const elem = cards.map((card) => {
      // eslint-disable-next-line react/jsx-key
      return (<Card key={card.id} data={card} />);
    });
    return (
      <>
        <div id="main" className="main">
          <header>
            <h2>AKLSOFTAI</h2>
            <span className="user-icon">
              <img src={profile} alt="" />
            </span>
          </header>
          {!showResult ? (
            <>
              <div className="help">
                <div className="container">
                  <div className="help-title">
                    <h1>Hello Aklsoft</h1>
                    <p>How can I help you today?</p>
                  </div>
                  <div className="cards">{elem}</div>
                </div>
              </div>
              <div className="container">
                <div id="notes">
                  <div className="notes-icon">
                    <FontAwesomeIcon icon={faUserShield} />
                  </div>

                  <div className="notes-text">
                    <p>
                      Your conversations are processed by human reviewers to
                      improve the technologies powering Gemini Apps. Do not
                      enter anything that you would not want to be reviewed or
                      used.
                    </p>
                    <div className="buttons">
                      <button>How it works</button>
                      <button>Dismiss</button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div id="result">
              <div className="container">
                <div className="question">
                  <img src={profile} alt="" />
                  <div className="questionText">{recentPrompt}</div>
                </div>

                <div className="answer">
                  <img src={aiProfile} alt="" />
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <div className="answerText">
                      <Markdown>
                        {resultData}
                        {/* <div
                        dangerouslySetInnerHTML={{ __html: resultData }}
                        className="answerText"
                      ></div> */}
                      </Markdown>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          <footer>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSent(input);
              }}
            >
              <div className="input">
                <input
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  value={input}
                  type="text"
                />
              </div>
              <button type="button" className="form-btn">
                <FontAwesomeIcon icon={faImages} />
              </button>
              <button type="button" className="form-btn">
                <FontAwesomeIcon icon={faMicrophone} />
              </button>
              <button
                className="form-btn"
                type="button"
                style={{ transform: "rotate(45deg)", fontSize: "30px" }}
                onClick={() => {
                  onSent(input);
                }}
              >
                {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
                <FontAwesomeIcon icon={faLocationArrow} />
              </button>
            </form>
            <p>
              Gemini may display inaccurate info, including about people, so
              double-check its responses.
              <a href="">Your privacy and Gemini Apps</a>
            </p>
          </footer>
        </div>
      </>
    );
} 

export default Main;
