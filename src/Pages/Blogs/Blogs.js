import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5'>
            <div style={{ marginBottom: "150px" }}>
                <h4>1. Difference between javascript and node js</h4>
                <p>JavaScript is a programming language. It runs in any web browser with a proper browser engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language with some specific useful libraries.

                    2.JavaScript is normally used for any client-side activity for one web application. Whereas Node JS mainly used for accessing or running any operating system for non-blocking operation and it can be used for both client-side and server-side development.

                    3.JavaScript is used to build dynamic HTML pages with interactive effects on a webpage. Node.js is used to execute and run the code outside of the browser. It's also known as a browser's language.</p>

                <h4>2. When should you use nodejs and when should you use mongodb?</h4>
                <p>Node is server side javascript framework. It is asynchronous and so it does not wait for a task to be completed. it is used mainly to develop REST services. With node both client and server both uses javascript language.
                    MongoDB is a document based NoSQL database. MongoDB stores a lot of data in JSON format. When we have to work with multiple servers and  with Large Scale Data we use MongoDB.</p>

                <h4>3. Differences between sql and nosql databases.</h4>
                <p>SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.
                    2.SQL databases use a powerful language "Structured Query Language" to define and manipulate the data. SQL databases use a powerful language "Structured Query Language" to define and manipulate the data.
                    3.MySQL, Oracle, Sqlite, PostgreSQL and MS-SQL etc. are the example of SQL database. MongoDB, BigTable, Redis, RavenDB, Cassandra, Hbase, Neo4j, CouchDB etc. are the example of nosql database</p>
            </div>
        </div>
    );
};

export default Blogs;

