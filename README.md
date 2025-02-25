# Employee Tracker

## Description
The Employee Tracker is a command-line application designed to help businesses manage their employees, roles, and departments. Built using Node.js, Inquirer, and PostgreSQL, this application allows business owners to easily view and manage their company's departments, roles, and employees. The application includes options to view all departments, roles, and employees, as well as the ability to add and update them.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Steps to install and set up your project:   
1. Clone the repository: git clone [link](https://github.com/McMulle20/Employee-Tracker.git).

2. Please run "npm install" in the terminal for the required dependencies.

3. Set up your PostgreSQL database by running the provided SQL scripts (schema.sql, seeds.sql, and query.sql).

4. Update your database connection settings in connection.ts as needed.

5. Start the application by running npx tsx src/server.ts.
## Usage

The Employee Tracker is a command-line application that allows business owners to manage their employees, roles, and departments through a simple menu interface. Upon starting the application, you can choose from various options: view all departments, roles, or employees, add a new department, role, or employee, and update an employee's role. Viewing options present formatted tables showing details such as department names, role salaries, and employee information like job titles and managers. Adding new departments, roles, and employees prompts the user for necessary details like names, roles, salaries, and managers, and updates the database accordingly. The application also allows you to update an employee's role by selecting the employee and assigning them a new position. All changes are reflected in the PostgreSQL database, ensuring that the company data is well-organized and up-to-date.

## Credits

BootCamp Guide and the links provided: 
Xpert Learning Assistant 
https://www.npmjs.com/package/inquirer/v/8.2.4
https://www.npmjs.com/package/pg
https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide

## License

This project is licensed under the MIT License.

---
## How to Contribute

Follow these steps to contribute to the project:

Fork the repository.
Create a new branch (git checkout -b feature-name).
Commit your changes (git commit -am 'Add new feature').
Push the branch to your fork (git push origin feature-name).
Submit a pull request. For detailed guidelines on contributing, you can refer to the Contributor Covenant.

## Tests

Video of my test: link list
