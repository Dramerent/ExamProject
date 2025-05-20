
Подключение к БД осуществляется через программу PostgreSql через PGAdmin4
Подключение в основном проекте к базе данных менять в /backend/.env (переменная DATABASE_URL)
Подключение в панеле администратора к базе данных менять в /AdminPanel/backend/.env(переменная DATABASE_URL)

"postgresql://postgres:1243@localhost:5005/afishaDiplom?schema=public"
postgres - Username 
1243 - Password 
5005 - Port 
afishaDiplom - имя БД