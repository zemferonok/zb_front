import React, {useState} from 'react';

import {commentService} from "../../services/comment.service";
import css from './Form.module.css';

const Form = () => {

    const [formState, setFormState] = useState({name: '', email: '', message: ''});

    const onChange = (event) => {
        setFormState({...formState, [event.target.name]: event.target.value});
    }

    const submit = (event) => {
        event.preventDefault();
        //TODO add checker of every values
        if (!formState.name || !formState.email || !formState.message) {
            console.log("Fill all fields");
            return;
        }
        commentService.post(formState)
            .then(value => console.log(value))
            .catch(value => console.log(value.response.data));
        setFormState({name: '', email: '', message: ''});
    }

    return (<div className={css.component}>
        <p>Reach out to us!</p>

        <form onSubmit={submit}>
            <input type="text" name={'name'} placeholder={'Your name*'}
                   value={formState.name} onChange={onChange}/>
            <br/>
            <input type="text" name={'email'} placeholder={'Your e-mail*'}
                   value={formState.email} onChange={onChange}/>
            <br/>
            <textarea name={'message'} placeholder={'Your message*'}
                      value={formState.message} onChange={onChange}/>
            <br/>
            <button>Send message</button>
        </form>
    </div>);
};

export {Form};