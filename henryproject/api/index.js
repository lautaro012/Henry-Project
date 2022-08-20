//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const filterRating = require('./src/handlers/filterRating.js');
const getGenres = require('./src/handlers/getGenres.js');
const getPlatforms = require('./src/handlers/getPlataforms.js');
const { getVideogamesApi } = require('./src/handlers/getVideoGamesApi.js');
const filterGenres =require('./src/handlers/filterGenres');
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  // filterGenres();
  server.listen(3001, async() => {
   console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
