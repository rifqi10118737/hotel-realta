const HrActionType = {
    /* DEPARTMENT */
    GET_DEPARTMENTS: 'GET_DEPARTMENTS',
    GET_DEPARTMENTS_SUCCEED: 'GET_DEPARTMENTS_SUCCEED',
    GET_DEPARTMENTS_FAILED: 'GET_DEPARTMENTS_FAILED',
    GET_DEPARTMENT: 'GET_DEPARTMENT',
    GET_DEPARTMENT_SUCCEED: 'GET_DEPARTMENT_SUCCEED',
    GET_DEPARTMENT_FAILED: 'GET_DEPARTMENT_FAILED',
    ADD_DEPARTMENT: 'ADD_DEPARTMENT',
    ADD_DEPARTMENT_SUCCEED: 'ADD_DEPARTMENT_SUCCEED',
    ADD_DEPARTMENT_FAILED: 'ADD_DEPARTMENT_FAILED',
    UPDATE_DEPARTMENT: 'UPDATE_DEPARTMENT',
    UPDATE_DEPARTMENT_SUCCEED: 'UPDATE_DEPARTMENT_SUCCEED',
    UPDATE_DEPARTMENT_FAILED: 'UPDATE_DEPARTMENT_FAILED',
    DELETE_DEPARTMENT: 'DELETE_DEPARTMENT',
    DELETE_DEPARTMENT_SUCCEED: 'DELETE_DEPARTMENT_SUCCEED',
    DELETE_DEPARTMENT_FAILED: 'DELETE_DEPARTMENT_FAILED',
    
    /* EMPLOYEE */
    GET_EMPLOYEES: 'GET_EMPLOYEES',
    GET_EMPLOYEES_SUCCEED: 'GET_EMPLOYEES_SUCCEED',
    GET_EMPLOYEES_FAILED: 'GET_EMPLOYEES_FAILED',
    GET_EMPLOYEE: 'GET_EMPLOYEE',
    GET_EMPLOYEE_SUCCEED: 'GET_EMPLOYEE_SUCCEED',
    GET_EMPLOYEE_FAILED: 'GET_EMPLOYEE_FAILED',
    ADD_EMPLOYEE: 'ADD_EMPLOYEE',
    ADD_EMPLOYEE_SUCCEED: 'ADD_EMPLOYEE_SUCCEED',
    ADD_EMPLOYEE_FAILED: 'ADD_EMPLOYEE_FAILED',
    UPDATE_EMPLOYEE: 'UPDATE_EMPLOYEE',
    UPDATE_EMPLOYEE_SUCCEED: 'UPDATE_EMPLOYEE_SUCCEED',
    UPDATE_EMPLOYEE_FAILED: 'UPDATE_EMPLOYEE_FAILED',
    DELETE_EMPLOYEE: 'DELETE_EMPLOYEE',
    DELETE_EMPLOYEE_SUCCEED: 'DELETE_EMPLOYEE_SUCCEED',
    DELETE_EMPLOYEE_FAILED: 'DELETE_EMPLOYEE_FAILED',

    /* SHIFT */
    GET_SHIFTS: 'GET_SHIFTS',
    GET_SHIFTS_SUCCEED: 'GET_SHIFTS_SUCCEED',
    GET_SHIFTS_FAILED: 'GET_SHIFTS_FAILED',

    /* USER */
    GET_USERS: 'GET_USERS',
    GET_USERS_SUCCEED: 'GET_USERS_SUCCEED',
    GET_USERS_FAILED: 'GET_USERS_FAILED',
   
    /* JOBROLE */
    GET_JOBROLES: 'GET_JOBROLES',
    GET_JOBROLES_SUCCEED: 'GET_JOBROLES_SUCCEED',
    GET_JOBROLES_FAILED: 'GET_JOBROLES_FAILED',
   
    /* WORKORDER */
    GET_WORKORDERS: 'GET_WORKORDERS',
    GET_WORKORDERS_SUCCEED: 'GET_WORKORDERS_SUCCEED',
    GET_WORKORDERS_FAILED: 'GET_WORKORDERS_FAILED',
    GET_WORKORDER: 'GET_WORKORDER',
    GET_WORKORDER_SUCCEED: 'GET_WORKORDER_SUCCEED',
    GET_WORKORDER_FAILED: 'GET_WORKORDER_FAILED',
    ADD_WORKORDER: 'ADD_WORKORDER',
    ADD_WORKORDER_SUCCEED: 'ADD_WORKORDER_SUCCEED',
    ADD_WORKORDER_FAILED: 'ADD_WORKORDER_FAILED',
    UPDATE_WORKORDER: 'UPDATE_WORKORDER',
    UPDATE_WORKORDER_SUCCEED: 'UPDATE_WORKORDER_SUCCEED',
    UPDATE_WORKORDER_FAILED: 'UPDATE_WORKORDER_FAILED',
    DELETE_WORKORDER: 'DELETE_WORKORDER',
    DELETE_WORKORDER_SUCCEED: 'DELETE_WORKORDER_SUCCEED',
    DELETE_WORKORDER_FAILED: 'DELETE_WORKORDER_FAILED',
   
    /* WORKORDERDETAIL */
    GET_WORKORDERDETAILS: 'GET_WORKORDERDETAILS',
    GET_WORKORDERDETAILS_SUCCEED: 'GET_WORKORDERDETAILS_SUCCEED',
    GET_WORKORDERDETAILS_FAILED: 'GET_WORKORDERDETAILS_FAILED',
    GET_WORKORDERDETAIL: 'GET_WORKORDERDETAIL',
    GET_WORKORDERDETAIL_SUCCEED: 'GET_WORKORDERDETAIL_SUCCEED',
    GET_WORKORDERDETAIL_FAILED: 'GET_WORKORDERDETAIL_FAILED',
    ADD_WORKORDERDETAIL: 'ADD_WORKORDERDETAIL',
    ADD_WORKORDERDETAIL_SUCCEED: 'ADD_WORKORDERDETAIL_SUCCEED',
    ADD_WORKORDERDETAIL_FAILED: 'ADD_WORKORDERDETAIL_FAILED',
    UPDATE_WORKORDERDETAIL: 'UPDATE_WORKORDERDETAIL',
    UPDATE_WORKORDERDETAIL_SUCCEED: 'UPDATE_WORKORDERDETAIL_SUCCEED',
    UPDATE_WORKORDERDETAIL_FAILED: 'UPDATE_WORKORDERDETAIL_FAILED',
    DELETE_WORKORDERDETAIL: 'DELETE_WORKORDERDETAIL',
    DELETE_WORKORDERDETAIL_SUCCEED: 'DELETE_WORKORDERDETAIL_SUCCEED',
    DELETE_WORKORDERDETAIL_FAILED: 'DELETE_WORKORDERDETAIL_FAILED',
   
   
    /* EMPLOYEEPAYHISTORY */
    GET_EMPLOYEEPAYHISTORYS: 'GET_EMPLOYEEPAYHISTORYS',
    GET_EMPLOYEEPAYHISTORYS_SUCCEED: 'GET_EMPLOYEEPAYHISTORYS_SUCCEED',
    GET_EMPLOYEEPAYHISTORYS_FAILED: 'GET_EMPLOYEEPAYHISTORYS_FAILED',
    GET_EMPLOYEEPAYHISTORY: 'GET_EMPLOYEEPAYHISTORY',
    GET_EMPLOYEEPAYHISTORY_SUCCEED: 'GET_EMPLOYEEPAYHISTORY_SUCCEED',
    GET_EMPLOYEEPAYHISTORY_FAILED: 'GET_EMPLOYEEPAYHISTORY_FAILED',
    ADD_EMPLOYEEPAYHISTORY: 'ADD_EMPLOYEEPAYHISTORY',
    ADD_EMPLOYEEPAYHISTORY_SUCCEED: 'ADD_EMPLOYEEPAYHISTORY_SUCCEED',
    ADD_EMPLOYEEPAYHISTORY_FAILED: 'ADD_EMPLOYEEPAYHISTORY_FAILED',
    UPDATE_EMPLOYEEPAYHISTORY: 'UPDATE_EMPLOYEEPAYHISTORY',
    UPDATE_EMPLOYEEPAYHISTORY_SUCCEED: 'UPDATE_EMPLOYEEPAYHISTORY_SUCCEED',
    UPDATE_EMPLOYEEPAYHISTORY_FAILED: 'UPDATE_EMPLOYEEPAYHISTORY_FAILED',
    DELETE_EMPLOYEEPAYHISTORY: 'DELETE_EMPLOYEEPAYHISTORY',
    DELETE_EMPLOYEEPAYHISTORY_SUCCEED: 'DELETE_EMPLOYEEPAYHISTORY_SUCCEED',
    DELETE_EMPLOYEEPAYHISTORY_FAILED: 'DELETE_WORKORDER_FAILED',
   
    /* EMPLOYEEDEPARTMENTHISTORY */
    GET_EMPLOYEEDEPARTMENTHISTORYS: 'GET_EMPLOYEEDEPARTMENTHISTORYS',
    GET_EMPLOYEEDEPARTMENTHISTORYS_SUCCEED: 'GET_EMPLOYEEDEPARTMENTHISTORYS_SUCCEED',
    GET_EMPLOYEEDEPARTMENTHISTORYS_FAILED: 'GET_EMPLOYEEDEPARTMENTHISTORYS_FAILED',
    GET_EMPLOYEEDEPARTMENTHISTORY: 'GET_EMPLOYEEDEPARTMENTHISTORY',
    GET_EMPLOYEEDEPARTMENTHISTORY_SUCCEED: 'GET_EMPLOYEEDEPARTMENTHISTORY_SUCCEED',
    GET_EMPLOYEEDEPARTMENTHISTORY_FAILED: 'GET_EMPLOYEEDEPARTMENTHISTORY_FAILED',
    ADD_EMPLOYEEDEPARTMENTHISTORY: 'ADD_EMPLOYEEDEPARTMENTHISTORY',
    ADD_EMPLOYEEDEPARTMENTHISTORY_SUCCEED: 'ADD_EMPLOYEEDEPARTMENTHISTORY_SUCCEED',
    ADD_EMPLOYEEDEPARTMENTHISTORY_FAILED: 'ADD_EMPLOYEEDEPARTMENTHISTORY_FAILED',
    UPDATE_EMPLOYEEDEPARTMENTHISTORY: 'UPDATE_EMPLOYEEDEPARTMENTHISTORY',
    UPDATE_EMPLOYEEDEPARTMENTHISTORY_SUCCEED: 'UPDATE_EMPLOYEEDEPARTMENTHISTORY_SUCCEED',
    UPDATE_EMPLOYEEDEPARTMENTHISTORY_FAILED: 'UPDATE_EMPLOYEEDEPARTMENTHISTORY_FAILED',
    DELETE_EMPLOYEEDEPARTMENTHISTORY: 'DELETE_EMPLOYEEDEPARTMENTHISTORY',
    DELETE_EMPLOYEEDEPARTMENTHISTORY_SUCCEED: 'DELETE_EMPLOYEEDEPARTMENTHISTORY_SUCCEED',
    DELETE_EMPLOYEEDEPARTMENTHISTORY_FAILED: 'DELETE_WORKORDER_FAILED',
   
}

export default HrActionType;
