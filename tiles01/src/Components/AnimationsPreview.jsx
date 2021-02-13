import React from 'react';
import LinkButton from './LinkButton';
import CardContainer from './CardContainer';
import Card from './Card';
// Component for the preview of the animations in the animation page (final step of the process)

function AnimationsPreview(props) {

    return(
        <div className="gridAnimationsPage">
            <div className="gridAnimationItem3">
                    <div className="card1AnimationsPage">
                        card placeholder
                    </div>
                    <div className="card2AnimationsPage">
                        card placeholder
                    </div>
                    <div className="card3AnimationsPage">
                        card placeholder
                    </div>
            </div>
            <div className="gridAnimationItem4">
                Area for the animations based off the selected cards
            </div>
            <div className="gridAnimationItem5">
            <LinkButton title="Try again!" target="/" size="Large" category="animation"></LinkButton>
            </div>
        </div>
    )
}

export default AnimationsPreview