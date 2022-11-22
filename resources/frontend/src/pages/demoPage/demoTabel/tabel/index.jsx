import {
    React,
    Button,
    TabelMaster,
    Row,
    Col,
    useDispatch,
} from "../../../../components";
import { handleEdit } from "../redux";
const DataTabel = () => {
    const dispatch = useDispatch();
    const columns = [
        {
            title: "Username",
            dataIndex: "username",
            key: "username",
        },
        {
            title: "First Name",
            dataIndex: "first_name",
            key: "first_name",
        },
        {
            title: "Last Name",
            dataIndex: "last_name",
            key: "last_name",
        },

        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            align: "center",
            hidden: true,
            render: (cell, row) => {
                return (
                    <Row className={`text-center`}>
                        <Col size="12" className="mr-3 text-center">
                            <Button
                                type="button"
                                color="danger"
                                icon="fa-trash"
                            />{" "}
                            &nbsp;
                            <Button
                                type="button"
                                onClick={() => dispatch(handleEdit(row))}
                                color="info"
                                icon="fa-edit"
                            />
                        </Col>
                    </Row>
                );
            },
        },
    ];

    let data = [
        {
            id: 1,
            username: "samsularifin05",
            first_name: "Samsul",
            last_name: "Arifin",
        },
        {
            id: 2,
            username: "andra02",
            first_name: "Andra",
            last_name: "Sudrajat",
        },
    ];


    return (
        <TabelMaster
            createData={true}
            rowKey="id"
            columns={columns}
            dataSource={data}
        />
    );
};

export default DataTabel;
