import { ObjectType, Field, Int, ID, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  @Directive('@external')
  id: number;

  @Field()
  @Directive('@external')
  email: string;

  @Field()
  @Directive('@external')
  username: string;

  // only for bi - directional
  //from user bring -> user data
  // @Field((type) => [AccountType])
  // userCheck: AccountType[];

  constructor(user: Partial<User>) {
    Object.assign(user);
  }
}

@ObjectType()
// @Directive('@extends')
@Directive('@key(fields: "id")')
export class AccountType {
  @Field(() => ID)
  id: number;

  @Field()
  balance: number;

  // from account bring -> user data
  @Field((type) => [User])
  crew: [User];

  constructor(account: Partial<AccountType>) {
    Object.assign(account);
  }
}
