var repository = {
  db_name: "InfoAppDB",
  start: function() {
    var db = window.openDatabase(this.db_name, "1.0", "InfoApp", 2000000);
    db.transaction(this.generateDB, this.errorCB, this.onDBCreated);
  },
  generateDB(tx) {
    // tx.executeSql("DROP TABLE IF EXISTS info");
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS info (id integer PRIMARY KEY, date TEXT, city TEXT, country TEXT, currency TEXT, quotation TEXT, temperature TEXT)`
    );
  },
  errorCB(err) {
    alert("Error processing SQL: " + err.code);
  },

  // Transaction success callback
  onDBCreated() {
    console.log("db created");
  },

  queryDB: function(stmt, callback) {
    console.log(this.db_name);

    var db = window.openDatabase(this.db_name, "1.0", "InfoApp", 200000);
    db.transaction(
      function(tx) {
        tx.executeSql(
          stmt,
          [],
          function(tx, results) {
            callback(results.rows);
          },
          this.errorCB
        );
      },
      function() {
        console.log("erro tx");
      }
    );
  },
  getAll(callback) {
    this.queryDB(
      "SELECT date,city,country,currency,quotation,temperature FROM info",
      function(results) {
        console.log(results.length);
        callback(results);
      }
    );
  },
  saveData(obj) {
    let { city, country, currency, quotation, temp } = obj;
    let d = new Date();
    let date = `${d.getDay() + 1}/${d.getMonth() + 1}/${d.getFullYear()}`;
    this.queryDB(
      `INSERT INTO info (date,city,country,currency,quotation,temperature) VALUES (
        '${date}',
        '${city}',
        '${country}',
        '${currency}',
        '${quotation}',
        '${temp}'
      )
    `,
      function(results) {
        alert("Saved successfully.");
      }
    );
  }
};
