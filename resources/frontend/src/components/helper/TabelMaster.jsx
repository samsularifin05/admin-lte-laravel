import { Button, Input, Spin, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { JSONToCSVConvertor, calculateWindowSize, getItem } from "./index";
import { useSelector } from "react-redux";

const TableMaster = (props) => {
    const {
        dataSource,
        columns,
        addButtonTitle,
        addButtonTitle2,
        addButtonTitle3,
        rowKey,
        total,
        loading,
        isLoading = false,
        changePagenation,
        onAddButtonClick,
        scrollX,
        exportCsv,
        handleSearch,
        onAddButtonClick2,
        onAddButtonClick3,
        hiddenButton,
        hiddenButton2,
        hiddenButton3,
        expandable,
        disabledPagenation,
        disabledSearch,
        rowSelection,
        id,
        footer,
        title,
        summary,
        disableButton,
        disableButton2,
        disableButton3,
        width = 1300,
    } = props;

    const utility = useSelector((state) => state.utility);

    const [value, setvalue] = useState("");
    const [data, setData] = useState(dataSource);
    const [exporting, setExporting] = useState(false);

    useEffect(() => {
        setData(dataSource);
    }, [dataSource]);

    useState();
    const handleExportToExcel = async () => {
        setExporting(true);
        const cleanData = dataSource.map(
            ({
                status_aktif,
                input_by,
                edit_date,
                edit_by,
                input_date,
                __v,
                _id,
                ...rest
            }) => rest
        );
        setTimeout(() => {
            JSONToCSVConvertor(cleanData, "Export Excel", true);
            setExporting(false);
        }, 500);
    };
    const handleSearchChange = (e) => {
        setvalue(e.target.value);
        if (handleSearch === undefined) {
            const regex = new RegExp(`.*${e.target.value}.*`, "gi");

            const result = dataSource.filter((item) => {
                return columns.some((column) =>
                    regex.test(item[column.dataIndex])
                );
            });

            if (e.target.value === "") {
                setData(dataSource);
            } else {
                setData(result);
            }
        } else {
            handleSearch(e);
        }
    };

    const handleTableChange = (pagination) => {
        if (changePagenation) {
            changePagenation({
                skip: pagination.current,
                total: pagination.total,
                limit: pagination.pageSize,
                q: value || "",
            });
        }
    };

    const tableProps = {
        loading,
    };

    const screen = calculateWindowSize();
    const pageSizeOptions = [10, 20, 30, 40];

    return (
        <div className="row">
            <div className={screen === "lg" ? "col-3" : "col-6"}>
                {!disabledSearch && (
                    <Input
                        placeholder="Search"
                        prefix={<SearchOutlined />}
                        value={value}
                        onChange={handleSearchChange}
                        style={{ marginBottom: "16px" }}
                    />
                )}
            </div>
            <div
                className={`${screen === "lg" ? "col-9" : "col-6"} text-right`}
            >
                {!hiddenButton && addButtonTitle !== undefined && (
                    <Button
                        disabled={disableButton || false}
                        type="primary"
                        onClick={onAddButtonClick}
                    >
                        {addButtonTitle}
                    </Button>
                )}
                {!hiddenButton2 && addButtonTitle2 !== undefined && (
                    <Button
                        disabled={disableButton2 || false}
                        type="primary"
                        className="ms-2"
                        onClick={onAddButtonClick2}
                    >
                        {addButtonTitle2}
                    </Button>
                )}
                {!hiddenButton3 && addButtonTitle3 !== undefined && (
                    <Button
                        disabled={disableButton3 || false}
                        type="primary"
                        className="ms-2"
                        onClick={onAddButtonClick3}
                    >
                        {addButtonTitle3}
                    </Button>
                )}
            </div>

            <div className="col-12 mt-4">
                <Table
                    {...tableProps}
                    id={id}
                    rowSelection={rowSelection}
                    dataSource={data}
                    columns={columns}
                    loading={utility.getLoading.table || isLoading}
                    rowKey={rowKey}
                    scroll={{ x: scrollX ? (width ? width : 1300) : 0 }}
                    pagination={
                        disabledPagenation
                            ? false
                            : {
                                  total: total || 0,
                                  pageSizeOptions: pageSizeOptions,
                                  showSizeChanger: true,
                                  showQuickJumper: true,
                                  showTotal: (total, range) =>
                                      `${range[0]}-${range[1]} of ${total} items`,
                              }
                    }
                    expandable={expandable}
                    onChange={handleTableChange}
                    footer={footer}
                    title={title}
                    summary={summary}
                />
                {exportCsv && (
                    <Button
                        type="primary"
                        onClick={handleExportToExcel}
                        disabled={exporting}
                    >
                        {exporting ? (
                            <>
                                <Spin />
                                &nbsp; Export to Csv
                            </>
                        ) : (
                            "Export to Csv"
                        )}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default TableMaster;
