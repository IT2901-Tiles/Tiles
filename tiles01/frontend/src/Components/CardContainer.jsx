import React, { useState } from 'react';
import Card from "./Card"

//imports all of the images
function importAll(paths) {
    return paths.keys().map(paths);
}

//snippet from https://stackoverflow.com/questions/38332094/how-can-i-mock-webpacks-require-context-in-jest
if (typeof require.context === 'undefined') {
	const fs = require('fs');
	const path = require('path');

	require.context = (base = '.', scanSubDirectories = false, regularExpression = /\.js$/) => {
	    const files = {};
	    function readDirectory(directory) {
	        fs.readdirSync(directory).forEach((file) => {
	            const fullPath = path.resolve(directory, file);

	            if (fs.statSync(fullPath).isDirectory()) {
	                if (scanSubDirectories) readDirectory(fullPath);
	    
                    return;
	            }
	            
                if (!regularExpression.test(fullPath)) return;
	            
                files[fullPath] = true;
	        });
	    }

	    readDirectory(path.resolve(__dirname, base));
	    
        function Module(file) {
	        return require(file);
	    }
	    
        Module.keys = () => Object.keys(files);
	    
        return Module;
	    };
	}

//paths to where the different image sets are
var cardPaths = {
    "things": require.context("./../images/things", false, /\.(png|jpe?g|svg)$/),
    "trigger": require.context("./../images/triggers", false, /\.(png|jpe?g|svg)$/),
    "feedback": require.context("./../images/feedbacks", false, /\.(png|jpe?g|svg)$/)
}

function CardContainer(props) {
    const listOfImages = importAll(cardPaths[props.category]);
    const [activeCard, setActiveCard] = useState(null);

    //called when a card in the container is clicked, sets the card as active 
    //newValue represents the card component that is selected
    function handleCardClick(newValue) {
        props.onSelect(newValue)
        setActiveCard(newValue.id)
    }
    //gets card name from path	
	function getName(path) {
        let index;
        try{
            index = path.default.indexOf(".")
        }catch{
            return null;
        }
        return path.default.slice(14, index)
    }
    
    //map function maps the files imported in listOfImages to Card components
    return (
        <div>
            {listOfImages.map(
                (image, index) => <Card active={activeCard} name={getName(image)} onClick={handleCardClick} id={index} key={index} src={image.default} />
            )}
        </div>
    );
}

export default CardContainer;