import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { Users } from "./Entities/Users";
import { Community } from "./Entities/Community";
import { Blog } from "./Entities/Blog";
import { SpecialTest } from "./Entities/SpecialTest";
import { GeneralTestSet } from "./Entities/GeneralTestSet";
import { SpecialTestSet } from "./Entities/SpecialTestSet";
import { Comment } from "./Entities/Comment";

const main = async () => {
	await createConnection({
		type: "mysql",
		database: "eduguide",
		username: "root",
		password: "",
		logging: true,
		synchronize: true,
		entities: [Users, Community, Blog, SpecialTest, GeneralTestSet, SpecialTestSet, Comment],
	});

	const app = express();
	app.use(cors());
	app.use(express.json());
	app.use(
		"/graphql",
		graphqlHTTP({
			schema,
			graphiql: true,
		})
	);

	app.use("/", express.static(`${__dirname}/app/`));

	app.get("/edu-check", (req, res) => {
		res.redirect("https://youtu.be/xvFZjo5PgG0");
	});
	app.get(/.*/, (req, res) => res.sendFile(`${__dirname}/app/index.html`));

	app.listen(process.env.PORT || 3001);
};

main().catch((err) => {
	console.log(err);
});
