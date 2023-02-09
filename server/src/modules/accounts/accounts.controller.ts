import { Controller, Get, Param } from '@nestjs/common';

import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly service: AccountsService){};

    @Get("/")
    async getAccounts() {
        return await this.service.getAccounts();
    }

    @Get("/:id")
    async getSingleAccount(@Param("id") id:number) {
        return await this.service.getSingleAccount(id);
    }
}
