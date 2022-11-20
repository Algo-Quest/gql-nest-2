import { HttpService } from '@nestjs/axios';
export declare class UserResolver {
    private httpService;
    constructor(httpService: HttpService);
    usersMy(): Promise<any>;
}
