# Onyx Trust
## Introduction

This project aims to provide a dapp that works as a Trustee. Allowing to leave digital assets to somebody else as inheritance. [read more](project_description.md)

## Certification as NFT Token

```javascript
// Ethereum Address
0x13fd35d781550def2ffb86a7e1da4cc6782dee30
```

## Published

- Frontend deployed using Github Pages https://xheuz.github.io/blockchain-developer-bootcamp-final-project/
- Backend deployed on [testnet](deployed_address.txt)


## Other Files

- [Common Attack Avoided](avoiding_common_attacks.md)
- [Design Pattern Decisions](design_pattern_decisions.md)

## Project Walkthrough

TBD

## Structure

<!-- describes the directory structure -->

`truffle unbox react` is used as scaffold for this project:

```
root
|__ client                          //frontend of the project
    |__ public                      //client entry point
        |__ ...
    |__ src                         //client source code
        |__ ...
    |__ ...
    |__ package.json
|__ contracts                       //solidity contracts
    |__ ...
|__ migrations                      //migrations for solidity contracts
    |__ ...
|__ scripts                         //bash scripts for install dependencies, deploy and running test
    |__ ...
|__ test                            //tests for solidity contracts
    |__ ...
|__ avoiding_common_attacks.md      //describes protection implemented for common attacks
|__ deployed_address.txt            //ethereum contract addresses related to contract in testnet
|__ design_pattern_decisions.md     //describes which patterns were used
|__ .gitattributes
|__ .gitignore
|__ LICENSE
|__ package.json                    //npm dependencies
|__ README.md
|__ truffle-config.js               //truffle auto-generated config file
```

## Installation

_Check complete environment used [here](environment.md)_

- Check node version

```bash
> node --version
v16.1.0
```

- Check truffle version

```bash
> truffle version
Truffle v5.4.18 (core: 5.4.18)
Solidity - ^0.8.0 (solc-js)
Node v16.1.0
Web3.js v1.5.3
```

- Check ganache cli version

```bash
> ganache-cli --version
Ganache CLI v6.12.2 (ganache-core: 2.13.2)
```

- Check ganache UI version

```
Version 2.5.4 (2.5.4.1367)
```

#### PRE-REQUISITES

1. Install truffle globally

```bash
npm install -g truffle@5.4.13
```

2. Install ganache-cli globally

```bash
npm install -g ganache-cli@6.12.2
```

#### SETUP

1. Clone the project

```bash
git clone git@github.com:xheuz/blockchain-developer-bootcamp-final-project.git xheuz-project
```

2. Go to project directory

```bash
cd xheuz-project
```

3. Install dependencies

```bash
npm install # or yarn
```

4. Go to client directory and install dependencies

```bash
cd client
```

5. Install dependencies

```bash
npm install # or yarn
```

#### RUNNING TESTS

1. From the root of the project

```bash
truffle test
```

#### RUN PROJECT

1. Open Ganache UI and setup a local testnet on port `8545`

2. From the root of the project, connect from cli.

```bash
truffle console --network develop
```

3. Once inside truffle console `truffle(develop)>` apply migrations

```bash
migrate
```

4. Go to client directory

```bash
cd client
```

5. Start client

```bash
npm run start # or yarn start
```
6. Stat using the project on http://localhost:3000/
