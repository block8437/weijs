const Wei = require('../src/Wei.js');
const assert = require('assert');

const WeiRPCMethods = [
    "web3_clientVersion",
    "web3_sha3",
    "net_version",
    "net_peerCount",
    "net_listening",
    "eth_protocolVersion",
    "eth_syncing",
    "eth_coinbase",
    "eth_mining",
    "eth_hashrate",
    "eth_gasPrice",
    "eth_accounts",
    "eth_blockNumber",
    "eth_getBalance",
    "eth_getStorageAt",
    "eth_getTransactionCount",
    "eth_getBlockTransactionCountByHash",
    "eth_getBlockTransactionCountByNumber",
    "eth_getUncleCountByBlockHash",
    "eth_getUncleCountByBlockNumber",
    "eth_getCode",
    "eth_sign",
    "eth_sendTransaction",
    "eth_sendRawTransaction",
    "eth_call",
    "eth_estimateGas",
    "eth_getBlockByHash",
    "eth_getBlockByNumber",
    "eth_getTransactionByHash",
    "eth_getTransactionByBlockHashAndIndex",
    "eth_getTransactionByBlockNumberAndIndex",
    "eth_getTransactionReceipt",
    "eth_getUncleByBlockHashAndIndex",
    "eth_getUncleByBlockNumberAndIndex",
    "eth_newFilter",
    "eth_newBlockFilter",
    "eth_newPendingTransactionFilter",
    "eth_uninstallFilter",
    "eth_getFilterChanges",
    "eth_getFilterLogs",
    "eth_getLogs",
    "eth_getWork",
    "eth_submitWork",
    "eth_submitHashrate",
    "shh_post",
    "shh_version",
    "shh_newIdentity",
    "shh_hasIdentity",
    "shh_newGroup",
    "shh_addToGroup",
    "shh_newFilter",
    "shh_uninstallFilter",
    "shh_getFilterChanges",
    "shh_getMessages"
];

describe('WeiRPC', function() {
    const wei = new Wei("http://localhost:8545");

    describe('#modules', function() {
        it('should return a list of modules', async function() {
            const modules = await wei.rpc.modules();

            assert(modules instanceof Object);

            const found = Object.keys(modules).sort();

            assert.deepEqual(found, [ 'eth', 'personal', 'rpc', 'web3' ]);
        });
    });

    describe('#rpcMethods', function() {
        it('should have all the necessary rpc methods', function () {
            const methods = WeiRPCMethods.map((x) => x.split('_'));

            for ( const method of methods ) {
                assert.notEqual(wei.rpc[method[0]][method[1]], undefined);
            }
        });

        // TODO - validate that they work?
    });
});