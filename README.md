Luxcore Node
============

A LUX full node for building applications and services with Node.js. A node is extensible and can be configured to run additional services.

## Getting Started

1. Install nvm https://github.com/creationix/nvm  

    ```bash
    nvm i v6
    nvm use v6
    ```  
2. Install mongo https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/  

3. Install lux-bitcore https://github.com/216k155/lux-bitcore - with ZMQ !

    ```bash
    # with ZMQ
    sudo apt-get install libzmq3-dev 
    ```  
4. Install luxcore-node

    ```bash
    npm i https://github.com/216k155/luxcore-node.git#master

    $(npm bin)/luxcore-node create mynode

    cd mynode

    ```  
5. Edit luxcore-node.json

    ```json
    {
      "network": "livenet",
      "port": 3001,
      "services": [
	    "luxd",
        "web"
      ],
      "servicesConfig": {
        "luxd": {
          "spawn": {
            "datadir": "/home/user/.lux",
            "exec": "/home/user/lux-bitcore/src/luxd"
          }
        }
      }
	}
    ```  
6. Edit lux.conf

    ```
    server=1
    whitelist=127.0.0.1
    txindex=1
    addressindex=1
    timestampindex=1
    spentindex=1
    zmqpubrawtx=tcp://127.0.0.1:28332
    zmqpubhashblock=tcp://127.0.0.1:28332
    rpcallowip=127.0.0.1
    rpcuser=user
    rpcpassword=password
    rpcport=9888
    reindex=1
    gen=0
    addrindex=1
    logevents=1
    ```  
7. Run Node  

    ```
    $(npm bin)/luxcore-node start
    ```  

## Add-on Services

There are several add-on services available to extend the functionality of Luxcore:

- [LUX Insight API](https://github.com/216k155/insight-api)
- [LUX Explorer](https://github.com/216k155/lux-explorer)

## Contributing



## License
