import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import GratitudeArea from '../gratitudeArea/GratitudeArea';


function NewGratitudeEntry() {
    const [categories, setCategories] = useState([])
    const [blessings, setBlessings] = useState({
        answer: "",
        question_id: ""
    })
    const [catId, setCatID] = useState(1)
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        fetch('http://localhost:9292/categories')
        .then((response) => response.json())
        .then((item) => setCategories(item))
    },[])

    const allTheOptions = categories.map((categ) => {
        return (
            <option>{categ.question}</option>
        )
    })

    function handleChange(e) {
        setBlessings({
            [e.target.name]: e.target.value,
        })
        console.log(e.target.value)
    }

    function handleChangeCat(e){ /*Create a separate handle change for a separate useState */
        for (let i of categories){
            if (i.question === e.target.value){
                setCatID(i.question)
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
                question_id: catId
            })
        }

        fetch('http://localhost:9292/home', blessingData)
        .then((response) => response.json())
        .then((item) => console.log(item))
        .then(() => {
            setBlessings({
                answer: "",
                question_id: ""
            })
        })
        .then(() => setCounter(counter + 1))
        .then(() => window.alert('Blessing added successfully!'))
    }


  return (
    <Form onSubmit={handleSubmit} >
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
        <Button type="submit">Submit</Button>
        <GratitudeArea counter={counter} setCounter={setCounter}/>
    </Form>
  );
}

export default NewGratitudeEntry;