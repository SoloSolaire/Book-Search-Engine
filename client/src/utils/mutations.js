import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        email
        password
    }
}`;

export const ADD_USER = gql`
mutation addUser($user: String!, $email: String!, $password: String!) {
    addUser(user: $user, email: $email, password: $password) {
        user
        email
        password
    }
}`;

export const SAVE_BOOK = gql`
mutation saveBook`;

export const REMOVE_BOOK = gql`
mutation removeBook`;