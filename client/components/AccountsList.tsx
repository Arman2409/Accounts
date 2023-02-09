import React, {useEffect, useState} from "react";
import Link from "next/link";
import axios, {AxiosResponse} from "axios";
import {message, Table} from "antd";
import {Account} from "@/types/types";

const AccountsList:React.FC = () => {
    const [accounts, setAccounts] = useState<Account[]>([]);

    const columns:any[] = [
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
            title: "actions",
            render: (account:any) => <Link href={`/accounts/${account.id}`}>
                View
            </Link>
        }
    ]

    useEffect(() => {
       axios.get(process.env.NEXT_PUBLIC_API_URL + "/accounts").then((resp: AxiosResponse) => {
           setAccounts(resp.data.map((account: Account, index: number) => ({
               ...account,
               createdOn: account.createdOn.toString().slice(0, 10),
           })))
       }).catch((error) => {
           message.error(error.message);
       })
    }, [])

    return (
        <div className={""}>
           <Table
            />
        </div>
    )
}

export default AccountsList;