import React from "react";

const Help = () => {
    return (
    <div>   
        <div id = "Help">
        <div><p> </p></div>
        <div className = "text-center text-white align-middle">
            <h3>Useful Links</h3>
        </div>
            <div>
        <a  target="_blank" rel="noopener noreferrer" href='https://www.yugioh-card.com/en/rulebook/' className="nav-link">Rulebook</a>
        <a  target="_blank" rel="noopener noreferrer" href='https://revature.zoom.us/j/95477649921?pwd=WTNjT09TbUtIdERmZDBIQlExY2FsZz09' className="nav-link">Zoom</a>
        <a  target="_blank" rel="noopener noreferrer" href='https://docs.google.com/forms/d/e/1FAIpQLSctgsH-__acrraIWMPDsV3XSFmTAujJNIxK9zKEhATsYsKHSw/viewform?embedded=true' className="nav-link">Revature Survey</a>
        <a  target="_blank" rel="noopener noreferrer" href='https://open.spotify.com/user/thirdstockiii?si=uAdkJaevQv-7v7BaKYw0ew' className="nav-link">Click for Bops</a>
        <a  target="_blank" rel="noopener noreferrer" href='https://revature.com/faq/' className="nav-link">FAQ Revature</a>
            </div>
        </div>
    </div>
    );
};

export default Help;