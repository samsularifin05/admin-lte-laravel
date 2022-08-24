import React, { useEffect } from "react";
import { postData, removeItem, ToastNotification } from "../../components";
import { withRouter } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Logout = (props) => {
    useEffect(() => {
        removeItem("userdata");
        props.history.push("/");
    });

    return <div>
        <Skeleton width={"100%"} height={1000} />
    </div>;
};

export default withRouter(Logout);
