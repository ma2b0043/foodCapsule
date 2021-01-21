const FoodCapsule = artifacts.require("FoodCapsule");

module.exports = function (deployer) {
  deployer.deploy(FoodCapsule);
};
