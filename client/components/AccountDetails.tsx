import React, {useEffect, useState} from "react";
import {message, Table, Typography} from "antd";
import axios, {AxiosResponse} from "axios";
import {NextRouter, useRouter} from "next/router"

import accountsStyles from "../styles/accountsList.module.scss";
import styles from "../styles/accountDetails.module.scss";
import {AccountDetail} from "@/types/types";

const convertCamelCase = (str: string) => {
    return str.replace(/([A-Z])/g, ' $1')
        .replace(/^./, function (str) {
            return str.toUpperCase();
        })
}
const AccountDetails: React.FC = () => {
    const [accountDetails, setAccountDetails] = useState<AccountDetail[]>([]);
    const router: NextRouter = useRouter();

    const columns: any[] = [
        {
            dataIndex: "property",
            render: (property: string) => <b>{property}</b>
        },
        {
            dataIndex: "value",
        }
    ];

    useEffect(() => {
        if (router.isReady) {
            const id: any = router.query.id;
            if (!Number(id)) {
                message.error("Error Occured");
                router.push("/404");
                return;
            }
            axios.get(process.env.NEXT_PUBLIC_API_URL + `/accounts/${id}`).then((resp: AxiosResponse) => {
                if (resp.data.length === 0) {
                    message.error("Account Not Found");
                    router.push("/404");
                    return;
                }
                const tableData: AccountDetail[] = Object.keys(resp.data[0]).flatMap((key: string) => {
                        if (key.startsWith("_")) return [];
                        return ({
                            property: convertCamelCase(key),
                            value: key == "createdOn" || key == "updatedOn" ? resp.data[0][key].toString().slice(0, 10) : resp.data[0][key],
                        })
                    }
                )
                setAccountDetails(tableData);
            }).catch((error) => {
                message.error(error.message);
            })
        }
    }, [router.isReady, setAccountDetails, router])

    return (
        <div className={accountsStyles.accounts_cont}>
            <Typography.Title
                level={4}
                mark
                type="secondary">
                Account Details
            </Typography.Title>
            <Table
                className={styles.account_list}
                bordered
                rowKey="property"
                columns={columns}
                pagination={false}
                dataSource={accountDetails}/>
        </div>
    )
}

export default AccountDetails;