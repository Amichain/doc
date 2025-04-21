---
sidebar_position: 2
sidebar_label: TestNet
slug: /testnet
---

:::danger Under maintenance
Amichain testnet is actually under maintenance.   
Here are the changes that will be made:
- Migration to a new infrastructure.
- New chain configuration that matches Amichain mainnet.
- Run 5 validator nodes rather than only one.

Sorry for the inconvenience, and thank you for your patience!
:::

# Amichain TestNet

Our testnet chain is the sandbox chain where we can experiment and build new projects.  
On this page, you can find all useful info to connect and interact with AMIChain testnet.

## Chain information
Here are the connection info for AmiChain network.  
You can also [connect to AmiChain with Metamask with our ChainList app](https://chainlist.amichain.org).

| Chain Name   | Amichain TestNet                                                     |
|--------------|----------------------------------------------------------------------|
| Chain ID     | 588785741                                                            |
| Native token | AMI                                                                  |
| RPC Url      | [https://testnet-rpc.amichain.org](https://testnet-rpc.amichain.org) |
| WebSocket    | [wss://testnet-ws.amichain.org](wss://testnet-ws.amichain.org)       |
| Explorer Url | Not available yet                                                    |
| Faucet       | [https://ami.finance](https://ami.finance)                           |

## Dex addresses
Here are the addresses of the DEX (AMM) contracts.
It is based on Uniswap V2.

:::note WIP
    Smart contracts have not been deployed yet.
:::

| Name       | Description                                                                                           | Address |
|------------|-------------------------------------------------------------------------------------------------------|---------|
| V2 Factory | Part of the Uniswap V2 core, this contract handles pair management.                                   |         |
| V2 Router  | Part of the Uniswap V2 periphery, this contract helps manage liquidity pools (LP), swaps, and quotes. |         |
| WAMI       | Wrapped version of the native AMI token.                                                              |         |
| TEST       | Just an ERC20 test token... for testing purposes.                                                     |         |
| WAMI/TEST  | The WAMI/TEST liquidity pool.                                                                         |         |