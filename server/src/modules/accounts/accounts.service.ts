import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Account, AccountDocument } from 'schemas/account.schema';

@Injectable()
export class AccountsService {
    constructor(@InjectModel(Account.name) private accountModel: Model<AccountDocument>) {}

    async getAccounts():Promise<Account[]> {
        return this.accountModel.find();
    }

    async getSingleAccount(id: number):Promise<Account|any> {
        return this.accountModel.findOne({id});
    }
}
