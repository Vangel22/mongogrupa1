# MongoDB концепти

## Релациони датабази

    - Релационите бази на податоци користат табели за складирање податоци.
    Податоците се организирани во редови и колони, и табелите можат да бидат поврзани со едни со други преку клучеви.
    Примери вклучуваат MySQL, PostgreSQL и Oracle.

    Пример:

        --- Правиме нова табела со корисници ---
        CREATE TABLE users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(255) NOT NULL UNIQUE,
            email VARCHAR(255) NOT NULL UNIQUE,
            password_hash VARCHAR(255) NOT NULL,
            first_name VARCHAR(255),
            last_name VARCHAR(255),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );

        --- Вметнуваме податоци во датабазата ---
        INSERT INTO users (username, email, password_hash, first_name, last_name)
        VALUES
        ('johndoe', 'johndoe@example.com', '$2b$12$KIXoC7jD7SD7STz.k8Yf.e4h8B1LR7kq9/GfFTw/sFi5s.tRjwG5G', 'John', 'Doe'),
        ('janedoe', 'janedoe@example.com', '$2b$12$AIXoC7jD7SD7STz.k8Yf.e4h8B1LR7kq9/GfFTw/sFi5s.tRjwG5G', 'Jane', 'Doe');

        --- Ги прикажуваме сите корисници кои ги имаме во табелата users ---
        SELECT * FROM users;

        --- Резултат ---

        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        | id | username | email               | password_hash                                                | first_name | last_name | created_at          | updated_at          |
        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        | 1  | johndoe  | johndoe@example.com | $2b$12$KIXoC7jD7SD7STz.k8Yf.e4h8B1LR7kq9/GfFTw/sFi5s.tRjwG5G | John       | Doe       | 2023-07-16 12:34:56 | 2023-07-16 12:34:56 | -> MongoDB e dokument
        | 2  | janedoe  | janedoe@example.com | $2b$12$AIXoC7jD7SD7STz.k8Yf.e4h8B1LR7kq9/GfFTw/sFi5s.tRjwG5G | Jane       | Doe       | 2023-07-16 12:34:56 | 2023-07-16 12:34:56 |
        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------



    - Податоците во релационите датабази се фиксни, каде секој ред претставува запис.
    - Се користи кај апликации кои редовно правата записи како банки, е-продавници, ERP системи, CMS системи и други.

## Нералациони датабази

    - Нералационите бази на податоци, или NoSQL бази на податоци, користат различни модели за складирање податоци, како документи, графови, клуч-вредност и колони.
    Тие се дизајнирани да се справат со големи количини на податоци и чести промени во структурата. Примери вклучуваат MongoDB, Cassandra и Redis.

    Пример:

    --- Го вметнуваме корисникот во датабазата ---
        db.users.insertOne({
            username: "johndoe",
            email: "johndoe@example.com",
            password_hash: "$2b$12$KIXoC7jD7SD7STz.k8Yf.e4h8B1LR7kq9/GfFTw/sFi5s.tRjwG5G",
            first_name: "John",
            last_name: "Doe",
            created_at: new Date(),
            updated_at: new Date()
        });

     --- Ги прикажуваме сите корисници кои ги имаме во табелата users ---
        db.users.find()

    --- Резултат ---
    {
        "_id": ObjectId("60c72b2f9f1b2c6d88fef1f0"),
        "username": "johndoe",
        "email": "johndoe@example.com",
        "password_hash": "$2b$12$KIXoC7jD7SD7STz.k8Yf.e4h8B1LR7kq9/GfFTw/sFi5s.tRjwG5G",
        "first_name": "John",
        "last_name": "Doe",
        "created_at": ISODate("2023-07-16T12:34:56Z"),
        "updated_at": ISODate("2023-07-16T12:34:56Z")
    }

    - Податоците во нералационите датабази се флексибилни.
    - Се користи кај апликации кои се користат во реално време со многу податоци, блог апликации, социјални мрежи, е-продавници и други.

## MongoDB

    - MongoDB е составен од колекции (users), документи.

    - MongoDB е популарна нерелациона база на податоци која користи документен модел за складирање податоци.
    Податоците се зачувуваат во формат сличен на JSON, кој обезбедува флексибилност и лесна манипулација.
    MongoDB е скалабилен и погоден за апликации со големи податоци и високи перформанси.

## BSON vs JSON

    - BSON (Binary JSON) е бинарен формат за складирање на документи кој е користен од MongoDB.
    Тој е сличен на JSON, но е оптимизиран за брзо пребарување и складирање на податоци, поддржува повеќе типови на податоци, и е поефикасен во однос на меморискиот простор.
    - BSON data types: https://www.mongodb.com/docs/manual/reference/bson-types/

