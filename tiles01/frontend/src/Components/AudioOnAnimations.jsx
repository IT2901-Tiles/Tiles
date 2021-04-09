import React, { useState } from 'react';
import vibrateSound from '../Audio/cellphone_vibrate.wav' // Free sound effect from: https://freesound.org/people/SpliceSound/sounds/369840/

// Adding sounds to the different animations provided in AnimationsPage.jsx
function AudioOnAnimations(props) {
    const [triggerCard] = useState(props.triggerCard) // props to pass to AnimationsPreview.jsx
    const [thingCard] = useState(props.thingCard) // props to pass to AnimationsPreview.jsx
    const [feedbackCard] = useState(props.feedbackCard) // props to pass to AnimationsPreview.jsx
    var audioType = 'audio/'
    var showButtonBool = false;
    

    // Check which cards are picked by the user, and match the audio with each card (that has audio associated to it)
    // to add more sounds - add them here. Remember to return an array including the sound and what file-type it is
    function matchAudioToCards() {
        if (feedbackCard === 'vibrate') {
            showButtonBool = true; // assures that the button is only visible when sound is available
            return [vibrateSound, 'wav'] 
        }
    }

    // functionality of the mute button, audio will be muted if it is unmuted and unmuted audio will be muted (also changes text displayed on the button when button is toggled)

    function muteAudio() {
        let player = document.getElementById('animationAudio');
        let muteButtonText = document.getElementById('muteButton');
        if (player.muted === false) {
            muteButtonText.innerHTML = "Unmute audio";
            return player.muted = true;
        } else if (player.muted === true) {
            muteButtonText.innerHTML = "Mute audio";
            return player.muted = false;
        }
    }

    return (
                <div>
                <audio id="animationAudio" autoPlay loop>
                    <source src={matchAudioToCards()[0]} type={audioType + matchAudioToCards()[1]} />
                </audio>
                <button onClick={muteAudio} type="button" id="muteButton">
                    Mute audio {/* Default value*/}
                </button>
                </div>
    )
}

export default AudioOnAnimations;
