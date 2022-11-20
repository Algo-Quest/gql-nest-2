import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class AccountInput {
  @Field()
  readonly id: number;

  @Field()
  readonly balance: string;

  @Field()
  readonly crew: string;
}
