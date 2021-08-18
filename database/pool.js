const { Pool } = require('pg');

// Tyler's ElephantSQL URI
// const PG_URI = 'postgres://pjputbhw:0NVViIM6inhaueZBDXA5A7SGnRHVRUCU@chunee.db.elephantsql.com/pjputbhw';

// Savitri's ElephantSQL URI
const PG_URI = 'postgres://hkpfsayf:6197KAXdhYa4jc4ZZueic3KsoGm4Y1ok@chunee.db.elephantsql.com/hkpfsayf'

const pool = new Pool({ connectionString: PG_URI });

module.exports = {
  query: (text, params, callback) => {
    console.log('db pool executed query ->', text);
    return pool.query(text, params, callback);
  }
};
