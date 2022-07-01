import React, { useEffect } from "react";
import { removeItem } from "../../components";
import { withRouter } from "react-router-dom";

const Logout = (props) => {
    useEffect(() => {
        removeItem("userdata");
        props.history.push("/");
    });

    return <div></div>;
};

export default withRouter(Logout);
