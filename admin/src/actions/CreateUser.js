// @flow
import axios from 'axios';
import { print } from 'graphql';
import gql from 'graphql-tag';

export const NEW_USER_RECORD_REQUEST = 'NEW_USER_RECORD_REQUEST';
export const NEW_USER_RECORD_SUCCESS = 'NEW_USER_RECORD_SUCCESS';
export const NEW_USER_RECORD_FAILURE = 'NEW_USER_RECORD_FAILURE';
export const CLEAR_NEW_USER_RECORD = 'CLEAR_NEW_USER_RECORD';

export const requestNewUserRecord = (newUserDetails: Object) => {
  return {
    type: NEW_USER_RECORD_REQUEST,
    newUserDetails
  };
};

export const successNewUserRecord = (data: Object) => {
  return {
    type: NEW_USER_RECORD_SUCCESS,
    message: data.message
  };
};

export const failureNewUserRecord = (data: Object) => {
  return {
    type: NEW_USER_RECORD_FAILURE,
    message: data.message
  };
};

export const clearNewUserRecordMessage = () => {
  return {
    type: CLEAR_NEW_USER_RECORD
  };
};

type UserInput = {
  surname: string,
  name: string,
  annualLeave: string,
  staffEmail: string,
  designation: string,
  gender: string,
  annual: number,
  familyCare: number,
  bereavement: number,
  sick: number,
  christmas: number,
  maternity: number,
  paternity: number,
  employeeNumber: any,
  dateOfBirth: any
};

const CREATE_USER = gql `
mutation addUser($data: UserInput!) {
  addUser(data: $data) {
    id
    name
    email
  }
}
`;

export const submitNewUserRecord = (newUserDetails: Object) => async (
  dispatch: Function
) => {
  try {
    dispatch(requestNewUserRecord(newUserDetails));
    const response = await axios.post('http://localhost:8080/graphql', {
      query: print(CREATE_USER),
      variables: {
        data: {
          surname: newUserDetails.surname,
          name: newUserDetails.name,
          email: newUserDetails.staffEmail,
          designation: newUserDetails.designation,
          annual: newUserDetails.annualDays,
          sick: newUserDetails.sickDays,
          bereavement: newUserDetails.bereavementDays,
          familyCare: newUserDetails.familyCareDays,
          christmas: newUserDetails.christmasDays,
          dateOfBirth: newUserDetails.dateOfBirth,
          maternity: newUserDetails.maternityDays,
          paternity: newUserDetails.paternityDays,
          gender: newUserDetails.gender,
          employeeNumber: newUserDetails.employeeNumber,
          isArchived: "false"
        }
      }
    });

    /*const response = await axios.post('http://localhost:8080/adduser', {
      surname: newUserDetails.surname,
      name: newUserDetails.name,
      email: newUserDetails.staffEmail,
      designation: newUserDetails.designation,
      annual: newUserDetails.annualDays,
      sick: newUserDetails.sickDays,
      bereavement: newUserDetails.bereavementDays,
      family_care: newUserDetails.familyCareDays,
      christmas: newUserDetails.christmasDays,
      date_of_birth: newUserDetails.dateOfBirth,
      maternity: newUserDetails.maternityDays,
      paternity: newUserDetails.paternityDays,
      gender: newUserDetails.gender,
      employee_number: newUserDetails.employeeNumber,
      adminUser: newUserDetails.adminUser
    });*/

    if (response.status !== 201) {
      dispatch(failureNewUserRecord(response.data));
    } else {
      dispatch(successNewUserRecord(response.data));
    }
  } catch (error) {
    console.log(error);
  }
};
