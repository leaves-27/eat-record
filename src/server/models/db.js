import mongodb from "mongodb";
import settingsWrap from "../settings";
import fs from 'fs';
const settings = JSON.parse(fs.readFileSync(settingsWrap.settings));

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