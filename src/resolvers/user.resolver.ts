import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { AccountType, User } from 'src/dto/account.dto';
import { HttpService } from '@nestjs/axios';

@Resolver((of) => User)
export class UserResolver {
  constructor(private httpService: HttpService) {}

  @Query((returns) => [User])
  async usersMy() {
    let result = await this.httpService.axiosRef.get(
      'https://node-own.herokuapp.com/users',
    );

    return result.data;
  }

  // @Query((returns) => [AccountType])
  // async accountCheck() {
  //   let result = await this.httpService.axiosRef.get(
  //     'https://node-own.herokuapp.com/accounts',
  //   );

  //   return result.data;
  // }

  // @ResolveField((of) => [AccountType])
  // public userCheck(@Parent() user: User) {
  //   console.log('user sent from user microservice');
  //   console.log(user);
  //   // let r = user.crew.map((id) => ({ __typename: 'User', id }));
  //   // console.log(r);
  //   return { __typename: 'Account', id: 1 };
  // }

  // @Query((returns) => String)
  // async helloAccount() {
  //   return 'hello';
  // }
}
