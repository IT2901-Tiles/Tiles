/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

const MongoClient = require('mongodb').MongoClient;
module.exports = (on, config) => {
  on('task', {
    updateTask (id) {
      console.log("cusk")
      return new Promise((resolve) => {
        MongoClient.connect('mongodb+srv://Tiles:CoolCoolCool@tilescluster.87fob.mongodb.net/tilesCards?retryWrites=true&w=majority', (err, client) => {
          if (err) {
            console.log(`MONGO CONNECTION ERROR: ${err}`)  
            throw err;
          } else {
            
            console.log("Connected correctly to server");
            const db = client.db("tilesCards");
            // Find one document
            const myDoc =  db.collection("ideas").findOne({}, {sort:{$natural:-1}})
            console.log(myDoc)
            
          }
        });
      }); // end of return Promise
    }
  }) // end of task
}

module.exports = (on, config) => {
  if (config.testingType === 'component') {
    require('@cypress/react/plugins/react-scripts')(on, config)
  }

  return config
}