export declare class User {
    id: number;
    email: string;
    username: string;
    constructor(user: Partial<User>);
}
export declare class AccountType {
    id: number;
    balance: number;
    crew: [User];
    constructor(account: Partial<AccountType>);
}
