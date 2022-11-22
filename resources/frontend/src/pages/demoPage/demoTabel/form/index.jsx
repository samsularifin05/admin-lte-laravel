import {
    Button,
    ReanderField,
    Field,
    // reduxForm,
    ReanderSelect,
} from "../../../../components";
import React from "react";
import Validate from "../validate";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

let FormDataUser = (props) => {
    return (
        <form onSubmit={props.handleSubmit} autoComplete="off">
            <div className="row">
                <div className="col-lg-6">
                    <Field
                        name="username"
                        component={ReanderField}
                        label="Username"
                        type="text"
                        readOnly={props.isEdit}
                        placeholder="Masukkan Username"
                    />
                </div>
                <div className="col-lg-6">
                    <Field
                        name="first_name"
                        component={ReanderField}
                        label="First Name"
                        type="text"
                        placeholder="Masukkan First Name"
                    />
                </div>
                <div className="col-lg-6">
                    <Field
                        name="last_name"
                        component={ReanderField}
                        label="Last Name"
                        type="text"
                        placeholder="Masukkan Last Name"
                    />
                </div>

                {props.isEdit === false ? (
                    <>
                        <div className="col-lg-6">
                            <Field
                                name="password"
                                component={ReanderField}
                                label="Password"
                                type="text"
                                customeCss="password-hide-css"
                                placeholder="Masukkan Password"
                            />
                        </div>
                    </>
                ) : null}

                <div
                    className={`col-lg-${
                        props.isEdit ? "6" : "12"
                    } text-right mt-2 btn-block`}
                >
                    &nbsp;
                    <Button title="Simpan" color="primary" block />
                </div>
            </div>
        </form>
    );
};

FormDataUser = reduxForm({
    form: "FormDataUser",
    enableReinitialize: true,
    validate: Validate,
})(FormDataUser);
export default connect((state) => {
    if (state?.utility?.modalShow?.isEdit === true) {
        return {
            isEdit: state?.utility?.modalShow?.isEdit,
            initialValues: {
                username: state?.utility?.modalShow?.data?.username,
                first_name: state?.utility?.modalShow?.data?.first_name,
                last_name: state?.utility?.modalShow?.data?.last_name,
                id: state?.utility?.modalShow?.data?.id,
            },
        };
    } else {
        return {
            isEdit: false,
        };
    }
})(FormDataUser);
