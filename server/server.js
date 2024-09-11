// const express = require('express')
// const app = express()

// app.get("/api", (req, res) => {
//     res.json({ "users": ["userOne", "userTwo", "userThree"] })
// })



// app.listen(5000, () => {console.log("Server started on port 5000")})
// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/ebay/items', async (req, res) => {
  const fetch = (await import('node-fetch')).default;

  const options = {
    method: 'GET',
    headers: {
      'User-Agent': 'insomnia/9.3.3',
      'X-EBAY-C-MARKETPLACE-ID': 'EBAY_US',
      'X-EBAY-C-ENDUSERCTX': 'affiliateCampaignId=<ePNCampaignId>,affiliateReferenceId=<referenceId>',
       Authorization: 'Bearer v^1.1#i^1#f^0#r^0#I^3#p^1#t^H4sIAAAAAAAAAOVYa2wUVRTe7YOHBXkJFQLJZhAIlpm5O7OvmbCr25baYqGFXSrF8pidudMOnZ1Z5t6huxhibYREAkSFEINGqog2IBElGH+I8Y/4QBMSo6ZKIhoFH4QgaIqi6N3dUraVQKGb2MT5M7n3nnPu+b57zrkP0D5i9L2bqzf3jHWOLOhsB+0FTqe7BIweUVx2Z2HBtGIHyBFwdrbf017UUfjDfCTF9YS4FKKEaSDoSsZ1A4mZziBlW4ZoSkhDoiHFIRKxLEbCi2pFjgFiwjKxKZs65aqpDFJewPmgoPgCHo8/AFWB9BpXbUbNIOXjVDfw84IqKB7yBcg4QjasMRCWDBykOMB5aCDQgI8CrwiA6OUZPgBWUK4GaCHNNIgIA6hQxl0xo2vl+HpjVyWEoIWJESpUE66K1IVrKhcsjs5nc2yFenmIYAnbqH+rwlSgq0HSbXjjaVBGWozYsgwRothQdob+RsXwVWduw/0s1R4YAEDlfH7Jw/GKlBcqq0wrLuEb+5Hu0RRazYiK0MAaTt2MUcJGbC2UcW9rMTFRU+lK/5bYkq6pGrSC1ILycGO4vp4KVbRIlg5RhF4KsaTp4QQdKV9O+/w+QRZ8BBIBrsT8bn/vRFlrvTQPmKnCNBQtTRpyLTZxOSRew/7ceERvDjdEqM6os8IqTnuUK+e/yqHfuyK9qNlVtHGLkV5XGCdEuDLNm69AnzbGlhazMeyzMHAgQ1GQkhIJTaEGDmZisTd8kihItWCcEFm2ra2NaeMZ02pmOQDc7PJFtRG5BcZJhCTj6VzPyms3V6C1DBQZEk2kiTiVIL4kSawSB4xmKuTh/MAn9PLe363QwN5/deRgZvtnRL4yRPH6Yyrg/D5vQOYFv5CPDAn1Bimb9gPGpBQdl6xWiBO6JENaJnFmx6GlKSLvVTk+oEJa8Qkq7RFUlY55FR/tViEEEMZishD4PyXKYEM9AmUL4rzEet7i/IFotRBOYo1fv2AZ4FKNFUqgbGHZQ7iyStvQ0LaMc29gly+tXd/8oNAYHGw2XBd8ha4RZqJk/nwQkM71/JFQbSIMlSHBi8hmAtabuianhtcC85ZSL1k4VW6nSDsCdZ38hgQ1nEjU5Kdi5w3kLRaL28Odv53qP9qlrosKpQN3eKFK6yNiQEpoDNmH0rmeYmQzzpoSOYSku1dnvHYNELyuEBuzU0yzDREmnijkHDhoJY0Uc4ZsacrgVbIbJgExeBVyyVBsGd/WRJmdmSFsas0tGN3SnMmhkBKz9dbBqyhQ0ocUohq5agyrACVIs5A1JXtHYDK4GbReZiyITNsi1yOmLn1kjpqt0CAHEGyZug6tBveQS288bmMppsPhVoPzUIs0kuvOS8PshOT2c16eF3xefkjY5Mz5Z/Vw20HyvXPewk2I7f8uE3JkPneH8yPQ4TxW4HSCSkC7y8DcEYXLigrHUIjUHgZJhhIzk4wmqQwpe4aEbQsyrTCVkDSrYJLj+DrHvPY7qtlDW5o6yqJrU45ROc9DnSvB3X0PRKML3SU5r0Vg+rWRYve40rGcBwiAB14AvPwKMPPaaJF7StFdn7SMLI8ajzfNPn2kaTNw7Z5w7tzbYGyfkNNZ7CCx7Cj+rCU4qXjbmx/u//2blW98NWvypYrXO49MqJ70bPK1OafP7P384oFHZl98D518eE+y9PtRJze91RicE3rnxP51rNHZ2lTKzXn/03nqnrLuQHfjLw1/T9v35dyuF57etmp/829TXlpd8jPruNz64gcfz9315DN/nH2lp6T6CSd3YnfPyoXjw7We72rqJjPn3XHvjPPHF6Kj46R9V2ZcfmrnrgM71tD71nxbNV3/aWMPrGp8HrzrGbNpryvpOnW429H+nFa+Y+qaQ6XF3UtO/bXhaNX2o56DZy78+fLOrQd/lC7cF3dMvLK1o7MWbufqulaNfyyamvl10RdTts56dN1Ga+Kxs1Prwa9dga7DPfe3vkpl1/QfvFKzNbgTAAA=',
    },
  };

  try {
    const response = await fetch('https://api.sandbox.ebay.com/buy/marketplace_insights/v1_beta/item_sales/search?q=iphone&category_ids=9355&limit=3', options);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
console.log("test");