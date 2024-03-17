import LoadingBar from "react-top-loading-bar";
import Loading from "react-fullscreen-loading";
import Select from "react-select";
import Axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const server =
    document.querySelector('meta[name="base_url"]').content + "/api/";

export const removeWindowClass = (classList) => {
    const window = document && document.getElementById("root");
    if (window) {
        // @ts-ignore
        window.classList.remove(classList);
    }
};
export const addWindowClass = (classList) => {
    const window = document && document.getElementById("root");
    if (window) {
        // @ts-ignore
        window.classList.add(classList);
    }
};
export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
};
export function postData(endpoint, data) {
    let config = {
        headers: {
            "x-auth-token": getItem("userdata"),
        },
    };
    return new Promise((resolve, reject) => {
        Axios.post(server + endpoint, data, config)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err?.response?.data || "Tidak Terhubung Keserver");
            });
    });
}
export const calculateWindowSize = () => {
    let currentSize = "";
    if (!currentSize) {
        currentSize =
            window.innerWidth >= 1200
                ? "lg"
                : window.innerWidth >= 600
                ? "md"
                : window.innerWidth >= 375
                ? "sm"
                : window.innerWidth >= 300
                ? "xs"
                : "xxs";

        window.addEventListener("resize", function () {
            const newSize =
                window.innerWidth >= 1200
                    ? "lg"
                    : window.innerWidth >= 600
                    ? "md"
                    : window.innerWidth >= 375
                    ? "sm"
                    : window.innerWidth >= 300
                    ? "xs"
                    : "xxs";

            if (newSize !== currentSize) {
                currentSize = newSize;
            }
        });
    }

    return currentSize;
};

export const JSONToCSVConvertor = (JSONData, ReportTitle, ShowLabel) => {
    const arrData =
        typeof JSONData !== "object" ? JSON.parse(JSONData) : JSONData;

    let CSV = "";

    if (ShowLabel) {
        let name = "";

        for (const index in arrData[0]) {
            name += index + ",";
        }

        name = name.slice(0, -1);

        CSV += name + "\r\n";
    }

    for (let i = 0; i < arrData.length; i++) {
        let row = "";

        for (const index in arrData[i]) {
            row += `"${arrData[i][index]}",`;
        }

        row = row.slice(0, row.length - 1);

        CSV += row + "\r\n";
    }

    if (CSV === "") {
        alert("Invalid data");
        return;
    }

    let fileName = "";
    fileName += ReportTitle.replace(/ /g, "_");

    const uri = "data:text/csv;charset=utf-8," + escape(CSV);

    const link = document.createElement("a");
    link.href = uri;
    link.style.visibility = "hidden";
    link.download = fileName + ".csv";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export const setItem = (nama, data) => {
    localStorage.setItem(nama, JSON.stringify(data));
};
export const getItem = (nama) => {
    return localStorage.getItem(nama) === null
        ? []
        : JSON.parse(localStorage.getItem(nama) || "");
};
export const getMeta = (metaName) => {
    const metas = document.getElementsByTagName("meta");

    for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute("name") === metaName) {
            return metas[i].getAttribute("content");
        }
    }

    return "";
};
export const LoadingTopBar = (color, progress) => {
    return <LoadingBar color={color || "red"} progress={progress} />;
};
export const LoadingContent = () => {
    return (
        <Loading
            loading
            background="rgba(0, 0, 0, 0.35)"
            loaderColor="rgba(94, 147, 117, 1)"
        />
    );
};

export const openTab = (url) => {
    url === undefined ? alert("url is required") : window.open(url);
};

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});
export function ToastNotification(status, text) {
    return new Promise((resolve, reject) => {
        Toast.fire({
            icon: status,
            title: text,
        })
            .then(resolve("berhasil"))
            .catch(reject("error"));
    });
}
export const removeItem = (nama) => {
    localStorage.removeItem(nama);
};
export const ReanderField = ({
    input,
    label,
    type,
    readOnly,
    placeholder,
    id,
    tabIndex,
    autoFocus,
    ref,
    customeCss,
    minLength,
    defaultValue,
    maxLength,
    uppercase,
    textColor = "text-black",
    formGroup,
    iconFormGroup,
    meta: { touched, error, warning },
}) => (
    <div className="form-group">
        {label && (
            <label htmlFor="" className={textColor}>
                {label || <> &nbsp; </>}
            </label>
        )}
        <div className="input-group">
            <input
                onKeyPress={(event) => {
                    if (event.key === "Enter") {
                        event.preventDefault(); //<===== This stops the form from being submitted
                    } else {
                    }
                }}
                {...input}
                tabIndex={tabIndex}
                ref={ref}
                autoComplete="off"
                type={type}
                id={id}
                style={{ textTransform: uppercase ? "uppercase" : "none" }}
                className={`form-control ${touched && error && "is-invalid "} ${
                    customeCss || ""
                } `}
                readOnly={readOnly}
                minLength={minLength}
                maxLength={maxLength}
                placeholder={placeholder}
            />
            {formGroup && (
                <div className="input-group-append">
                    <div className="input-group-text">
                        <span className={iconFormGroup}></span>
                    </div>
                </div>
            )}
            {touched &&
                ((error && (
                    <span className="error invalid-feedback">{error}.</span>
                )) ||
                    (warning && <p>{warning}</p>))}
        </div>
    </div>
);

export const ReanderSelect = ({
    input,
    label,
    readOnly,
    placeholder,
    options,
    onChange,
    id,
    disabled,
    tabIndex,
    meta: { touched, error, warning },
    value,
    textColor = "text-black",
}) => (
    <div className="form-group">
        <label htmlFor={id} className={textColor}>
            {label}
        </label>
        <Select
            {...input}
            id={id}
            readOnly={readOnly}
            onChange={(value) => input.onChange(value)}
            onBlur={() => input.onBlur(input.value)}
            tabIndex={tabIndex}
            placeholder={placeholder}
            isDisabled={disabled}
            options={options}
            styles={{
                control: (base, state) => ({
                    ...base,
                    border: touched && error && "1px solid red",
                    boxShadow: "none",
                    "&:hover": {
                        border: touched && error && "1px solid red",
                        boxShadow: "none",
                    },
                }),
                // Fixes the overlapping problem of the component
                menu: (provided) => ({ ...provided, zIndex: 9999 }),
            }}
        />
        {touched &&
            ((error && (
                <span className="error invalid-feedback">{error}.</span>
            )) ||
                (warning && <p>{warning}</p>))}
    </div>
);
