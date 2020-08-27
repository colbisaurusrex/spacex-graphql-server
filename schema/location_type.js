const graphql = require("graphql");

const { GraphQLString, GraphQLObjectType } = graphql;

const LocationType = new GraphQLObjectType({
  name: "Location",
  fields: () => ({
    side_id: { type: GraphQLString },
    site_name_long: { type: GraphQLString },
  }),
});
