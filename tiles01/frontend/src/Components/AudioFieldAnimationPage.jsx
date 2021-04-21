// Inspiration from this: https://matheswaaran.medium.com/nicol%C3%A1s-castano-i-think-using-a-functional-component-is-the-problem-f87d2a80dfae
import React, { useEffect, useState } from 'react'
import MicRecorder from 'mic-recorder-to-mp3'
import "../CSS/Button.css"
import Button from 'react-bootstrap/Button';

const Mp3Recorder = new MicRecorder({ bitRate: 128 })

function AudioFieldAnimationPage(props) {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;

    const [triggerCard] = useState(props.triggerCard) // props to pass to AnimationsPreview.jsx
    const [thingCard] = useState(props.thingCard) // props to pass to AnimationsPreview.jsx
    const [feedbackCard] = useState(props.feedbackCard) // props to pass to AnimationsPreview.jsx
    //const [audio, setAudio] = useState({ url: null, blob: null, chunks: null, duration: { h: 0, m: 0, s: 0 } })
    const [isRecording, setRecording] = useState(false)
    const [blobURL, setBlobURL] = useState('')
    const [blob, setBlob] = useState('')
    const [isBlocked, setBlocked] = useState(false)
    const [audio, setAudio] = useState('')

    //funtion to start the recording
    function startRecording() {
        if (isBlocked) {
            console.log("Permission denied")
        } else
            Mp3Recorder.start()
                .then(() => { setRecording(true) })
                .catch(e => console.error(e))
    }

    //function to stop the recording
    function stopRecording() {
        setRecording(false)
        Mp3Recorder.stop()
            .getMp3()
            .then(async ([buffer, blob]) => {
                setBlob(blob)
                const blobURL = URL.createObjectURL(blob)
                setBlobURL(blobURL)
                setRecording(false)
                setAudio(buffer)
            })
            .catch(e => console.log(e))
    }

    //function to dowload the audio
    function dowloadRecording() {
        const element = document.createElement("a")
        const audioFile = new Blob(audio, {
            type: blob.type,
            lastModified: Date.now()
        })
        element.href = URL.createObjectURL(audioFile)
        element.download = triggerCard + "_" + thingCard + "_" + feedbackCard + ".mp3"
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

    return (
        <div className="AudioAreaAnimationPage">
            <div className="Audio"><audio
                controls="controls"
                src={blobURL || "default.mp3"}
            /></div>
            <div className="AudioButtons">
                <Button onClick={startRecording} className="SmallButton" disabled={isRecording}>Record</Button>
                <Button onClick={stopRecording} className="SmallButton" disabled={!isRecording}>Stop</Button>
                <Button onClick={dowloadRecording} className="SmallButton" disabled={audio === ''}>Download</Button>
            </div>
        </div>
    );
}

export default AudioFieldAnimationPage