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
 *     SQL small seeder:

 INSERT INTO Users VALUES (1, 'Cata', 'cata@gmail.com', 'Developer', '12wq!@WQ', 0);
 INSERT INTO Projects VALUES (100, 'MyFirstProject', 'my-project.com', 1);
 INSERT INTO Tasks VALUES (1000, 'Do First Thing', 'user story', 'low', 'in progress', 'fixed', 'We need to do first things first because otherwise we cannot finish the things.', 100);
 INSERT INTO TimeTrackers VALUES (1000, 10, 3, 7);
 INSERT INTO UserTask VALUES (50, 1, 1000, 'reporter');
 INSERT INTO UserTask VALUES (51, 1, 1000, 'asignee');

 */

/**
 *     Useful terminal commands:
 *
 * Create new migration (with name 'add-associations')
 *     sequelize migration:generate --name add-associations
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
