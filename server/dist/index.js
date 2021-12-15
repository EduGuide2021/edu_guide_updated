"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const express_graphql_1 = require("express-graphql");
const Schema_1 = require("./Schema");
const cors_1 = (0, tslib_1.__importDefault)(require("cors"));
const typeorm_1 = require("typeorm");
const Users_1 = require("./Entities/Users");
const Community_1 = require("./Entities/Community");
const Blog_1 = require("./Entities/Blog");
const SpecialTest_1 = require("./Entities/SpecialTest");
const main = () => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    yield (0, typeorm_1.createConnection)({
        type: "mysql",
        host: "us-cdbr-east-04.cleardb.com",
        database: "heroku_23113f36d6f524d",
        username: "b2fbcb4c43fedc",
        password: "12dddb35",
        logging: true,
        synchronize: true,
        entities: [Users_1.Users, Community_1.Community, Blog_1.Blog, SpecialTest_1.SpecialTest],
    });
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
        schema: Schema_1.schema,
        graphiql: true,
    }));
    app.use("/", express_1.default.static(`${__dirname}/app/`));
    app.get("/edu-check", (req, res) => {
        res.redirect("https://youtu.be/xvFZjo5PgG0");
    });
    app.get(/.*/, (req, res) => res.sendFile(`${__dirname}/app/index.html`));
    app.get("/test", (req, res) => {
        res.send("hello");
    });
    app.listen(process.env.PORT || 3001, () => {
        console.log("SERVER RUNNING ON PORT 3001");
    });
});
main().catch((err) => {
    console.log(err);
});
//# sourceMappingURL=index.js.map