const WeiProvider = require("./WeiProvider.js");

/** A {@link WeiProvider} object that can wrap a Web3 provider. */
class WeiWeb3Provider extends WeiProvider {
    /**
     * Create a provider that wraps a Web3 provider.
     *
     * @param {(Web3.HttpProvider|Web3.IpcProvider)} provider - The Web3 provider.
     */
    constructor(provider) {
        super();
        this.provider = provider;
    }

    /**
     * Send data to the Web3 provider. Will call sendAsync and wrap that with a promise.
     *
     * @param {(string|Object)} payload - Data to be sent to the RPC.
     * @returns {string} The result from the RPC.
     */
    send(payload) {
        return new Promise((resolve, reject) => {
        	const fn = this.provider.sendAsync || this.provider.send;

			fn(payload, (err, res) => {
                if ( err || !res ) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
    }
}

module.exports = WeiWeb3Provider;