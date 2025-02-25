import inquirer from 'inquirer';
import * as queries from './query';

async function mainMenu() {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all employees',
        'Add employee',
        'Update employee role',
        'View all roles',
        'Add role',
        'View all departments',
        'Add department',
        'Quit'
      ]
    }
  ]);

  switch (action) {
    case 'View all employees':
      const employees = await queries.getAllEmployees();
      console.table(employees); // Show employees in a table format
      mainMenu(); // Show the menu again
      break;

    case 'Add employee':
      addEmployee(); // Function to add employee
      break;

    case 'Update employee role':
      updateEmployeeRole(); // Function to update employee role
      break;

    case 'View all roles':
      const roles = await queries.getAllRoles();
      console.table(roles); // Show roles in a table format
      mainMenu(); // Show the menu again
      break;

    case 'Add role':
      addRole(); // Function to add role
      break;

    case 'View all departments':
      const departments = await queries.getAllDepartments();
      console.table(departments); // Show departments in a table format
      mainMenu(); // Show the menu again
      break;

    case 'Add department':
      addDepartment(); // Function to add department
      break;

    case 'Quit':
      console.log('Goodbye!');
      break;
  }
}

// Function to add employee
async function addEmployee() {
  const employeeData = await inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: 'Enter the employee\'s first name:'
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'Enter the employee\'s last name:'
    },
    {
      type: 'input',
      name: 'roleId',
      message: 'Enter the employee\'s role ID:'
    },
    {
      type: 'input',
      name: 'managerId',
      message: 'Enter the employee\'s manager ID (leave blank if no manager):'
    }
  ]);

  await queries.addEmployee(employeeData.firstName, employeeData.lastName, employeeData.roleId, employeeData.managerId || null);
  console.log('Employee added successfully!');
  mainMenu(); // Show the menu again
}

// Function to add role
async function addRole() {
  const roleData = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the role title:'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter the role salary:'
    },
    {
      type: 'input',
      name: 'departmentId',
      message: 'Enter the department ID for this role:'
    }
  ]);

  await queries.addRole(roleData.title, roleData.salary, roleData.departmentId);
  console.log('Role added successfully!');
  mainMenu(); // Show the menu again
}

// Function to update employee role
async function updateEmployeeRole() {
  const employees = await queries.getAllEmployees();
  const employeeChoices = employees.map(employee => ({
    name: `${employee.first_name} ${employee.last_name}`,
    value: employee.id
  }));

  const { employeeId, newRoleId } = await inquirer.prompt([
    {
      type: 'list',
      name: 'employeeId',
      message: 'Select an employee to update their role:',
      choices: employeeChoices
    },
    {
      type: 'input',
      name: 'newRoleId',
      message: 'Enter the new role ID for the employee:'
    }
  ]);

  await queries.updateEmployeeRole(employeeId, newRoleId);
  console.log('Employee role updated successfully!');
  mainMenu(); // Show the menu again
}

// Function to add department
async function addDepartment() {
  const { departmentName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'departmentName',
      message: 'Enter the name of the new department:'
    }
  ]);

  await queries.addDepartment(departmentName);
  console.log('Department added successfully!');
  mainMenu(); // Show the menu again
}

// Start the application
mainMenu();
