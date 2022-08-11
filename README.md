# nigeria-states-lgas

<!-- [![NPM](https://nodei.co/npm/naija-state-local-government.png)](https://nodei.co/npm/naija-state-local-government/) -->

<!-- [![npm version](https://badge.fury.io/js/naija-state-local-government.svg)](https://www.npmjs.com/package/naija-state-local-government) -->

A vanilla JavaScript utility project that lists all the states of Nigeria, senatorial zones and their local governments

### Installation

``` Javascript

npm install nigeria-states-lgas

```

### Example

``` Javascript
//ES5
const Required_Name = require('naija-state-local-government');

// ES6
import Required_Name from 'naija-state-local-government';

console.log(Required_Name.all());
console.log(Required_Name.states());
console.log(Required_Name.senatorialDistricts("Adamawa));
console.log(Required_Name.lgas("Oyo"));
```

<!-- ### Sample Usage
#### States
![alt](https://preview.ibb.co/iGaoGw/Screen_Shot_2018_01_22_at_12_39_46_PM.png)

#### LGAs
![alt](https://preview.ibb.co/mxrjpG/Screen_Shot_2018_01_22_at_12_40_09_PM.png)


| function    | argument                                            | response                                            |   |   |
|-------------|-----------------------------------------------------|-----------------------------------------------------|---|---|
| .all()      | none                                                | it returns all states and local government          |   |   |
| .states()   | none                                                | it returns all Nigeria states                       |   |   |
| .lga(state) | state(Nigeria state. Note: it's not case sensitive) | it returns the local government of the input state. |   |   | -->

### Features

List all senatorial zones, states local government areas and states in Nigeria

## Contributing
  ```
    ## Coming soon
  ```

<!-- * Fork this repositry to your account.
* Clone your repositry: git clone git@github.com:your-username/naija-state-local-government.git
* Create your feature branch: git checkout -b feature/<3-4 word feature description>
* Commit your changes: git commit -m "feature(scope): (subject) <BLANK LINE> (body) <BLANK LINE> (footer)"
* Push to the remote branch: git push origin new-feature
* Open a pull request.

- Commit Message Convention
    - scope should be something specific to the commit change e.g logo
    - subject text should:
        - use present tense: "save" not "saved" or "saving"
        - not capitalize first letter i.e no "Carry to safety"
        - not end with a dot (.)
    - Message body (optional) If a body is to be written, it should:
      - written in present tense.
      - include reason for change and difference in the previous behaviour

    - Message Footer This should be used for referencing the issues using the following keywords: Start, Delivers, Fixes and Finishes. It should be written as:
      - [Start #345] -->
    
## License

This project has been licenced for 
 use, modification and distribution under [the MIT license](**https://en.wikipedia.org/wiki/MIT_License**). All rights reserved. &copy; <script type="text/javascript">document.write(new Date().getFullYear())</script>
