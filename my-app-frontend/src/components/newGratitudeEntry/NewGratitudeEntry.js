import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import GratitudeArea from '../gratitudeArea/GratitudeArea';
import newEntry from './NewGratitudeEntry.module.css'


function NewGratitudeEntry() {
    const [categories, setCategories] = useState([])
    const [blessings, setBlessings] = useState({
        answer: "",
        category_id: ""
    })
    const [catId, setCatID] = useState(0)
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        fetch('http://localhost:9292/categories')
        .then((response) => response.json())
        .then((item) => setCategories(item))
    },[])

    const allTheOptions = categories.map((categ) => {
        return (
            <option className={newEntry.options}>{categ.question}</option>
        )
    })

    function handleChange(e) {
        setBlessings({
            [e.target.name]: e.target.value,
        })
    }

    function handleChangeCat(e){ /*Create a separate handle change for a separate useState */
        for (let i of categories){
            if (i.question === e.target.value){
                setCatID(i.id)
            }
        }    
    }

    function handleSubmit(e){
        e.preventDefault()

        const blessingData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                answer: blessings.answer,
                category_id: catId
            })
        }

        fetch('http://localhost:9292/home', blessingData)
        .then((response) => response.json())
        .then((item) => console.log(item))
        .then(() => {
            setBlessings({
                answer: "",
                category_id: 0
            })
        })
        .then(() => setCounter(counter + 1))
        .then(() => window.alert('Blessing added successfully!'))
    }


  return (
    <>
    <div>
        <div className={newEntry.txt}>
            <h4><i>"Acknowledging the good that you already have in your life is the foundation for all abundance."</i></h4>
            <h6>-ECKHART TOLLE</h6>
        </div>
        <Form onSubmit={handleSubmit} className={newEntry.form}>
            <Form.Group className="mb-3">
            <Form.Label htmlFor="selectCategory">Select Category</Form.Label>
            <Form.Select id="questionTextInput"
            name="question_id"
            onChange={handleChangeCat}
            value={categories.question}>
                {allTheOptions}
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Control id="answerTextInput" 
            placeholder="Answer"
            name="answer"
            onChange={handleChange}
            value={blessings.answer} />
            </Form.Group>
            <Button type="submit" style={{ color: 'black' }} className={newEntry.btn}>Submit</Button>
        </Form>
        <GratitudeArea counter={counter} setCounter={setCounter} />
    </div>
    </>
    
  );
}

export default NewGratitudeEntry;