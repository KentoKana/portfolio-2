import React from 'react';

function SocialButton(props) {

    // Store Link Info
    let socialMediaLink = [
        {
            url: 'http://github.com/kentokana',
            backgroundColor: '#24292E',
            faIcon: <i className="fab fa-github"></i>,
            title:'GitHub',
        },
        {
            url: 'https://www.linkedin.com/in/kento-kanazawa-7147b266/',
            backgroundColor: '#0077B5',
            faIcon: <i className="fab fa-linkedin-in"></i>,
            title:'LinkedIn',
        },
        {
            url: 'https://www.behance.net/tokendesigner/',
            backgroundColor: '#0057ff',
            faIcon: <i className="fab fa-behance"></i>,
            title:'Behance',
        },
        {
            url: 'http://google.com',
            backgroundColor: '#F5613C',
            faIcon: <i className="fas fa-envelope"></i>,
            title:'Contact Me',
        }
    ]

    return (
        <div className="socialLinkBtns__container">
            {socialMediaLink.map((sml, key) =>
                <a
                    className='socialLink__btn'
                    style={
                        { backgroundColor: sml.backgroundColor }
                    }
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
