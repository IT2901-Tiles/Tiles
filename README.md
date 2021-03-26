# Tiles

### Tiles
Our project is a digital interface to be used in innovation workshops for children (age 8-12) based on a card deck called Tiles. The Tiles card deck consists of 110 unique cards, which are sectioned into different categories. The overall idea is to enable innovative thinking processes by using combinations of these cards in a workshop-like manner. These innovative ideas can be for example Internet of Things (IoT) items, that can be produced later. The different combinations of the cards are going to give the users an interactive metaphor, which in our case will be animations. The users can be able to save their ideas as both text or audio.

### Background and Motivation 
A physical interface for this idea already exists (http://inven.tools/), but this is a more complex application, since this is targeted at youths. Our project task is mainly about digitising this interface. In addition to digitising the already existing physical interface, the group will ensure that the children are satisfied and able to use the interface in a convenient and effective way. Together with our costumer we thought that smaller children have a lot of great and innovative ideas that might be useful in the future of Internet of Things. With this in mind, it was fun to develop the application.

### Features
Unique for this project is the way the application is organised. The children only have to pick out three cards and then an animation is automatically generated based on the combination of these cards. With this in mind, they can experiment with different cards. They are also able to record their idea as audio for themselves. We think that this can help them come up with innovative ideas and to think outside the box.
 
### Badges
[sette inn bilder av testene??]

### Visuals
The user will be start on a front page with the possibility to start picking out cards. When they have chosen three cards they can "make" the animation. The picture below shows how this pages looks. This is where the children can save their idea as text in the database or record an audio file and download it to their computer.
![image](https://user-images.githubusercontent.com/42800220/112601270-89f4a800-8e12-11eb-9f4f-509a407c10f0.png)

### How to run the application
1. <code>git clone https://github.com/IT2901-Tiles/Tiles.git</code>
2. Navigate to the tiles01/frotend folder.
    1. Run <code>npm install</code>
    2. Run <code>npm run build</code>
3. Navigate to the tiles01/backend folder.
    1. Run <code>npm install</code>
    2. Run <code>npm start</code>
4. Open http://localhost:8484/ in your preferred browser

### Usage
As a child you pick out the cards "temperature", "umbrella", "color change" for example. The animation shows this combination. As a child you think this is an amazing and innovative idea, because the umbrella will change colour and show that the temperature drops. He or she will then write this idea as a text file and save it in the database, or download it to his/her local computer.
![image](https://user-images.githubusercontent.com/42800220/112612078-ccbc7d00-8e1e-11eb-8a65-ecbc16612f4c.png)

### Roadmap
Our project has been limited in the number of cards we chose to include, because developing all the animations from scratch takes a lot of time. There are also other ideas for releases in the future, some of them are listed below.
* Add more cards, so there can be more animations. This can spark the childrens creativity even more.
* Let the children be able to log in with their own user. Then it will not breach GDPR to let them record and save the audio in the database, and not just download it.
* Make it possible for children to work together to come up with better ideas.

### Contributing
Pull requests are welcome for someone that has ideas. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

### Authors and acknowledgment
Thanks to our product owner Giulia Cosentino, our supervisor Marius Sjøberg, NTNU for giving us this project and the group members Millie Burhol Austad, Gunvor Huso, Emilie Kalleberg, Stuart Gallina Ottersen, Karen Villmones, Anne Mosvold Ørke and Malin Holte.

### License
The source code for the site is licensed under the [MIT license](https://choosealicense.com/licenses/mit/)

Copyright (c) 2021 Stuart Gallina with others


