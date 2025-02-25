// Import the pool from connection.ts
import { pool } from './connection';

// Function to execute any query
async function executeQuery(query: string, params: any[] = []) {
  try {
    const res = await pool.query(query, params);
    return res.rows;
  } catch (err) {
    console.error('Error executing query', err.stack);
  }
}

// Functions for performing specific queries
async function getAllEmployees() {
  const query = 'SELECT * FROM employee';
  return executeQuery(query);
}

async function getAllRoles() {
  const query = 'SELECT * FROM role';
  return executeQuery(query);
}

async function getAllDepartments() {
  const query = 'SELECT * FROM department';
  return executeQuery(query);
}

async function addEmployee(firstName: string, lastName: string, roleId: number, managerId: number | null) {
  const query = `
    INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ($1, $2, $3, $4)
  `;
  return executeQuery(query, [firstName, lastName, roleId, managerId]);
}

async function addRole(title: string, salary: number, departmentId: number) {
  const query = `
    INSERT INTO role (title, salary, department_id)
    VALUES ($1, $2, $3)
  `;
  return executeQuery(query, [title, salary, departmentId]);
}

async function updateEmployeeRole(employeeId: number, newRoleId: number) {
  const query = `
    UPDATE employee
    SET role_id = $1
    WHERE id = $2
  `;
  return executeQuery(query, [newRoleId, employeeId]);
}

async function addDepartment(departmentName: string) {
  const query = `
    INSERT INTO department (name)
    VALUES ($1)
  `;
  return executeQuery(query, [departmentName]);
}

export {
  getAllEmployees,
  getAllRoles,
  getAllDepartments,
  addEmployee,
  addRole,
  updateEmployeeRole,
  addDepartment
};
