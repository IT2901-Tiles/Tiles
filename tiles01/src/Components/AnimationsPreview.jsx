import React from 'react';
import LinkButton from './LinkButton';

// Component for the preview of the animations in the animation page (final step of the process)

function AnimationsPreview() {
    return(
        <div className="gridAnimationsPage">
            <div className="gridAnimationItem3">
                Area for the selected cards
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