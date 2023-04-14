# The Gateway to Credential-Weighted Voting in Snapshot

Goal
Enable Gateway credentials in Snapshot voting strategies
Gateway is a protocol for issuing and managing verifiable credentials. Pocket Network plans to use Gateway for the next generation of our proof-of-participation governance model. A key building block for this is enabling Gateway credentials to be weighted in Snapshot strategies. This integration will enable Pocket Network to level up the UX of our governance model and make it easy for any DAO to emulate our approach.

## Requirements

The developer will be responsible for:
Researching and understanding the Gateway API
- [ ] Implementing the Gateway API into the Snapshot Voting Module
- [ ] Testing and debugging the integration
- [ ] Providing documentation on how to use the Snapshot integration

## Criteria

- [ ] The user is able to create and modify a Snapshot voting strategy that references Gateway credentials using the Gateway API.
- [ ] The user is able to create and modify a Snapshot validation strategy that references Gateway credentials using the Gateway API.
- [ ] The above can be done through a UI in the Snapshot settings.
- [ ] The UI fetches all of the latest credentials to make it easier for the user to search and add credentials to the strategy. You need to allow admins of the strategy to search and filter by “IssuerID” and then more specifically “DataModel ID”. This will read those credentials that have been issued by that particular organization using that specific Data Model.
- [ ] Clear documentation is provided explaining how to use the Snapshot integration. This should include step-by-step instructions on how to access and use the integration, as well as any limitations or restrictions that may apply.
- [ ] Tests are provided proving that the integration works as intended.

## Resources

[Gateway docs](https://docs.mygateway.xyz/docs/why-do-credentials-matter)
[Snapshot docs](https://docs.snapshot.org/developer-guides/create)
[Snapshot voting strategies](https://docs.snapshot.org/developer-guides/create-a-strategy)
Point of contact
Sanket Jain — CEO MyGateway

## Deliverables

- [ ] Snapshot voting strategies - Gateway credentials
- [ ] Find most similar strategy in git repo
- [ ] Gateway repo code
- [ ] Snapshot
- [ ] Voting modified strategy
- [ ] Validation modified strategy
- [ ] Unit tests
- [ ] Testing and QA
- [ ] Documentation (auto-generate)
- [ ] The UI fetches all of the latest credentials to make it easier for the user to search and add credentials to the strategy. You need to allow admins of the strategy to search and filter by “IssuerID” and then more specifically “DataModel ID”. This will read those credentials that have been issued by that particular organization using that specific Data Model.

## Dev

- [ ] create voting strategy in snapshot-js/snapshot-strategies following https://docs.snapshot.org/developer-guides/create-a-strategy/create-1 + https://docs.snapshot.org/user-guides/strategies/what-is-a-strategy.
  - [x] fork snapshot-strategies
  - [ ] duplicate erc20-balance-of + rename - gateway-weighted-credentials
    - [ ] index.ts
    - [ ] schema.json
    - [ ] examples.json
    - [ ] README.md
    - [ ] TEST locally - 'npm run test --strategy=gateway-weighted-credentials
    - [ ] Test strategy with different parameters
      - [ ] Change values inside test/scores.ts and run `ts-node test/scores.ts`
      - [ ] https://github.com/snapshot-labs/snapshot-strategies#checklist-for-adding-a-new-strategy
    - [ ] PR - can take up to 72 hours 
- [ ] create validation strategy in snapshot-js/snapshot-strategies following https://docs.snapshot.org/developer-guides/create-a-strategy/create-1-1 + https://docs.snapshot.org/user-guides/strategies/what-is-a-strategy-1.
  - [ ] create a copy of basic strategy and rename gateway-weighted-credentials
  - [ ] idnex.ts -> validationClasses variable
  - [ ] `nm run test --strategy=gateway-weighted-credentials`
  - [ ]  - [ ] Test strategy with different parameters
      - [ ] Change values inside test/scores.ts and run `ts-node test/scores.ts`
      - [ ] https://github.com/snapshot-labs/snapshot-strategies#checklist-for-adding-a-new-strategy

FINISHED:
- [ ] snapshot-js/snapshot-strategies pull request
- [ ] test in playground.
  - [ ] You need to allow admins of the strategy to search and filter by “IssuerID” and then more specifically “DataModel ID”. This will read those credentials that have been issued by that particular organization using that specific Data Model.
- [ ] documentation
