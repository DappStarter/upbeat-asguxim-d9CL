require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift radar snow upgrade journey enter equal gentle'; 
let testAccounts = [
"0x53b468be6a9a38a5dd6dfd66cfbc6b194940992bb73f5f9e8115d6229ecc8d32",
"0x45b5c84113ffa754e5453823a966cbc2c0ca996c3e66aa675350eeb73ec105cc",
"0x527e8d1e044a18b5d5e992cd753faf40843b5679e6458dce2095910f373fca23",
"0xab7a1cb9299267c4917ecb8f70436ccbc2d9a286110fc07efd28242b3629c75b",
"0x6980e7861e5e5f66a379867caab6ab665383b2a52bb2959ece9a83897c50780f",
"0x0f4b95fc15e2efa13bd41e5bbf37bc5dcf13b19588ad0fb0e8beb7ba2aeec219",
"0xe7e58e8ad85b4c0a4987756039979813db44770460ee3910ba2db52ad964f8af",
"0xa0b5f9b593c5f3030acbe3fdf798acbb2ade6c77212c82ea4d11f70714efb59b",
"0x9823585c4b10003aa8d21f71859e4f9bbf524b66e1d9278d24a42c159a6ea67c",
"0x4c8f30a5cade5cb25c5bfffe82acaccb0e83ed245775edce006b6f9db6c7f1b6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

