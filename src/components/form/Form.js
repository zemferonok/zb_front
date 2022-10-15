import React, {useState} from 'react';

const Form = () => {

    const [formState, setFormState] = useState({name: '', email: '', message: ''})

    const submit = (event) => {
        event.preventDefault();
        console.log('submit')

        if (!formState.name || !formState.email || !formState.message) return;

        console.log(formState)
        setFormState({name: '', email: '', message: ''})
    }

    const onChange = (event) => {
        // console.log({[event.target.name]: event.target.value})
        setFormState({...formState, [event.target.name]: event.target.value})
    }

    return (<div>
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
            <button>send</button>
        </form>
    </div>);
};

// export default Form;
export {Form};