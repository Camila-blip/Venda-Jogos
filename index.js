(async () => {
    const db = require("./db");
    console.log('Começou!');
 
    console.log('SELECT * FROM table_jogos');
    const clientes = await db.selectCustomers();
    console.log(clientes);
})();
