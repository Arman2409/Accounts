import React from "react";
import AccountsList from "@/components/AccountsList";
import axios from "axios";

export async function getStaticProps(context:any) {
    const resp = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/accounts");
    return {
        props: {
            data: resp.data
        }
    }
}

const AccountsPage:React.FC<any> = ({ data }) => {
    console.log(data);
    return (
        <div className="w-100 h-100">
            <AccountsList data={data}/>
        </div>
    )
}

export default AccountsPage;