## MongoDB Atlas

    - MongoDB Atlas е cloud услуга за управување со MongoDB бази на податоци.
    Овозможува лесно креирање, управување и скалабилност на MongoDB кластерите без потреба од администрација на инфраструктурата.
    Платформата нуди автоматски бекапи, мониторинг и безбедносни опции.

## MongoDB Compass

    - MongoDB Compass е GUI (графички кориснички интерфејс) за MongoDB кој овозможува визуелно истражување и манипулација со податоци.
    Корисниците можат да прегледуваат и анализираат податоци, да извршуваат прашања и да дизајнираат агрегирани функции преку интуитивен интерфејс.

## MongoDB mongosh

    - MongoDB mongosh е командна линија за MongoDB која обезбедува интерактивно работно опкружување за извршување на CRUD операции, администрација на бази на податоци и пишување скрипти.
    Mongosh е дизајниран да биде лесен за користење и интеграција со автоматизирани процеси.

## CRUD операции

    - CRUD операции се основни операции за манипулација со податоци во бази на податоци. Тие вклучуваат:

    - **Create (Креирај):**
        Додавање на нови податоци. Се користи командата insertOne, insertMany.
    - **Read (Читај):**
        Пребарување и читање на податоци. Се користи командата find, findOne.
    - **Update (Ажурирај):**
        Промена на постоечки податоци. Се користи командата updateOne, updateMany.
    - **Delete (Избриши):**
        Отстранување на податоци. Се користи командата deleteOne, deleteMany.

## Commands

1. `show dbs`
   - Lists all databases on the MongoDB server.
2. `use <database>`
   - Switches to the specified database.
3. `db.createCollection("<collection>")`
   - Creates a new collection.
4. `db.dropDatabase()`
   - Deletes the current database.
5. `db.<collection>.insertOne(<document>)`
   - Inserts a single document into the collection.
6. `db.<collection>.find()`
   - Retrieves all documents from the collection.
7. `db.<collection>.insertMany([<document1>, <document2>, ...])`
   - Inserts multiple documents into the collection.
8. `db.<collection>.insertOne({ <field>: new Date("<date>") })`
   - Inserts a document with a date field.
9. `db.<collection>.insertOne({ <field>: null })`
   - Inserts a document with a null field value.
10. `db.<collection>.find()`
    - Returns all documents from the collection.
11. `db.<collection>.find().sort({ <field>: 1 })`
    - Returns documents sorted in ascending order.
12. `db.<collection>.find().limit(<limit>)`
    - Limits the number of documents returned.
13. `db.<collection>.find().sort({ <field>: -1 }).limit(1)`
    - Returns the document with the highest value for a field.
14. `db.<collection>.find({}, { <field>: <1 or true> })`
    - Returns documents with specified fields.
15. `db.<collection>.updateOne(<filter>, <update>)`
    - Updates a single document.
16. `db.<collection>.updateMany(<filter>, { $set: { <field>: <value> } })`
    - Updates multiple documents.
17. `db.<collection>.updateMany({ <field>: { $exists: false }}, { $set: { <field>: <value> } })`
    - Updates documents where a field doesn't exist.
18. `db.<collection>.deleteOne(<filter>)`
    - Deletes a single document.
19. `db.<collection>.deleteMany(<filter>)`
    - Deletes multiple documents.
20. `db.<collection>.deleteMany({ <field>: { $exists: false } })`
    - Deletes documents where a field doesn't exist.

## Дизајн и архитектура на датабаза

- Дизајнот и архитектурата на базата на податоци вклучува планирање како податоците ќе бидат организирани, складирани и пристапени.
  Добар дизајн осигурува ефикасност, скалабилност и лесна одржливост.
  Вклучува нормализација на податоците, дефинирање на индексите, и избор на соодветни модели за податоци за специфични употреби.

  - Нормализација на податоци: Ова е процесот на организирање на податоците во базата така што да се минимизира дупликацијата на информации и да се подобри интегритетот на податоците.
  - Индексите се структури во базата на податоци кои овозможуваат брз пристап до податоците.
    Тие работат слично на индексот во книга, каде што наоѓањето на конкретен термин е побрзо поради претходно подредената листа на страниците.
    Дефинирањето на индекси во базата на податоци значи да се одредат клучевите полиња или колони кои ќе се користат за брз пристап при пребарување и филтрирање на податоците.
