export interface Account {
    id:number,
    name:string,
    createdOn:Date,
    owner: string,
}

export interface AccountDetail {
    property: string,

    value: string,
}