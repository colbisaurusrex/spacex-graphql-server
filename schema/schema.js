const graphql = require("graphql");
const axios = require("axios");
const _ = require("lodash");
const SpacexService = require("../services/spacex.js");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
} = graphql;
const LaunchType = require("./launch_type.js");

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      resolve() {
        return SpacexService.getAllLaunches();
      },
    },
    launch: {
      type: LaunchType,
      args: { flight_number: { type: GraphQLID } },
      resolve(parentValue, args) {
        return SpacexService.getLaunch({ id: args.flight_number });
      },
    },
    upcomingLaunches: {
      type: new GraphQLList(LaunchType),
      resolve() {
        return SpacexService.getUpcomingLaunches();
      },
    },
    nextLaunch: {
      type: LaunchType,
      resolve() {
        return SpacexService.getNextLaunch();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
