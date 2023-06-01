import pg from 'pg'



const pool = new pg.Pool({
  host:"batyr.db.elephantsql.com",
  user:"lvtprxbo",
  database:"lvtprxbo",
  password:"5A0RpY4h03AvUsYLMuOJUy8XALBZJOgz",
  port: 5432
})


async function fetchAll (SQL, params=[]) {
    const client = await pool.connect()
    try {
        const { rows } = await client.query(SQL, params)
        return rows
    } catch (error) {
        console.log(error);
    }finally{
        client.release()
    }
}

async function fetch(SQL, params = []) {
  const client = await pool.connect();
  try {
    const { rows: [row] } = await client.query(SQL, params);
    return row;
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
}


export {
    fetch, fetchAll
}