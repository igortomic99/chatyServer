import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowsWhereUniqueInput } from "../../../inputs/FollowsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteFollowsArgs {
  @TypeGraphQL.Field(_type => FollowsWhereUniqueInput, {
    nullable: false
  })
  where!: FollowsWhereUniqueInput;
}
