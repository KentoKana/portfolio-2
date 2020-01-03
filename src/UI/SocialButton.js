import React from 'react';

function SocialButton() {

    // Store Link Info
    let socialMediaLinks = [
        {
            url: 'http://github.com/kentokana',
            backgroundColor: '#fff',
            faIcon: <i className="fab fa-github"></i>,
            title: 'GitHub',
        },
        {
            url: 'https://www.linkedin.com/in/kento-kanazawa-7147b266/',
            backgroundColor: '#fff',
            faIcon: <i className="fab fa-linkedin-in"></i>,
            title: 'LinkedIn',
        },
        {
            url: 'https://www.behance.net/tokendesigner/',
            backgroundColor: '#fff',
            faIcon: <i className="fab fa-behance"></i>,
            title: 'Behance',
        },
        {
            url: 'http://google.com',
            backgroundColor: '#fff',
            faIcon: <i className="fas fa-envelope"></i>,
            title: 'Contact Me',
        }
    ]

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
