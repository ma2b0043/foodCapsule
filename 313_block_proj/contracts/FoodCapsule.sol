// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;
pragma experimental ABIEncoderV2;


contract FoodCapsule {
    uint public dishCount = 0;

    struct Dish {
        uint id;
        string name;
      //  string dateOfOrigin;
        string dishSignifcance;
  //        string dishImageAddress; //optional, use getter to get address and show it on web page and show image, but can cause problem because hpws can other people access image from a remote person machine 
        string category;
        string procedure;
    }
    bool check;
    Dish[] public allDishes;
    Dish[] public desiDishes;
    Dish[] public asianDishes;
    Dish[] public easternDishes;
    Dish[] public westernDishes;

    constructor() public {
        check = false;
    }
    
    function createDish1(string memory _name, string memory _dishSignifcance, string memory _category , string memory _procedure) public {
        require(keccak256(abi.encodePacked(_category)) == keccak256(abi.encodePacked('desi')) || keccak256(abi.encodePacked(_category)) == keccak256(abi.encodePacked('asian')) || keccak256(abi.encodePacked(_category)) == keccak256(abi.encodePacked('eastern')) || keccak256(abi.encodePacked(_category)) == keccak256(abi.encodePacked('western')));
        dishCount ++;
        allDishes.push(Dish(dishCount, _name, _dishSignifcance,  _category , _procedure));
       
    }




    function createDish(string memory _name, string memory _dishSignifcance, string memory _category , string memory _procedure) public {
        //require(keccak256(abi.encodePacked(_category)) == keccak256(abi.encodePacked('desi')) || keccak256(abi.encodePacked(_category)) == keccak256(abi.encodePacked('asian')) || keccak256(abi.encodePacked(_category)) == keccak256(abi.encodePacked('eastern')) || keccak256(abi.encodePacked(_category)) == keccak256(abi.encodePacked('western')));
        dishCount ++;
        allDishes.push(Dish(dishCount, _name, _dishSignifcance,  _category , _procedure));
       /* if ( keccak256(abi.encodePacked(_category)) == keccak256(abi.encodePacked('desi')) ) {
            desiDishes.push(Dish(dishCount, _name,  _dishSignifcance,  _category , _procedure));
            //check = true;
        }
        else if ( keccak256(abi.encodePacked(_category)) == keccak256(abi.encodePacked('asian')) ) {
            asianDishes.push(Dish(dishCount, _name, _dishSignifcance,  _category , _procedure));
            //check = true;
        }
        else if ( keccak256(abi.encodePacked(_category)) == keccak256(abi.encodePacked('eastern')) ) {
            easternDishes.push(Dish(dishCount, _name, _dishSignifcance,  _category , _procedure));
            //check = true;
        }
        else if ( keccak256(abi.encodePacked(_category)) == keccak256(abi.encodePacked('western')) ) {
            westernDishes.push(Dish(dishCount, _name, _dishSignifcance,  _category , _procedure));
            //check = true;
        }  */
    }

    function getAllDishes() public view returns (Dish[] memory) {
        return allDishes;
    }

    function getDesiDishes() public view returns (Dish[] memory) {
        return desiDishes;
    }

    function getAsianDishes() public view returns (Dish[] memory) {
        return asianDishes;
    }

    function getEasternDishes() public view returns (Dish[] memory) {
        return easternDishes;
    }

    function getWesternDishes() public view returns (Dish[] memory) {
        return westernDishes;
    }

    function getSpecificDishRecipe(string memory _name) public payable returns (Dish memory) {
        
        for (uint i = 0; i < allDishes.length; i+=1) {
            if( keccak256(abi.encodePacked(allDishes[i].name)) == keccak256(abi.encodePacked(_name))) {
                check = true;
                return allDishes[i];
            }
        } 
    }

    
}
