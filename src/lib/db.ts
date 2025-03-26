import { Sequelize } from "sequelize";
import pg from "pg"
const sequelize = new Sequelize("chatdashboard", "postgres", "1234", {
    host: "localhost",
    dialect: "postgres",
    dialectModule: pg, 
    logging: false,
});

 export async function syncDatabase() {
  try {
    await sequelize.sync({ force: true }); // This will create tables
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to synchronize the database:', error);
  }
}




export default sequelize;