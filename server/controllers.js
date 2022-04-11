
const fetch = require('node-fetch'); // required v2 of node-fetch to use fetch
const Song = require('./models');

require('dotenv').config()

const controllers = {

  async addSong(req, res, next) {
    try{
      console.log(req.body);
      const { track, artist, previewLink, dataObj } = req.body; 
      const newSong = await Song.create({ track, artist, previewLink, dataObj });
      console.log(newSong); 
      res.locals.newSong = newSong;
      return next();
    }
    catch(err){
      return next({
        log: err,
        message: {
          err: 'controllers.addSong ERROR: check server logs for details'
        }
      })

    }

  },

  //getSongList()
  //should return an array of song ids 

  getId(req, res, next) {
    // how to use the spotify web api reference to search and send back an appropriate ID
  
    // store the id in res.locals
    return next();
  },
  
  getSong(req, res, next) {
    const id = "6rqhFgbbKwnb9MLmUQDhG6"
    fetch(`https://api.spotify.com/v1/tracks/${id}`, {
      method: "GET",
      headers: {
        // Authorization: `Bearer ${userAccessToken}`
        Authorization: `Bearer ${process.env.CLIENT_ID}`
      }
    })
    .then(response => response.json())
    .then(response => console.log(response));
    return next();
  },


};




// const Test = {};

// // app.use('/', Test.getId, Test.getSong, (req, res) => {...}

// Test.getId = (req, res, next) => {
//   // how to use the spotify web api reference to search and send back an appropriate ID

//   // store the id in res.locals
//   return next();
// }

// Test.getSong = (req, res, next) => {
//   const id = "6rqhFgbbKwnb9MLmUQDhG6"
//   fetch(`https://api.spotify.com/v1/tracks/${id}`, {
//     method: "GET",
//     headers: {
//       // Authorization: `Bearer ${userAccessToken}`
//       Authorization: `Bearer ${process.env.CLIENT_ID}`
//     }
//   })
//   .then(response => response.json())
//   .then(response => console.log(response));
//   return next();
// }

module.exports = controllers;
