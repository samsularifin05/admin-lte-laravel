import { utilityAction } from "../../../../reduxStore";

export const submit = (data) => {
    return async (dispatch, getState) => {
        let state = getState();
        console.log(state.form?.FormDataUser?.values);
        console.log(data);
    };
};

export const handleEdit = (data) => {
    return async (dispatch, getState) => {
        dispatch(
            utilityAction.modalShow({
                isModalShow: true,
                isEdit: true,
                data: data,
            })
        );
    };
};
