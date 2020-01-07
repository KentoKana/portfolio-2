import React from 'react';
import { socialMediaLinks } from "../Helpers/Data";

function SocialButton() {

    return (
        <div className="socialLinkBtns__container">
            {socialMediaLinks.map((sml, key) =>
                <a
                    className='socialLink__btn'
                    href={sml.url}
                    title={sml.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={key}
                >
                    {sml.faIcon}
                </a>
            )}
        </div>
    );
}

export default SocialButton;
