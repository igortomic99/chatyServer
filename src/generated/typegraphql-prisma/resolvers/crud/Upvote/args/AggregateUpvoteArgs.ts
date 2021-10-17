import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UpvoteOrderByWithRelationInput } from "../../../inputs/UpvoteOrderByWithRelationInput";
import { UpvoteWhereInput } from "../../../inputs/UpvoteWhereInput";
import { UpvoteWhereUniqueInput } from "../../../inputs/UpvoteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateUpvoteArgs {
  @TypeGraphQL.Field(_type => UpvoteWhereInput, {
    nullable: true
  })
  where?: UpvoteWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UpvoteOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UpvoteOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UpvoteWhereUniqueInput, {
    nullable: true
  })
  cursor?: UpvoteWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
