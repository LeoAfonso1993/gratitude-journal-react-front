import React, {useEffect, useState} from "react";
import { Row, Col } from 'react-bootstrap';
import BlessingCards from "../blessingCards/BlessingCards";



function GratitudeArea({counter, setCounter}) {

    const [blessingCards, setBlessingCards] = useState([])
    
    useEffect(() => {
        console.log("hi");
        fetch('http://localhost:9292/blessings')
        .then((response) => response.json())
        .then((items) => setBlessingCards(items))
      },[counter]) 


    const allBlessings = blessingCards.map((blessing) => {
        return(
            <Col>
            <BlessingCards 
            key={blessing.id}
            id={blessing.id}
            question={blessing.question_id}
            answer={blessing.answer}
            blessingCards={blessingCards}
            setBlessingCards={setBlessingCards}
            date={blessing.created_at}
            setCounter={setCounter}
            counter={counter}/>
            </Col>
        )
    })

    return (
        <>
            <h1>Gratitude area</h1>
            <Row xs={1} sm={2} md={3} className="g-4">
                {allBlessings}
            </Row>
        </>
    )
}

export default GratitudeArea;