// I'm a comment!
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract Inbox {
    string public message;

    function setMessage(string memory _incommingMessage) public {
        message = _incommingMessage;
    }
}
