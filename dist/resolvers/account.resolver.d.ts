import { AccountType, User } from 'src/dto/account.dto';
import { HttpService } from '@nestjs/axios';
export declare class AccountResolver {
    private httpService;
    constructor(httpService: HttpService);
    accounts(): Promise<any>;
    crew(user: AccountType): {
        __typename: string;
        id: User;
    }[];
    helloAccount(): Promise<string>;
}
