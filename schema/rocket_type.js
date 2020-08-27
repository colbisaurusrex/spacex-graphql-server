const graphql = require("graphql");
const { GraphQLString, GraphQLObjectType } = graphql;

const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
  }),
});

module.exports = RocketType;
