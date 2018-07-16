pragma solidity ^0.4.23;

contract GetSet {
    string Name;
    uint16 Age;
    string Contact;

    function set(string name, string contact, uint16 age) public{
        Name = name;
        Contact = contact;
        Age = age;
    }

    function get() public view returns(string, string, uint16){
        return (Name, Contact, Age); 
    }
}