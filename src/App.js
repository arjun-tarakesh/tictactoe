import React , { useState } from 'react'
import Icon from "./icons"
import Footer from "./footer"
import { ToastContainer, toast } from "react-toastify";
import { Slide } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';

const itemArray = new Array(9).fill("empty");
//algorithm-wise states initial state = empty

const App = () => {

        const [isCross, setIscross] = useState(false);
        //one state needs to be verified it's enough usestate is initially false
        const [winMessage, setWinMessage] = useState("");
        //same first argument is the func and second is what is to be done with it 

        //simple function to reload the game and start over again both func set to zero 
        const reloadGame = () => {
          setIscross(false);
          setWinMessage("");
          itemArray.fill("empty",0,9);
        }

        //to check winner, using the winning ttt logic
        const checkIsWinner = () => {
          if (
            itemArray[0] === itemArray[1] &&
            itemArray[1] === itemArray[2] &&
            itemArray[0] !== "empty"
          ) {
            setWinMessage(`${itemArray[0]} won`);
            toast("👌 Nice one!!", { type: "default" });
          } else if (
            itemArray[3] !== "empty" &&
            itemArray[3] === itemArray[4] &&
            itemArray[4] === itemArray[5]
          ) {
            setWinMessage(`${itemArray[3]} won`);
            toast("❄ Cool! ", { type: "default" })
          } else if (
            itemArray[6] !== "empty" &&
            itemArray[6] === itemArray[7] &&
            itemArray[7] === itemArray[8]
          ) {
            setWinMessage(`${itemArray[6]} won`);
            toast("⚡ Amazing!", { type: "default" })
          } else if (
            itemArray[0] !== "empty" &&
            itemArray[0] === itemArray[3] &&
            itemArray[3] === itemArray[6]
          ) {
            setWinMessage(`${itemArray[0]} won`);
            toast("whoa! that was cool! 🌟", { type: "dark" })
          } else if (
            itemArray[1] !== "empty" &&
            itemArray[1] === itemArray[4] &&
            itemArray[4] === itemArray[7]
          ) {
            setWinMessage(`${itemArray[1]} won`);
            toast("phew! close one tho! 💫 ", { type: "dark" })
          } else if (
            itemArray[2] !== "empty" &&
            itemArray[2] === itemArray[5] &&
            itemArray[5] === itemArray[8]
          ) {
            setWinMessage(`${itemArray[2]} won`);
            toast("Yaaasss!! 🏆", { type: "dark" })
          } else if (
            itemArray[0] !== "empty" &&
            itemArray[0] === itemArray[4] &&
            itemArray[4] === itemArray[8]
          ) {
            setWinMessage(`${itemArray[0]} won`);
            toast("beautiful 💁 ", { type: "dark" })
          } else if (
            itemArray[2] !== "empty" &&
            itemArray[2] === itemArray[4] &&
            itemArray[4] === itemArray[6]
          ) {
            setWinMessage(`${itemArray[2]} won`);
            toast("Sweet!! 🍫", { type: "dark" })
          }
        }

        const changeState = itemNumber => {
          if (winMessage) {
            return toast("🍻 "+winMessage, { type: "success" });
          }

          if (itemArray[itemNumber] === "empty") {
            itemArray[itemNumber] = isCross? "cross" : "circle" //if cross cross and so
            setIscross(!isCross) //because iscross is initally false (state)
            
          } else {
            return toast("🤺 Already Filled", {type:"info"})
          }
          checkIsWinner();
        }





      return (
        <div className="App">
          <header className="App-header">
            <h1 className="title">TIC TAC TOE</h1>
          </header>
          <Container className="p-3"> 
          {/* reactstrap stuff */}
                <ToastContainer transition={Slide} position="top-right" />
                <Row>
                  <Col md={6} className="offset-md-3">
                    {winMessage ? (
                      <div className="mb-5 mt-0">
                        <h1 className="text-success text-uppercase text-center win">
                          🍻{winMessage}
                        </h1>
                        
                      </div>
                    ) : (
                      <h1 className="text-center turns">
                        👁️‍🗨️{isCross ? "Cross"+"'s" : "Circle"+"'s"} turn
                      </h1>
                    )}
                    <div className="grid">
                      {itemArray.map((item, index) => (
                        <Card onClick={ () => changeState(index)} >
                          <CardBody className="box">
                            
                              <Icon name={item} />
                            
                          </CardBody>
                        </Card>
                      ))}
                      
                        
                    </div>
                    <Button color="success mb-4 mt-3 " size="lg" block onClick={reloadGame}>
                          Reload the game
                    </Button>
                  </Col>
                </Row>
        </Container>
          <footer>
            <Footer />
          </footer>
        </div>
        
      );
}

export default App;
