const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const router = require('./router.js');
const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use(router);

app.listen(port, () => console.log(`JIRA app listening on port ${port}!`));

/**
 *     Useful terminal commands:
 *
 * Create User model (so a new migration)
 *     npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
 *
 * Run migrations
 *     npx sequelize-cli db:migrate
 *
 * Undo to last migration
 *     npx sequelize-cli db:migrate:undo
 *
 * Undo all migrations
 *     npx sequelize-cli db:migrate:undo:all
 *
 * Undo all migrations until a given one
 *     npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
 *
 * Create seeder file
 *     npx sequelize-cli seed:generate --name demo-user
 *
 * Run seeders
 *     npx sequelize-cli db:seed:all
 *
 * Undo last seeder
 *     npx sequelize-cli db:seed:undo
 *
 * Undo a specific seeder
 *     npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
 *
 * Undo all seeders
 *     npx sequelize-cli db:seed:undo:all
 */
