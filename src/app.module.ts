import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloDriver,
  ApolloDriverConfig,
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { AccountResolver } from './resolvers/account.resolver';
import { HttpModule } from '@nestjs/axios';
import { User } from './dto/account.dto';
import { UserResolver } from './resolvers/user.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      autoSchemaFile: 'schema.gql',
      driver: ApolloFederationDriver,
      buildSchemaOptions: { orphanedTypes: [User] },
    }),
    HttpModule,
  ],
  controllers: [AppController],
  providers: [AppService, AccountResolver, UserResolver],
})
export class AppModule {}
