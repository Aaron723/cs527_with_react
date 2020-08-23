import React, {Component} from "react";
import {PageHeader, Button, Input, Divider, Table} from "antd";
import {get_result} from "./utils";
import {parseTable} from "./utils";

const {TextArea} = Input;
export default class Query extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statement: null,
            database: "mysql",
            result: null,
            query_time: null,
            // tableHead: parseTable(result),
        };
    }

    txtChanged = (e) => {
        this.setState({statement: e.target.value});
    };
    setDB = (e) => {
        this.setState({database: e});
    };
    parseResult = (url, db, statement) => {
        get_result(url, db, statement).then((response) => {
            this.setState({
                query_time: response["data"]["query_time"],
            });
            let res = response["data"]["result"];
            this.setState({result: res});
        }).catch((err) => {
            alert(err);
        });
    }

    render() {
        return (
            <div className="site-page-header-ghost-wrapper">
                <PageHeader
                    ghost={false}
                    onBack={() => window.history.back()}
                    title="Query the database"
                    subTitle="Please select the database to query"
                    extra={[
                        <Button
                            value="mysql"
                            onClick={() => {
                                this.setDB("mysql");
                            }}
                        >
                            MySQL
                        </Button>,
                        <Button
                            value="redshift"
                            onClick={() => {
                                this.setDB("redshift");
                            }}
                        >
                            RedShift
                        </Button>,
                    ]}
                />
                <div>your current database is: {this.state.database}</div>
                <>
                    <TextArea
                        value={this.state.statement}
                        placeholder="Please type your query sentence"
                        allowClear
                        onChange={(e) => this.txtChanged(e)}
                    />
                    <Button
                        type="primary"
                        style={{width: "100%"}}
                        onClick={() => this.parseResult("http://127.0.0.1:5000", this.state.database, this.state.statement)}
                    >
                        Submit
                    </Button>
                    <Divider/>
                    <PageHeader
                        ghost={false}
                        onBack={() => window.history.back()}
                        className="site-page-header"
                        title="Result"
                        subTitle={"Query time: " + this.state.query_time}
                    />
                    <>
                        <Table
                            dataSource={this.state.result}
                            columns={parseTable(this.state.result)}
                        />
                    </>
                </>
            </div>
        );
    }
}
