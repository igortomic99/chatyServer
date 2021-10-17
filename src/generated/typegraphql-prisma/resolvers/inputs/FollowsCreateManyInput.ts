import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowsCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  followerId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  followingId!: string;
}
