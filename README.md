Built with gatsby-starter-default.

# Flowra Site

## TODOs

[ ] Find out how to use the `Link` component witout producing double prefixes
    (see issue description below)

## Setup

The flowra site html and assets are hosted at Netlify https://flowra.netlify.com.

The site is served through https://www.flowra.com/about/ however, because sub-
domains are are being penalized in SEO. So instead of site.flowra.com, we serve
the site content at a flowra.com subpath with the main objective to improve the
SEO ranking.

To achieve this, our express.js server proxies requests for flowra.com/about/* to
the netlify server. See `server.js`.

Test serving the site locally through the proxy by opening
`https://flowra.local:4000/about/`.

### Paths

In order to serve the site from a subpath, we need to set `pathPrefix` in
`gatsby-config.js`. This automatically prefixes asset paths during build when
a special flag is set: `gatsby build --prefix-paths`. Netlify has been configured 
to use the build command with the flag.

This creates issues depending on the current env:

local: when developing locally with `$ gatsby develop`, paths aren't prefixed.
Hardcoded anchor hrefs however still contain the prefix, so links are broken.

https://flowra.netlify.com: in the build all paths contain the `/about` prefix
which can't be resolved here. As a result, the site is broken in this env. But
since the actual front end is at https://www.flowra.com/about/, we ignore this.

#### Gotcha: redirects

Netlify automatically redirects URLs that __lack a trailing slash__, e.g.
https://flowra.netlify.com/tos to https://flowra.netlify.com/tos/.

This __conflicts with the express.js proxy__, which can't handle the redirect
properly: https://www.flowra.com/about/tos will get redirected to
https://www.flowra.com/tos which loads the app and search for the song "tos".

Fix: always use canonical paths with trailing slash
https://www.flowra.com/about/tos/.

#### Gotcha: gatsby Link component

The `Link` component should be used to generate anchor elements because it takes
care of prefixing the href paths.

However, under certain circumstances the generated path is `/about/about/...`.
This seems to depend on wether the site was loaded under a canonical URL with
a trailing slash or not.

Temporary fix: __don't use Link component__ and hardcode anchor elements with
prefixed path.

### CDN

Even though Netlify provides SSL and CDN for the site, we want to use the Cloud-
flare CDN for the static site too. This requires to overwrite the default caching
header set by Netlify. See `gatsby-config.js`.

## Build commands

local development:

`$ gatsby develop`

local build

`$ gatsby build --prefix-paths`
