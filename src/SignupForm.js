import React, { useState } from "react";
import Alert from "./Alert";
import { v4 as uuid } from 'uuid';
import { useNavigate } from "react-router-dom";
import UserApi from "./UserApi";
import Button from 'react-bootstrap/Button';

function SignupForm() {
    const navigate = useNavigate();
    // const [isChecked, setIsChecked] = useState(false);
    const INITIAL_STATE = {
        firstName: "",
        lastName: "",
        email: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [formErrors, setFormErrors] = useState([]);
    // console.debug(
    //     "SignupForm",
    //     "signup=", typeof signup,
    //     "formData=", formData,
    //     "formErrors=", formErrors,
    // );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault();

        let result = await UserApi.signup({ id: uuid(), ...formData })
        // console.log("handleSubmit result is ", result)
        if (result) {
            navigate("/")
        }
        else {
            setFormErrors(result.errors);
        }
        setFormData(INITIAL_STATE)

    }
    //if form is submitted, redirect to home page. Otherwise, load form
    return (
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <h2 className="mb-3">Yodlr Registration Portal</h2>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>First name</label>
                            <input
                                name="firstName"
                                className="form-control"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Last name</label>
                            <input
                                name="lastName"
                                className="form-control"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <br></br>
                        {formErrors.length
                            ? <Alert type="danger" messages={formErrors} />
                            : null
                        }
                        <Button variant="dark"
                            type="submit"
                            className="btn btn-primary float-right"
                        >
                            Submit
                        </Button>
                    </form><br></br>
                    <Button variant="light" onClick={() =>
                        navigate(`/admin`)
                    }>
                        Admin Page
                    </Button>
                </div>
            </div>
        </div>
    );
}


export default SignupForm;