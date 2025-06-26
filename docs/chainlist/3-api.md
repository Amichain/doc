---
sidebar_custom_props:
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 7H5a2 2 0 0 0-2 2v8h2v-4h2v4h2V9a2 2 0 0 0-2-2m0 4H5V9h2m7-2h-4v10h2v-4h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2m0 4h-2V9h2m6 0v6h1v2h-4v-2h1V9h-1V7h4v2Z"/></svg>'
---
import ExternalLink from '@site/src/components/ExternalLink'
import ApiEndpointTitle from '@site/src/components/ApiEndpointTitle'
import ClipboardCopy from '@site/src/components/ClipboardCopy'

# API

Access chainlist data to integrate into your apps.

Endpoint:  
<ExternalLink href="https://chainlist-api.amichain.org/">chainlist-api.amichain.org</ExternalLink> <ClipboardCopy value="https://chainlist-api.amichain.org/" />

<ApiEndpointTitle method="GET" href="https://chainlist-api.amichain.org/chains">/chains</ApiEndpointTitle>
<ClipboardCopy value="https://chainlist-api.amichain.org/chains" />  
Get all chains data.

<ApiEndpointTitle method="GET" href="https://chainlist-api.amichain.org/chain/1">/chain/:chainId</ApiEndpointTitle>
<ClipboardCopy value="https://chainlist-api.amichain.org/chain/:chainId" />  
Get data for one chain by chain ID.

<ApiEndpointTitle method="GET" href="https://chainlist-api.amichain.org/icon-url/1">/icon-url/:chainId</ApiEndpointTitle>
<ClipboardCopy value="https://chainlist-api.amichain.org/icon-url/:chainId" />  
Get icon url by chain ID.

<ApiEndpointTitle method="GET" href="https://chainlist-api.amichain.org/icon/1">/icon/:chainId</ApiEndpointTitle>
<ClipboardCopy value="https://chainlist-api.amichain.org/icon/:chainId" />  
Get icon by chain ID.