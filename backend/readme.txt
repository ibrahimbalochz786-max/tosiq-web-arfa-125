Php, laravel

php -> html 
home.html
home.php

db -> mysql
schools.sql
 -> tables
    -> rows & cols

Mern stack
M = Mongodb
    -> dbname
        -> collections
            -> documents (json = javascript object notation)
E = Express
    -> Create server
    -> make api
R = React  
    -> ui screen with code reusability
N = Nodejs 
    -> business logic

-- REQUESTS --
GET             = Single or multiple
POST            = Insertion of data
DELETE          = Deletion of data
PUT / PATCH     = Updation of current single data


----------------
CMDS

create backend project type 
this cmd in terminal
    - npm init -y
    - change following line
        -> line 5: "main": "index.js",
        -> line 7: "dev": "nodemon index.js"
        -> line 12: "type": "module",

    then create index.js file

backend pkg: 
    npm i pkgname
-   express
-   nodemon
-   mongoose
-   nodemailer
-   nanoid
-   jsonwebtoken
-   bcryptjs
-   cors


---------
Folder Structure

routes
    - filename.routes.js

controllers
    - filename.controller.js

models
    - filename.model.js