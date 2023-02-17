class UsersHelper {
  static UpdateLoginDate (pool, id, loginDate) {
    let query = `UPDATE firstweb.ms_user SET last_login='${loginDate}' WHERE id = ${id};`;
    // console.log(`QUERY: ${query}`);
    pool.query(query, function(err, result) {
      if (err) {
        console.log(err);
      }
    })
  }

  static getDateNow() {
    const now = new Date();
    const year = now.getFullYear(); // Returns the year (four digits)
    const month = now.getMonth() + 1; // Returns the month (0-11, so add 1 to get 1-12)
    const day = now.getDate(); // Returns the day of the month (1-31)
    const hour = now.getHours(); // Returns the hour (0-23)
    const minute = now.getMinutes(); // Returns the minute (0-59)
    const second = now.getSeconds(); // Returns the second (0-59)

    const output = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

    return output;
  }
}

module.exports = UsersHelper;