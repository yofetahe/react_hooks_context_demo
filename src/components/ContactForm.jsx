import React, { useState } from "react";
import { Segment, Form, Input, Button } from "semantic-ui-react";
import { useContactsContext } from "../context/ContactContext";

export default function ContactForm(){
    const name = useFormInput("");
    const email = useFormInput("");

    const { addContact } = useContactsContext();

    const onSubmit = () => {
        addContact(name.value, email.value);
        name.onReset();
        email.onReset();
    };

    return (
        <Segment basic>
            <Form onSubmit={onSubmit}>
                <Form.Group widths="3">
                    <Form.Field width={6}>
                        <Input placeholder="Enter Name" {...name} required />
                    </Form.Field>
                    <Form.Field width={6}>
                        <Input placeholder="Enter Email" {...email} type="email" required />
                    </Form.Field>
                    <Form.Field width={4}>
                        <Button fluid primary>
                            New Contact
                        </Button>
                    </Form.Field>
                </Form.Group>
            </Form>
        </Segment>
    );
}

function useFormInput(initialValue) {

    const [value, setValue] = useState(initialValue);

    function handleChange(e){
        setValue(e.target.value);
    }

    function handleReset(){
        setValue("");
    }

    return { value, onChange: handleChange, onReset: handleReset }
}