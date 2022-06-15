import { getCurrentInstance, ref } from 'vue'
export function useDatabase(){
  const app = getCurrentInstance()
  const sqlite = app?.appContext.config.globalProperties.$sqlite

  const lastMessage = ref('')


  let db: any

  const maybeConnectDb = async () => {
    const connected = await db?.isExists()
    console.log("connected?", connected);
    if (!connected){
      db = await sqlite.createConnection("playground");
      await db?.open();
    }
    console.log("-- CONNECTION... --");
  }

  const initDb = async ()=>{
    await maybeConnectDb()
    await db.execute(`DROP TABLE IF EXISTS users;`);
    await db.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER)");

    await db.execute("INSERT INTO users (name, age) VALUES ('Juan', 45)");
    await db.execute("INSERT INTO users (name, age) VALUES ('Pedro', 34)");
    await db.execute("INSERT INTO users (name, age) VALUES ('María', 40)");
    await db.execute("INSERT INTO users (name, age) VALUES ('Fernando', 19)");

    lastMessage.value = 'Base de datos creada';
  }

  const getDbUsers = async () => {
    await maybeConnectDb()
    const res:any = await db.query("SELECT * FROM users");
    lastMessage.value = 'Datos de usuarios recibidos'
    return res.values;
  }

  const insertDbUser = async (name:string, age:number) => {
    await maybeConnectDb()
    const res:any = await db.execute(`INSERT INTO users (name, age) VALUES ('${name}', ${age})`);
    lastMessage.value = 'Usuario insertado. Resultado: ' + JSON.stringify(res)
    return res
  }

  return {
    initDb,
    lastMessage,
    getDbUsers,
    insertDbUser
  }
}