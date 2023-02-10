import React, {useEffect, useState} from "react";
import Link from "next/link";
import {message, Table, Typography} from "antd";

import styles from "../styles/accountsList.module.scss";
import {Account} from "@/types/types";

const AccountsList: React.FC<any> = ({data}) => {
    const [accounts, setAccounts] = useState<Account[]>([]);

    const columns: any[] = [
        {
            dataIndex: "id",
            title: "ID"
        },
        {
            dataIndex: "name",
            title: "Name"
        },
        {
            dataIndex: "createdOn",
            title: "Created On"
        },
        {
            dataIndex: "owner",
            title: "Owner"
        },
        {
            title: "Action",
            render: (account: any) =>
                <Link
                    className={styles.accounts_link}
                    href={`/accounts/${account.id}`}>
                    View
                </Link>
        }
    ]

    useEffect(() => {
        if (data.message) {
            message.error(data.message);
            return;
        }
        setAccounts(data.map((account: Account) => ({
            ...account,
            createdOn: account.createdOn.toString().slice(0, 10),
            updatedOn: account.updatedOn.toString().slice(0, 10),
        })))
    }, [data, setAccounts])

    return (
        <div className={styles.accounts_cont}>
            <Typography.Title
                level={4}
                mark
                type="secondary">
                Accounts
            </Typography.Title>
            <Table
                className={styles.accounts_list}
                columns={columns}
                dataSource={accounts}
                rowKey="id"
                bordered
                pagination={false}
            />
        </div>
    )
}

export default AccountsList;