import {
    React,
    useDispatch,
    setItem,
    useEffect,
    postData,
    ToastNotification,
    getItem,
} from "../../components";
import { actionTheme, utilityAction } from "../../reduxStore";
import { withRouter } from "react-router-dom";
import FormLogin from "./form";

const Login = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        // if (getItem("userdata").length === 0) {
        //     props.history.push("/");
        // }else{
        //     props.history.push("/dashboard");
        // }
        dispatch(actionTheme.handleSetPageSidebar(false));
        dispatch(actionTheme.handleSetFooter(false));
        dispatch(actionTheme.handleSetPageHeader(false));
        return () => {
            dispatch(actionTheme.handleSetPageHeader(true));
            dispatch(actionTheme.handleSetPageSidebar(true));
            dispatch(actionTheme.handleSetFooter(true));
            dispatch(actionTheme.handleSetPageHeader(true));
        };
    }, [dispatch]);

    const handleSubmit = async (data) => {
        dispatch(utilityAction.setLoading(true));
        try {
            let feedback = await postData("login", {
                email: data.email,
                password: data.password,
            })
            if(feedback.status === 200){
                setItem("userdata", feedback.data.result);
                dispatch(utilityAction.setLoading(false));
                setTimeout(() => {
                    props.history.push("/dashboard");
                    window.location.reload();
                }, 300);
            }
        } catch (error) {
            console.log(error)
             ToastNotification("info", error?.message);
             dispatch(utilityAction.setLoading(false));
        }
    };
    return (
        <div className="login-box container" style={{ marginTop: "10%" }}>
            <div className="card card-outline card-primary">
                <div className="card-header text-center">
                    <div className="h1">
                        <b>Admin</b>LTE
                    </div>
                </div>
                <div className="card-body">
                    <p className="login-box-msg">
                        Sign in to start your session
                    </p>
                    <FormLogin onSubmit={(data) => handleSubmit(data)} />
                </div>
            </div>
        </div>
    );
};

export default withRouter(Login);
