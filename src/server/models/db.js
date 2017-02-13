import mongodb from "mongodb";
import fs from 'fs';
import settingsWrap from "../settings";

const settings = JSON.parse(fs.readFileSync(settingsWrap.settings));

const Db = mongodb.Db;
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