# Tiles

![test(coverage)](https://img.shields.io/badge/test%20coverage-47%2C77%25-orange)
![license(MIT)](https://img.shields.io/badge/license-MIT-green)

### Tiles
Our project is a digital interface to be used in innovation workshops for children in the age of 8-12, based on a card deck called Tiles. The Tiles card deck consists of 110 unique cards, which are sectioned into different categories. The overall idea is to enable innovative thinking processes by using combinations of these cards in a workshop-like manner. These innovative ideas can be for example Internet of Things (IoT) items, that can be produced later. The different combinations of the cards are going to give the users an interactive metaphor, which in our case will be animations. The users can be able to save their ideas as both text or audio.

### Background and Motivation 
There already exists a physical interface using the Tiles card deck, that is targeted at youths. Our project task is mainly about digitising this interface. In addition to digitising the already existing physical interface, the group will ensure that the children are satisfied and able to use the interface in a convenient and effective way. Together with our customer we thought that smaller children have a lot of great and innovative ideas that might be useful in the future of Internet of Things. With this in mind, it was fun to develop the application.

### Features
Unique for this project is the way the application is organised. The children only have to pick out three cards and then an animation is automatically generated based on the combination of these cards. The children can experiment with all the different cards in whichever way they find fun and useful. The children are also able to record their idea as audio or write it as text and download it. The group think that this can help users being innovative and to think outside the box.

### Visuals and Usage
The user will start on a front page with the possibility to start picking out cards. The user must choose three cards, one from each category, before it is possible to push the "Run!" button. As a child you pick out the cards "temperature", "umbrella" and "color change" for example. The animation will then display this combination of cards. In this example animation the umbrella will change colour when the temperature drops. The children might find this idea really innovative and quite fun. The user can then write this idea as a text file or record an audio file and download it to their local computer.
The gif below shows this process.

![image](https://user-images.githubusercontent.com/42800220/114179432-42f0d180-993f-11eb-9346-3843a9b4651d.gif)

### How to run the application
1. <code>git clone https://github.com/IT2901-Tiles/Tiles.git</code>
2. Navigate to the tiles01/frontend folder.
    1. Run <code>npm install</code>
    2. Run <code>npm run build</code>
3. Navigate to the tiles01/backend folder.
    1. Run <code>npm install</code>
    2. Run <code>npm start</code>
4. Open http://localhost:8484/ in your preferred browser

### How to run tests

1. Navigate to the tiles01/frontend folder.
2. Unit tests:
    1. Run <code>npm test</code> to run the jest unit tests.
    2. Run <code>npm test -- --coverage --watchAll=false</code> to see the test coverage.
    3. Run <code>npm run cypress:open-unit</code> to run the cypress component tests.
3. End-to-end tests:
    1. Run <code>npm run cypress:open</code> to open Cypress.
    2. Click the test file that appears to run it.

### Roadmap
Our project has been limited in the number of cards we chose to include, because developing all the animations from scratch takes a lot of time. There are also other ideas for releases in the future, some of them are listed below.
* Add more cards, so there can be more animations. This can spark the children's creativity even more.
* Add a voice that will read the instructions to the children and the text on the cards. This will facilitate more for children with reading disabilities.
* Let the children be able to log in with their own user. Then it will not breach GDPR to let them record and save the audio in the database, and not just download it.
* Make it possible for children to work together to come up with better ideas.
* Facilitate the application more for children with disabilities. This includes zooming on the animations and making the colour better suited for colourblind.
* Make it possible to listen to the recorded audio on iPhones with the iOS operating system.

### Contributing
Pull requests are welcome for everyone that has ideas. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

### Authors and Acknowledgment
Thanks to our product owner Giulia Cosentino, our supervisor Marius Sjøberg, NTNU for giving us this project and the group members Millie Burhol Austad, Gunvor Huso, Emilie Kalleberg, Stuart Gallina Ottersen, Karen Villmones, Anne Mosvold Ørke and Malin Holte.

### License
The source code for the site is licensed under the [MIT license](https://choosealicense.com/licenses/mit/)

Copyright (c) 2021 Stuart Gallina Ottersen, Millie Burhol Austad, Gunvor Huso, Emilie Kalleberg, Karen Villmones, Anne Mosvold Ørke and Malin Holte.
