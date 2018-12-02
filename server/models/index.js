const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;










// var Sequelize = require('sequelize');
// var sequelize = new Sequelize ('test_db', 'postgres', 'Kellogs75', {
//   dialect: 'postgres'
// });
//
// const models = {
//   User_Profile: sequelize.import('./user_profile'),
//   Group_Member: sequelize.import('./group_member'),
//   Room: sequelize.import('./room'),
//   Message: sequelize.import('./message'),
//   Tasks: sequelize.import('./tasks'),
//   Event_Notifications: sequelize.import('../models/event_notifications')
// };
//
// models.sequelize = sequelize;
// export default models;











// module.exports = {
//   User_Profile,
//   Group_Member,
//   Room,
//   Message,
//   Tasks,
//   Event_Notifications
// };

// export connection
// module.exports.sequelize = sequelize;

// var User_Profile = sequelize.define('user_profile', {
//   user_email: {
//     type: Sequelize.STRING,
//     primaryKey: true
//   },
//   display_name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   password: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   profile_picture: Sequelize.STRING
// });
//
// var Group_Member = sequelize.define('group_member', {
//   member_id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true
//   },
//   user_email: Sequelize.STRING,
//   date_joined: Sequelize.DATE,
//   room_id: Sequelize.INTEGER
// });
//
// var Room = sequelize.define('room', {
//   room_id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true
//   },
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   description: Sequelize.TEXT,
//   private: {
//     type: Sequelize.BOOLEAN,
//     allowNull: false
//   },
//   theme: Sequelize.INTEGER,
//   room_photo: Sequelize.STRING
// });
//
// var Message = sequelize.define('message', {
//   message_id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true
//   },
//   room_id: Sequelize.INTEGER,
//   user_email: Sequelize.STRING,
//   message_content: {
//     type: Sequelize.TEXT,
//     allowNull: false
//   },
//   date_sent: Sequelize.DATE
// });
//
// var Tasks = sequelize.define('tasks', {
//   task_id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true
//   },
//   user_email: Sequelize.STRING,
//   room_id: Sequelize.INTEGER,
//   task_name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   start_point: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   },
//   progress: Sequelize.INTEGER,
//   end_point: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   }
// });
//
// var Event_Notifications = sequelize.define('event_notifications', {
//   event_id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true
//   },
//   user_email: Sequelize.STRING,
//   room_id: Sequelize.INTEGER,
//   event: Sequelize.STRING
// });

// sequelize.sync().then(() => {
//   console.log(`Database & tables created!`)
// });
