import { Card, ModalGlobal, PanelContent, React, useDispatch, useSelector } from "../../../components";
import DataTabel from "./tabel";
import FormDataUser from "./form"
import { selectorUtility } from "../../../reduxStore";
import { submit } from "./redux";
const DemoTabel = () => {
    const modal = useSelector(selectorUtility.getModal)
    const dispatch = useDispatch()
    return (
        <PanelContent
            title="Master DemoTabel"
            menu="Data Master"
            submenu="DemoTabel"
            headerContent
        >
            <Card title="Data DemoTabel">
                <DataTabel />
            </Card>
            <ModalGlobal title={`${modal.isEdit ? "Edit" : "Create"} User Data`}>
                <FormDataUser onSubmit={(data)=> dispatch(submit(data))}  />
            </ModalGlobal>
        </PanelContent>
    );
};

export default DemoTabel;
