import React from "react";
import { Card, Button } from 'react-bootstrap';
import bCards from './BlessingCards.module.css';


function BlessingCards({id, question, answer, counter, setCounter, date, setBlessingCards}) {
    
    function handleDelete() {
        fetch(`http://localhost:9292/cards/${id}`, {
            method: "DELETE",
        })
        .then((response) => response.json())
        .then(() => setCounter(counter + 1))
    }

    const deleteButton = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColorblack" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
    )

    return (
            <Card className={bCards.cards}>
              <Card.Header as="h5" className={bCards.header}><i>{date.slice(0,10)}</i></Card.Header>
              <Card.Body>
                <Card.Title>{question}</Card.Title>
                <Card.Text>
                  {answer}
                </Card.Text>
                <Button className={bCards.btn} onClick={handleDelete}>{deleteButton}</Button>
              </Card.Body>
            </Card>
          );
}

export default BlessingCards;