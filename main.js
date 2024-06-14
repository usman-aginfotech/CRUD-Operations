import mongoose from "mongoose";
import express from "express";
import { Employee } from "./models/employee.js";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todo", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

const app = express();
const port = 3000;
app.use(express.json());


const Employees = [
  {
    empName: "Usman",
    empID: "123",
    empSal: 50000,
  },
  {
    empName: "Ahmed",
    empID: "124",
    empSal: 60000,
  },
  {
    empName: "Ali",
    empID: "125",
    empSal: 55000,
  },
];

app.get('/insert-sample-employees', async (req, res) => {
  try {
    await Employee.insertMany(Employees);
    res.send('Sample employees inserted successfully!');
  } catch (error) {
    console.error("Error inserting sample employees:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Create an employee
app.post('/employees', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).send(employee);
  } catch (error) {
    console.error("Error creating employee:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Read all employees
app.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).send(employees);
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Read a single employee by ID
app.get('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).send("Employee not found");
    }
    res.status(200).send(employee);
  } catch (error) {
    console.error("Error fetching employee:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Update an employee
app.put('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!employee) {
      return res.status(404).send("Employee not found");
    }
    res.status(200).send(employee);
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Delete an employee
app.delete('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).send("Employee not found");
    }
    res.status(200).send("Employee deleted successfully");
  } catch (error) {
    console.error("Error deleting employee:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Connect to the database
connectDB();
