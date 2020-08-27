const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;
const RocketType = require("./rocket_type.js");

const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: { type: GraphQLInt },
    rocket: { type: RocketType },
    launch_year: { type: GraphQLString },
    launch_date_utc: { type: GraphQLString },
    details: { type: GraphQLString },
    mission_name: { type: GraphQLString },
  }),
});

module.exports = LaunchType;
