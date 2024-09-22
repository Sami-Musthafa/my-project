import { gql } from '@apollo/client';

export const ALL_SALES = gql`
  query FindSales($filter: SaleFilterInput) {
    findSales(filter: $filter) {
      id
      quantity
      cost
      customerName
      createdAt
      updatedAt
    }
  }
`;

export const SINGLE_SALE = gql`
  query FindOneSale($id: String!) {
    findOneSale(id: $id) {
      id
      quantity
      cost
      customerName
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_SALE = gql`
  mutation CreateSale($input: CreateSaleInput!) {
    createSale(input: $input) {
      id
      quantity
      cost
      customerName
      createdAt
      updatedAt
    }
  }
`;

export const REMOVE_SALE = gql`
  mutation RemoveSale($id: String!) {
    removeSale(id: $id) {
      id
      quantity
      cost
      customerName
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_SALE = gql`
  mutation UpdateSale($id: String!, $input: UpdateSaleInput!) {
    updateSale(id: $id, input: $input) {
      id
      quantity
      cost
      customerName
      createdAt
      updatedAt
    }
  }
`;
