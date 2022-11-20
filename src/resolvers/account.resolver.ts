import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
  ResolveReference,
} from '@nestjs/graphql';
import { AccountType, User } from 'src/dto/account.dto';
import { AccountInput } from 'src/dto/account.input';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, take } from 'rxjs';

@Resolver((of) => AccountType)
export class AccountResolver {
  constructor(private httpService: HttpService) {}

  @Query((returns) => [AccountType])
  async accounts() {
    let result = await this.httpService.axiosRef.get(
      'https://node-own.herokuapp.com/accounts',
    );

    return result.data;
  }

  @ResolveField((of) => [User])
  public crew(@Parent() user: AccountType) {
    console.log('++++++++++++++++++++++++++');
    console.log(user);
    let r = user.crew.map((id) => ({ __typename: 'User', id }));
    console.log(r);
    return r;
  }

  // @Mutation((returns) => AccountType)
  // async createAccount(
  //   @Args('input') input: AccountInput,
  // ): Promise<AccountType> {
  //   return Promise.resolve({
  //     id: 1,
  //     balance: 'dnwqdjnw',
  //     crew: '',
  //   });
  // }

  @Query((returns) => String)
  async helloAccount() {
    return 'hello';
  }

  // @ResolveReference()
  // async resolveReference(reference: { __typename: string; id: number }) {
  //   console.log('tom & jerry +++++++++++++++++++');

  //   console.log(reference);
  //   let r = await this.httpService.axiosRef.get(
  //     'https://node-own.herokuapp.com/users',
  //   );

  //   // console.log();
  //   return r.data.find((f) => f.id == reference.id);
  // }
}
