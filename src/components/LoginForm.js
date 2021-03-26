import {useState} from "react";
import { Form } from "semantic-ui-react";
import { useHistory } from 'react-router-dom';

const LoginForm = ({user, setUser}) => {
    let history = useHistory()

    const [formData, setFormData ] = useState({ 
        name: '',
        password: ''
     })

    const updateForm = (e) => {
        const key =  e.target.name
        const value = e.target.value

        setFormData( {...formData, [key]: value })

    } 


    const handleSubmit = (event) => {
        event.preventDefault()

        fetch(`http://localhost:3000/users/login`, {
            method: 'POST',
            headers: {'Content-Type': 'json/applications'},
            body: JSON.stringify(formData)
        })
        .then( r => r.json() )
        .then( user => {
            if (user) {
                setUser(user)
                history.push('/listings')

            } else {
                alert('Username or Password is incorrect')
            }

        })

    }

    return(
    <div>
        <Form onSubmit={
            handleSubmit}>   
            <Form.Group widths="equal">
                <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} onChange={updateForm}/>
                <Form.Input fluid label="Password" placeholder="Enter password" name="password" value={formData.password} onChange={updateForm}/>
            </Form.Group>
            <Form.Button>Submit</Form.Button>
        </Form>

    </div>
    )
}

export default LoginForm;