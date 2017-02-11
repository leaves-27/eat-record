import mongodb from "mongodb";
import settings from "../settings";

const Db = mongodb.Db;
const Connection = mongodb.Connection;
const	Server = mongodb.Server;

module.exports = new Db(
	settings.db,
	new Server(
		settings.host,
		settings.port
	),
	{
		safe:true
	}
); 