// Inspiration from this: https://matheswaaran.medium.com/nicol%C3%A1s-castano-i-think-using-a-functional-component-is-the-problem-f87d2a80dfae
import React, { useEffect, useState } from 'react'

import "../CSS/Button.css"
import Button from 'react-bootstrap/Button';
import AudioOnAnimations from './AudioOnAnimations'
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'


function AudioFieldAnimationPage(props) {
    

    const [triggerCard] = useState(props.triggerCard) // props to pass to AnimationsPreview.jsx
    const [thingCard] = useState(props.thingCard) // props to pass to AnimationsPreview.jsx
    const [feedbackCard] = useState(props.feedbackCard) // props to pass to AnimationsPreview.jsx
    //const [audio, setAudio] = useState({ url: null, blob: null, chunks: null, duration: { h: 0, m: 0, s: 0 } })
    const [isRecording, setRecording] = useState(RecordState.NONE)
    const [blobURL, setBlobURL] = useState('')
    const [blob, setBlob] = useState('')
    const [isBlocked, setBlocked] = useState(false)
    const [audio, setAudio] = useState('')

    //funtion to start the recording
    function startRecording() {
        if (isBlocked) {
            console.log("Permission denied")
        } else
        setRecording(RecordState.START)
        console.log("start")
    }

    //function to stop the recording
    function stopRecording() {
        console.log("stop")
        setRecording(RecordState.STOP)
    }

    //function to dowload the audio
    function dowloadRecording() {
        const element = document.createElement("a")
        const audioFile = blob
        element.href = URL.createObjectURL(audioFile)
        element.download = triggerCard + "_" + thingCard + "_" + feedbackCard + ".m4a"
        document.body.appendChild(element)
        element.click()
    }

    //function to check permission to record
    function checkPermissionForAudio() {
        if (navigator.mediaDevices === undefined) {
            navigator.mediaDevices = {};
        }
        if (navigator.mediaDevices.getUserMedia === undefined) {
            navigator.mediaDevices.getUserMedia = function (constraints) {
                // First get ahold of the legacy getUserMedia, if present
                var getUserMedia =
                    // navigator.getUserMedia ||
                    navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

                // Some browsers just don't implement it - return a rejected promise with an error
                // to keep a consistent interface
                if (!getUserMedia) {
                    return Promise.reject(
                        new Error("getUserMedia is not implemented in this browser")
                    );
                }

                // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
                return new Promise(function (resolve, reject) {
                    getUserMedia.call(navigator, constraints, resolve, reject);
                });
            };
        }
        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then(stream => {
                setBlocked(false);
            })
            .catch(err => {
                setBlocked(true);
                console.log("Please give permission for the microphone to record audio.");
                console.log(err.name + ": " + err.message);
            });
    };

    useEffect(() => {
        checkPermissionForAudio()
    })
    function onStop(audioData){
        setBlobURL(audioData.url)
        setBlob(audioData.blob)

    }

    console.log(AudioReactRecorder)
    return (
        <div className="AudioAreaAnimationPage">
            <div className="Audio"><audio
                controls="controls"
                src={blobURL || "default.mp3"}
            /></div>
            <div className="AudioButtons">
            
                <Button onClick={startRecording} className="SmallButton" disabled={isRecording==RecordState.START }>Record</Button>
                <Button onClick={stopRecording} className="SmallButton" disabled={isRecording!=RecordState.START}>Stop</Button>
                <Button onClick={dowloadRecording} className="SmallButton" disabled={blob === ''}>Download</Button>
            </div>
            <AudioReactRecorder state={isRecording} onStop={onStop} />
        </div>
    );
}

export default AudioFieldAnimationPage