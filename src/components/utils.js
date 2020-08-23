import axios from "axios";

export const get_result = (url = "http://127.0.0.1:5000", db, statement) => {
    return axios({
        method: "get",
        url: url + "/" + db + "?query=" + statement,
    })
};

export const parseTable = (data) => {
    if (data === null) return data;
    let header = [];
    for (let itm of Object.keys(data[0])) {
        header.push({
            title: itm,
            dataIndex: itm,
            key: itm,
        });
    }
    return header;
};
