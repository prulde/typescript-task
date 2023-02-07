import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
	process.env.DB_NAME as string,
	process.env.DB_USER as string,
	process.env.DB_PASSWORD,
	{
		dialect: "postgres",
		host: process.env.DB_HOST,
		port: process.env.DB_PORT as number | undefined
	}
);

export default sequelize;