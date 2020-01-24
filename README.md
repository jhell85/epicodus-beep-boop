# _Beep Boop Machine_

#### _Takes inputted number and returns a range counting to that number_ **01/24/2020**

#### By: _**Joshua Hellman**_

## Description

_This is a program that takes in an number inputted by a user and counts up to that number but mutates the output of certain numbers based on the specs listed bellow_

## Specs

Behavior | input | output
---------|-------|--------
The program returns a range of numbers from the users inputted number. | 4 | "0, 1, 2, 3, 4"
program will replace all numbers containing a 1 with "Beep" | 1 | "0, Beep"
Program will replace all numbers containing a 2 with "Boop" | 2 | "0, Beep, Boop"
program will replace all numbers containing a 3 with "I'm sorry {User input} but I'm afraid I can't do that" | 3 | "0, Beep, Boop, I'm sorry {User input} but I'm afraid I can't do that"

* _These rules are written in order of precedence_ 
  * 12 returns "Boop"
  * 23 returns "I'm sorry {User input} but I'm afraid I can't do that"
## Setup/Installation Requirements

* _find the green 'Clone or Download' button and copy the link_
* _open a terminal window and type cd /Desktop on a mac/linux on a windows type cd Desktop_
* _in terminal type 'git clone {link to repository} ' note : remove {} from your command_
* _navigate into the new folder that was created on your Desktop_
* _select index.html_
* _right click and select open with_
* _select your browser_
* _enjoy the Beep Boop Machine_

## Known Bugs

_No known Bugs at this time_

## Support and contact details

_Use at your own risk_

## Technologies Used

_HTML, CSS, Jquery, Javascript, Bootstrap_

### License

*MIT*

Copyright (c) 2016 **Joshua Hellman**
