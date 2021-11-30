"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const apollo_server_1 = require("apollo-server");
const mongoose_1 = __importDefault(require("mongoose"));
function startServer(typeDefs, resolvers) {
    mongoose_1.default.connect("mongodb+srv://recruiters:portfolio@cluster0.s3koe.mongodb.net/users?retryWrites=true&w=majority"),
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        };
    const server = new apollo_server_1.ApolloServer({
        typeDefs,
        resolvers,
    });
    server
        .listen({ port: process.env.PORT || 4000 })
        .then(({ url }) => console.log(`🔥 Server started! at ${url}`));
}
exports.startServer = startServer;
//# sourceMappingURL=startServer.js.map