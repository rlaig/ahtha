There is no time requirement on this assignment. You can submit this according to your schedule

## Assignment
Use NextJS to create a simple page & API. Your tasks are
1. Setup **git** & **github repo** (you will be asked to share the repo with us)
2. Install & Setup NextJS and use **PAGE ROUTER**
3. Create a simple API that reads data from a JSON file and send it as a response
   1. Path should be `GET /api/campaigns`
   2. **BONUS** | Has the ability to paginate the data (4 items per page)
   3. **BONUS** | Has the ability to be filtered by campaign name & tags
4. Create a simple page that fetches data from the API and display it
   1. Route should be `/`
   2. The page should be done in [CSR (Client Side Rendering)](https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side) using [useSWR hook](https://swr.vercel.app/)
   3. The page should have a loading state while fetching data (the search bar should still be visible if you decide to do the bonus)
   4. **BONUS** | The page should have a search bar that can filter the data by campaign name & tags using [formik](https://formik.org/) (there are no need for validations)
   5. **BONUS** | The page should have a pagination that can navigate between pages

### Other Libraries
1. Other Bootstrap (or bootstrap like) specific React packages are allowed (like [react-bootstrap](https://react-bootstrap.netlify.app/), [react-widgets](https://jquense.github.io/react-widgets/), ...etc)
2. Other React packages are allowed (like [moment](https://momentjs.com/), [lodash](https://lodash.com/), ...etc)

### Styling
1. Must integrate [Bootstrap](https://getbootstrap.com/) through SCSS
2. You should try your best to use Bootstrap's components & utilities classes
   1. The least amount of SCSS written the better
   2. No inline styles except styles that are derived from the API response like using `background: url(...)` to display an image from the API response
3. Each page or component should have its own SCSS file

### Card Style & Behaviour Reference
![image](https://i.imgur.com/2pKANdw.png)

1. Take this image as a reference to what and how to display the data (You do not have to make this pixel/color perfect).
1. **Bonus** | Consider truncating `description` so they are a max of 2 lines
2. **Bonus** | Consider truncating `name` so that they will not word wrap or overflow out of the container
3. **Bonus** | Consider adding popover effect on the truncate
4. **Bonus** | Consider making everything line up horizontally (ex, invest now should be on the same Y axis position even if the text is of different length)

### Data
```json
[
  {
    "banner": "https://s3-ap-east-1.amazonaws.com/angelhub-hk-files/campaign_banners/6ed/949/e42/b21/f44/72c/f79/d63/b7d/c0f/t1600_046baa93-ef99-4718-be3a-c3467ee0a870.jpg",
    "logo": "https://s3-ap-east-1.amazonaws.com/angelhub-hk-files/campaign_avatars/6ed/949/e42/b21/f44/72c/f79/d63/b7d/c0f/ddf77ade-caa0-4375-898c-95e5f9025d85.jpg",
    "name": "Plastics For Change",
    "tags": ["CircularEconomy", "ClimateTech", "ESGxTech", "ResponsibleSourcing", "SupplyChain"],
    "description": "The largest source of fair trade verified recycled plastic.",
    "raised": "270000",
    "target": "500000",
    "currency": "USD"
  }, {
    "banner": "https://s3-ap-east-1.amazonaws.com/angelhub-hk-files/campaign_banners/300/d51/337/376/b06/f47/64f/908/e51/6c4/t1600_04752a1e-b6f6-4c14-9b15-75e565503f71.jpg",
    "logo": "https://s3-ap-east-1.amazonaws.com/angelhub-hk-files/campaign_avatars/300/d51/337/376/b06/f47/64f/908/e51/6c4/7c1c79da-209f-4197-8911-0f5500262133.png",
    "name": "Diginex",
    "tags": ["ESGxTech", "FinTech"],
    "description": "Helping solve the world's most pressing challenges through impact technology",
    "raised": "4000000",
    "target": "4500000",
    "currency": "USD"
  }, {
    "banner":"https://s3-ap-east-1.amazonaws.com/angelhub-hk-files/campaign_banners/4df/ce8/d85/431/29a/b9c/06d/da0/a8e/eb6/t1600_7c793b5a-4ed2-475d-9521-2f07e89c48c0.png",
    "logo": "https://s3-ap-east-1.amazonaws.com/angelhub-hk-files/campaign_avatars/4df/ce8/d85/431/29a/b9c/06d/da0/a8e/eb6/45e5d46b-ee4f-4993-b9a6-730c1e228838.png",
    "name": "Cerqular Inc.",
    "tags": ["B2B2C", "Ecommerce", "Marketplace", "RetailTech", "SaaS/Consumer"],
    "description": "The Largest & Fastest Growing Sustainable & Circular CPG B2C + C2C Double-Sided Marketplace & SAAS Platform Globally",
    "raised": "11000000",
    "target": "12000000",
    "currency": "USD"
  }, {
    "banner": "https://s3-ap-east-1.amazonaws.com/angelhub-hk-files/campaign_banners/096/0f1/7a2/fb0/4f0/470/48d/ea1/a3c/4fc/t1600_ca85fc9f-f4e3-4012-b9dc-1376182653df.jpeg",
    "logo": "https://s3-ap-east-1.amazonaws.com/angelhub-hk-files/campaign_avatars/096/0f1/7a2/fb0/4f0/470/48d/ea1/a3c/4fc/fe99bd50-6c2d-4bc1-8f17-c5545c582cc9.jpeg",
    "name": "Anfin",
    "tags": ["FinTech"],
    "description": "To democratize access to financial assets to the next generation of Vietnamese retail investors",
    "raised": "6200000",
    "target": "6000000",
    "currency": "USD"
  }, {
    "banner": "https://s3-ap-east-1.amazonaws.com/angelhub-hk-files/campaign_banners/767/3af/76e/fdd/e41/91c/d32/264/bc4/ac7/t1600_ec837d1c-99f8-44ab-b14a-593fb7fecdcd.jpeg",
    "logo": "https://s3-ap-east-1.amazonaws.com/angelhub-hk-files/campaign_avatars/767/3af/76e/fdd/e41/91c/d32/264/bc4/ac7/15539a48-48a6-4635-a1ec-c2937134985f.png",
    "name": "Animoca Brands",
    "tags": ["Blockchain", "Entertainment", "Gaming"],
    "description": "Property Rights to Gamers",
    "raised": "3800000",
    "target": "3800000",
    "currency": "USD"
  }, {
    "banner": "https://s3-ap-east-1.amazonaws.com/angelhub-hk-files/campaign_banners/98f/a44/0fb/642/370/613/ef2/dba/076/a05/t1600_69be2dde-f94c-4b82-8848-fd258a8fb75e.jpg",
    "logo": "https://s3-ap-east-1.amazonaws.com/angelhub-hk-files/campaign_avatars/98f/a44/0fb/642/370/613/ef2/dba/076/a05/9cd03b47-6348-4c16-868d-90b2dbf898f6.png",
    "name": "Village Studio Games Ltd",
    "tags": ["Gaming"],
    "description": "Game makers, making NFT-interoperability valuable for players and developers.",
    "raised": "6500000",
    "target": "5500000",
    "currency": "EUR"
  }, {
    "banner": "https://s3-ap-east-1.amazonaws.com/angelhub-hk-files/campaign_banners/dd9/631/129/5af/7bd/6e5/d99/f51/a87/563/t1600_9a90a299-1ee6-42e7-98d2-b37b06394184.jpg",
    "logo": "https://s3-ap-east-1.amazonaws.com/angelhub-hk-files/campaign_avatars/dd9/631/129/5af/7bd/6e5/d99/f51/a87/563/c0188eb1-157e-4651-81cb-8178007e91d0.jpg",
    "name": "Bunch Live, Inc",
    "tags": ["Blockchain", "Gaming", "Mobile", "Social Network & Collaboration tools", "Web3.0"],
    "description": "Roblox meets Discord on the Blockchain",
    "raised": "8050000",
    "target": "8080000",
    "currency": "EUR"
  }, {
    "banner": "https://s3-ap-east-1.amazonaws.com/angelhub-hk-files/campaign_banners/715/d5a/6ed/144/a1b/3b4/bfd/dd5/3fa/022/t1600_2ec6d1c6-721b-4e8c-8887-e348b3dac0a5.jpg",
    "logo": "https://s3-ap-east-1.amazonaws.com/angelhub-hk-files/campaign_avatars/715/d5a/6ed/144/a1b/3b4/bfd/dd5/3fa/022/6fb9e036-4dc4-461f-ad04-08d38ecc2496.png",
    "name": "Antiverse Ltd.",
    "tags": ["Artificial Intelligence", "BioTech"],
    "description": "Engineering the future of drug discovery",
    "raised": "5000000",
    "target": "5000000",
    "currency": "EUR"
  }, {
    "banner": "https://s3-ap-east-1.amazonaws.com/angelhub-hk-files/campaign_banners/4d3/56b/f49/6d8/c25/3e7/f98/886/91a/c10/t1600_b1d132f8-77de-468d-84d4-ff5d099f029c.png",
    "logo": "https://s3-ap-east-1.amazonaws.com/angelhub-hk-files/campaign_avatars/4d3/56b/f49/6d8/c25/3e7/f98/886/91a/c10/16779f1e-946c-4f33-a7d6-8def69fde7af.png",
    "name": "WeLab",
    "tags": ["FinTech"],
    "description": "Bringing joy to your Financial journey",
    "raised": "250000",
    "target": "250000",
    "currency": "USD"
  }, {
    "banner": "https://s3-ap-east-1.amazonaws.com/angelhub-hk-files/campaign_banners/22f/ba6/092/367/8a4/78d/af0/0e5/487/d19/t1600_bbeb11d4-8843-49b3-90ac-a8d342cac78f.jpg",
    "logo": "https://s3-ap-east-1.amazonaws.com/angelhub-hk-files/campaign_avatars/22f/ba6/092/367/8a4/78d/af0/0e5/487/d19/b2e78a79-6e03-455d-ada9-fcc5a4a59143.png",
    "name": "Klang Games",
    "tags": ["Blockchain", "Gaming"],
    "description": "Simulating the future of humanity with seed - a massively multiplayer online role-playing game",
    "raised": "250000",
    "target": "250000",
    "currency": "USD"
  }, {
    "banner": "https://s3-ap-east-1.amazonaws.com/angelhub-hk-files/campaign_banners/863/db2/394/0c0/c2f/cd4/488/547/cae/53b/t1600_bd3165d7-f78c-4d6e-bde0-c11da35e05a4.jpg",
    "logo": "https://s3-ap-east-1.amazonaws.com/angelhub-hk-files/campaign_avatars/863/db2/394/0c0/c2f/cd4/488/547/cae/53b/f01de797-72ec-4eca-8cd6-8b114ac0ae91.png",
    "name": "Brand New Vision",
    "tags": ["Blockchain", "Cryptocurrency", "Fashion", "Marketplace"],
    "description": "Where fashion meets the metaverse",
    "raised": "250000",
    "target": "250000",
    "currency": "USD"
  }, {
    "banner": "https://s3-ap-east-1.amazonaws.com/angelhub-hk-files/campaign_banners/514/c94/7f8/44a/74b/767/c06/cee/d54/533/t1600_acd4f0a6-de98-4b88-b85a-ea5d1ddddf1c.png",
    "logo": "https://s3-ap-east-1.amazonaws.com/angelhub-hk-files/campaign_avatars/514/c94/7f8/44a/74b/767/c06/cee/d54/533/4de555c2-d4a6-4047-856e-042d10c23cf2.jpg",
    "name": "PouchNATION",
    "tags": ["FinTech ", "Payment", "SaaS/Enterprise"],
    "description": "Digitising SMEs in the hospitality sector to create a contactless experience for their guests in a post COVID-19 era.",
    "raised": "250000",
    "target": "250000",
    "currency": "USD"
  }
]
```