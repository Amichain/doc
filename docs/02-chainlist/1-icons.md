---
sidebar_custom_props:
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"/><path d="M9 12h4.2M9 12V9.296c0-.471 0-.707.146-.853c.147-.147.383-.147.854-.147h3.2c.994 0 1.8.83 1.8 1.852S14.194 12 13.2 12M9 12v2.704c0 .471 0 .707.146.853c.147.147.383.147.854.147h3.2c.994 0 1.8-.83 1.8-1.852S14.194 12 13.2 12m-2.706-3.704V7m0 10v-1.296m2.404-7.408V7m0 10v-1.296"/></g></svg>'
---
import GithubButton from '@site/src/components/GithubButton'

# Icons

A list of chain icons.

<GithubButton href="https://github.com/Amichain/chain-icons">@Amichain/chain-icons</GithubButton>

## Usage

Each icon can be accessed directly in GitHub raw:
```
https://github.com/Amichain/chain-icons/blob/main/<ext>/<chain-id>.<ext>>?raw=true
```

However, this method has some limitations and cannot be used in HTML `<img>` tags due to CORS policy.

We suggest using a CDN service such as [`jsdelivr.net`](https://jsdelivr.net) in that case:
```
https://cdn.jsdelivr.net/gh/Amichain/chain-icons/<ext>/<chain-id>.<ext>
```

Note that SVG icons are preferred, but not all chains have an SVG icon.  
You should use the appropriate file extension for each chain.  
You can use [@Amichain/chainlist](https://github.com/Amichain/chainlist) to determine the correct icon extension for a given chain.