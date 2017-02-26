module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : "eat-record",
      script    : "./build/eat-record/server.js",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "production"
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      "user" : "leaves-27",
      "host" : "funnyxiu.com",
      "ref"  : "origin/0225",
      "repo" : "https://github.com/leaves-27/eat-record.git",
      "path" : "/data/nodejs/eat-record",
      "post-deploy" : "npm install && bower install && npm run prod"
    }
  }
}
