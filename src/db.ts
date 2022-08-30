import { Pool } from 'pg';

const connectionString = 'postgres://oatcswsm:z2R54JflTgtsZ6evw20GlOxWDeTJh6jd@motty.db.elephantsql.com/oatcswsm';

const db = new Pool({ connectionString });

export default db;