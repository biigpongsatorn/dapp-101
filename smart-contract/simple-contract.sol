pragma solidity ^0.4.18;

contract SimpleContract {
    string myname;
    
    function setMyName (string name) public {
        myname = name;
    }
    
    function getMyName () public view returns(string) {
        return myname;
    }
}
