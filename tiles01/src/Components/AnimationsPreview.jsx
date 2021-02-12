import React from 'react';
import LinkButton from './LinkButton';

// Component for the preview of the animations in the animation page (final step of the process)

function AnimationsPreview() {
    return(
        <div className="gridAnimationsPage">
            <div className="gridAnimationItem3">
                    <div className="card1AnimationsPage">
                        Placeholder for card 1
                    </div>
                    <div className="card2AnimationsPage">
                        Placeholder for card 2
                    </div>
                    <div className="card3AnimationsPage">
                        Placeholder for card 3
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