---
sidebar_custom_props:
    icon: '<svg xmlns="http://www.w3.org/2000/svg" style="isolation:isolate;" fill="currentColor" viewBox="0 0 128 128"><defs><clipPath id="a"><path d="M0 0h32v32H0z"/></clipPath></defs><g clip-path="url(#a)" transform="matrix(4.26159 0 0 4.26647 -4.186 -4.263)"><path d="M30.667 7.084v.477c0 .552-.413 1-.923 1h-9.011c-1.091-1.538-2.719-2.416-4.394-2.477h13.405c.51 0 .923.448.923 1Zm0 8.676v.48c0 .552-.413 1-.923 1h-9.095a7.164 7.164 0 0 0 1.164-2.48h7.931c.51 0 .923.448.923 1Zm0 8.679v.477c0 .552-.413 1-.923 1h-18.84c1.393-.048 2.794-.665 3.921-1.944l.465-.533h14.454c.51 0 .923.448.923 1Zm-13.996-5.438L15.169 17.5l1.502-1.5c2.31-2.312 1.253-6.257-1.904-7.104a4.241 4.241 0 0 0-4.099 1.1l-1.501 1.5-1.5-1.5 1.5-1.5c3.493-3.437 9.398-1.804 10.629 2.941a6.368 6.368 0 0 1-1.624 6.063l-1.501 1.501Zm-3.002 3.002-1.501 1.501c-3.495 3.437-9.4 1.803-10.631-2.941a6.368 6.368 0 0 1 1.626-6.064l1.501-1.502 1.501 1.5L4.664 16c-2.312 2.309-1.255 6.256 1.903 7.101a4.247 4.247 0 0 0 4.101-1.098l1.5-1.5 1.501 1.5Zm0-10.507 1.5 1.501-7.502 7.507-1.502-1.503 7.504-7.504v-.001Z"/></g></svg>'
---
import Button from '@site/src/components/Button'

# App

Find and connect to EVM chains with your Wallet.

<Button href="https://chainlist.amichain.org">chainlist.amichain.org</Button>

## Features

### Chains

All chains come from [`@Amichain/chainlist`](https://github.com/Amichain/chainlist), aggregated from various sources with all info.

### Icons

All icons come from [`@Amichain/chain-icons`](https://github.com/Amichain/chain-icons) repository.  
Optimized SVG icons are prioritized, but various formats are available to reduce the number of entries without icons.

### Advanced search

#### Searchbar

You can search any chain by name or by chain ID using the main searchbar.

#### Filters

You can include or exclude chains by several criteria:
- Testnet chains
- Chains with an explorer
- Chains with a website

#### Order

You can order chains by several criteria (asc or desc):
- Name
- Chain ID
- TVL (data provided by [`DefiLlama`](https://defillama.com/chains))

#### Chain details

When you click on a chain, a panel with all the information shows up:
- Chain icon
- Chain name
- Native currency name
- If applicable, [`CoinMarketCap`](https://coinmarketcap.com) and [`CoinGecko`](https://coingecko.com) links
- If applicable, TVL (in USD) from [`DefiLlama`](https://defillama.com/chains)
- Chain ID
- RPC Urls
- If applicable, WebSocket Urls
- Explorer(s) Url(s)
- For testnet chains, if applicable, faucet(s) Url(s)