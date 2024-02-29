import { Database } from "@drstrain/database";

export default const createDB = () => {
  return new Database('ang-l-fw');
};

export default const set = (db: Database, key: string, value: any){
  const result = db.set(key, value);
  return result;
}

export default const get = (db: Database, key: string){
  return db.get(key)
}
