/**
 * @type {import('infinitymint/dist/app/interfaces').InfinityMintProject}
 */
const grafnet = {
  name: "grafnet",
  price: "$1",
  modules: {
    random: "SeededRandom",
    assets: "SimpleSVG",
    minter: "DefaultMinter",
    royalty: "DefaultRoyalty",
  },
  information: {
    tokenSymbol: "†",
    tokenSingular: "Example",
  },
  permissions: {
    all: [],
  },
  assets: [],
  paths: [
    {
      name: "Grafnet Ticket",
      fileName: "grafnet.svg",
    },
  ],
  events: {},
  newStandard: true,
};
module.exports = grafnet;
