/**
 * Demonstratuon of getter and setter function in Blockchain using node.js, solidity, web3.js and truffle
 * steps to run this app
   * install truffle globally
     - npm install -g truffle
   * install ganache-cli globally
     - npm install -g ganache-cli
   * upgrade node.js version to latest
   * npm install 
   * open cmd prompt and type ganache-cli to run testrpc
   * then type truffle migrate --reset
   * run node server by typing node index.js
   * then you can use two routes
        - http://localhost:8080/test/set
        - methode: post
        - body : {
        	"name":"username",
	        "age":37,
	        "contact":"7033331111"	
        }
        - http://localhost:8080/test/get

**/