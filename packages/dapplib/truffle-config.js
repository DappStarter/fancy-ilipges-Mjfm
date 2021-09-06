require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture story renew place artefact grace office army gesture'; 
let testAccounts = [
"0x281d7cc5d26421d558b865dc81dd91c2913b54660b730c9725ceee598cc3a897",
"0x398de132bea4018a6dddb08247b49e18b6192f2f53921ae273b801a80e984da1",
"0x5d19545c652c404b186d9eb0a941f43ee7784af1efb3e79e97de1c067d301f10",
"0x19f5aff3f8657f6a8f8a7933998b7b6e7d6073eb7a34d63fefd289254b7ba207",
"0x8ea423b4300c508e6385be44e972a33d2b9591d7fb4bd8a3a3a96f5b94d6073b",
"0xc131b315c42b5532adbdf6a2f6bd1f98079e26b10871bec8e274b97594d60319",
"0x0a049ff4f2e26815c149905338adc09f1c972f668a9bdc0fb600e7623601c5e5",
"0xb29473c99a1c90a1a2194412ac81116ef020baff080827414bcdadac24857b25",
"0x5fa8f64213c8baa1c6907dad9b4dcd101d60e1d055811a295ee704ebb838c4d7",
"0x3f17cbf3dbf84804bdf46a447875fd4d5fd6cc496f8da276adb86d9dd33093c1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


