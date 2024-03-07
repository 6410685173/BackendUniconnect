# BackendUniconnect setup


## Installation prerequisites
1. Clone this repository<br>
2. [node.js](https://nodejs.org/)<br>
3. [SQLITE3](https://www.sqlite.org/download.html) 
 ```
     but this repository have installed SQLITE3 yet,but you should Go to environment variables, 
     chose Path variable and add path of folder sqlite
 ```
<img src="https://github.com/6410685173/BackendUniconnect/assets/88651105/a63e80e6-5572-42f2-b9c6-ffc6dc5eb8ff" alt="image" width="700" height="auto">
<img src="https://github.com/6410685173/BackendUniconnect/assets/88651105/6cc4f19f-5370-447a-9f61-e7cce50ce8d5" alt="image" width="700" height="auto">

## How to runserver
1. Navigate to the directory containing server.js
2. if you haven't installed express.js,run following command
 ```
    npm install express
 ```
3. Run the following command to start the Android app:
```
    npm server.js
```
## To access DATABASE
Navigate to the directory sqlite
```
> sqlite3 --version  //check sqlite3 version and confirm the installation: 
  3.45.1 2024-01-30 16:01:20 e876e51a0ed5c5b3126f52e532044363a014bc594cfefa87ffb5b82257cc467a (64-bit)
> sqlite3 server.db // access a server.db SQLite3 database
  SQLite version 3.45.1 2024-01-30 16:01:20 (UTF-16 console I/O)
  Enter ".help" for usage hints.
  sqlite>
  sqlite> .tables  // show all table
    test
  sqlite> .quit  // Exit a SQLite 3 database 
    
```

### references
[Installing SQLite3 on Windows](https://dev.to/dendihandian/installing-sqlite3-in-windows-44eb)

 

