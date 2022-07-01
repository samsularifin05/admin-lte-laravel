import { postData, ToastNotification } from "../../../components";
import { utilityAction } from "../../../reduxStore";

export const login = () => {
    return async (dispatch, getState) => {
        let state = getState();
        let data = state?.form?.FormLogin?.values;

        dispatch(utilityAction.setLoading(true));
        postData("login", {
            email: data.email,
            password: data.password,
        })
            .then((res) => {
                console.log(res);
                dispatch(utilityAction.setLoading(false));
            })
            .catch((err) => {
                // console.log(err?.message);
                ToastNotification('info',err?.message)
                dispatch(utilityAction.setLoading(false));
            });
    };
};
