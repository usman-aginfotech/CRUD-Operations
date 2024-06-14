import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  empName: String,
  empID: String,
  empSal: Number,
});

export const Employee = mongoose.model("Employee", EmployeeSchema);
