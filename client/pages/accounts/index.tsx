import React from "react";
import AccountsList from "@/components/AccountsList";
import axios, {AxiosResponse} from "axios";

export async function getStaticProps(context:any) {
    let data:any = {};
    await axios.get(process.env.NEXT_PUBLIC_API_URL + "/accounts").then((resp:AxiosResponse) => {
        data = resp.data;
    }).catch((error) => {
        data.message = error.message;
    });
    return {
        props: {
            data: data
        }
    }
}

const AccountsPage:React.FC<any> = ({ data }) => {;
    return (
        <div className="w-100 h-100">
            <AccountsList data={data}/>
        </div>
    )
}

export default AccountsPage;