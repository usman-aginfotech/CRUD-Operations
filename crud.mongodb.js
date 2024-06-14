

use("CrudDB")

db.createCollection("Employee")
//create
db.Employee.insertOne({
    empid: 1,
    name: "Usman",
    info: "Back-end Developer",
    salary: 50000
})

db.Employee.insertMany(
    [
        {
            "empid": 2,
            "name": "John",
            "info": "Back-End Developer",
            "salary": 52000
        },
        {
            "empid": 3,
            "name": "Jane",
            "info": "Full-Stack Developer",
            "salary": 51000
        },
        {
            "empid": 4,
            "name": "Alice",
            "info": "Data Scientist",
            "salary": 53000
        },
        {
            "empid": 5,
            "name": "Bob",
            "info": "DevOps Engineer",
            "salary": 54000
        },
        {
            "empid": 6,
            "name": "Charlie",
            "info": "Mobile Developer",
            "salary": 55000
        },
        {
            "empid": 7,
            "name": "David",
            "info": "QA Engineer",
            "salary": 56000
        },
        {
            "empid": 8,
            "name": "Eve",
            "info": "Security Analyst",
            "salary": 57000
        },
        {
            "empid": 9,
            "name": "Frank",
            "info": "Cloud Engineer",
            "salary": 58000
        },
        {
            "empid": 10,
            "name": "Grace",
            "info": "AI Engineer",
            "salary": 59000
        }
    ]
)



// //read-find
let b=db.Employee.find({salary:50000})
let c=db.Employee.find({id:4})
let d=db.Employee.find({salary:{$gt:55000}}) //greater values
console.log(b,c,d)




// //update
db.Employee.updateOne({salary:51000},{$set:{salary:55000}})

db.Employee.updateMany({salary:52000},{$set:{salary:60000}})


//delete
db.Employee.deleteMany({name: 'Alice'})
