export interface Account {
    id:number,
    name:string,
    createdOn:Date,
    owner: string,
    updatedOn: Date,
}

export interface AccountDetail {
    property: string,
    value: string,
}