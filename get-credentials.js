// query the gateway protocol API for the snapshot org admin user's credential based on the issuer ID followed by the Data Model ID for staging and production: 

// STAGING - https://staging.protocol.mygateway.xyz/v1/graphql

import { gql } from '@apollo/client';

const GET_CREDENTIAL = gql`
  query GetCredential($issuer: String!, $dataModelId: String!) {
    credential(where: { issuer: { _eq: $issuer }, dataModelId: { _eq: $dataModelId } }) {
      id
      issuer
      dataModelId
      credential
    }
  }
`;

export default GET_CREDENTIAL;

const getCredential = gql` query getCredentialsByRecipientUser {
  findCredentialsByRecipientUser(recipientUserId: "<>") {
    id
    issuerOrganization {
            id
      gatewayId
    }
    status
    claim
    dataModel {
      schema
    }
    nft {
      chain
    }
  }
}`;

// PRODUCTION - https://protocol.mygateway.xyz/v1/graphql