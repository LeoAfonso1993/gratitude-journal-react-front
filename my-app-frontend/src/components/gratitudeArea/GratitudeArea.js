import React, {useEffect, useState} from "react";
import { Row, Col, Container } from 'react-bootstrap';
import BlessingCards from "../blessingCards/BlessingCards";
import Dropdown from 'react-bootstrap/Dropdown';
import garea from './GratitudeArea.module.css'


function GratitudeArea({counter, setCounter}) {

    const [blessingCards, setBlessingCards] = useState([])
    const [route, setRoute] = useState(["blessings"])
    
    useEffect(() => {
        fetch(`http://localhost:9292/${route}`)
        .then((response) => response.json())
        .then((items) => setBlessingCards(items))
        // eslint-disable-next-line
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

    function handleSelect(e) {
        console.log(e.target.name)
        setRoute(e.target.name)
        setCounter(counter + 1)
    }


    return (
        <>
            <Container className={garea.container}>
            <div className={garea.title_box}>
                <h2>Gratitude area</h2>
                <Dropdown className={garea.select}>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    Blessing Filter
                </Dropdown.Toggle>
                <Dropdown.Menu onClick={handleSelect}>
                    <Dropdown.Item href="#/action-1" name="by_date_asc">By date (oldest first)</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" name="by_date_desc">By date (newest first)</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
            <Row xs={1} sm={2} md={3} className="g-4">
                {allBlessings}
            </Row>
            </Container>

        </>
    )
}

export default GratitudeArea;