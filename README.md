# _Beep Boop Machine_

#### _Takes inputted number and returns a range counting to that number_ **01/24/2020**

#### By: _**Joshua Hellman**_

## Description

_This is a program that takes in an number inputted by a user and counts up to that number but mutates the output of certain numbers based on the specs listed bellow_

## Specs

| Behavior                                                                                                                                              | input  | output                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------- |
| The program returns a range of numbers from the users inputted number.                                                                                | 4      | "0, 1, 2, 3, 4"                                                        |
| The program will replace all numbers containing a 1 with "Beep"                                                                                       | 1      | "0, Beep"                                                              |
| The program will replace all numbers containing a 2 with "Boop"                                                                                       | 2      | "0, Beep, Boop"                                                        |
| The program will take a name input from the user and use it later in the program if no name provided a random name will be used from a list of names. | "Josh" | "Josh" will replace {user name} in next spec                           |
| The program will replace all numbers containing a 3 with "I'm sorry {user name} but I'm afraid I can't do that"                                       | 3      | "0, Beep, Boop, I'm sorry {user name} but I'm afraid I can't do that" |

- _These rules are written in order of precedence_
  - 12 returns "Boop"
  - 23 returns "I'm sorry {user name} but I'm afraid I can't do that"

## Setup/Installation Requirements

_Make sure you have [git version control](https://git-scm.com/downloads) installed on your computer._

1. find the green 'Clone or Download' button and copy the link
2. open a terminal window and type...

**Windows**
```sh 
cd desktop
```

 Mac & linux 
 ```sh
 cd ~/Desktop
 ```

 3. in terminal type '_git clone https://github.com/jhell85/epicodus-beep-boop.git_ '

```sh
git clone https://github.com/jhell85/epicodus-beep-boop.git
```

4. navigate to the new folder that was created on your desk
5. select index.html
6. right click on the file and select _'open with'_
7. select your browser you choose to view this site in
8. watch the computer count for you

## Known Bugs

_No known Bugs at this time_

## Support and contact details

_Use at your own risk_

## Technologies Used

_HTML, CSS, Jquery, Javascript, Bootstrap_

### License

_MIT_

Copyright (c) 2020 **Joshua Hellman**
