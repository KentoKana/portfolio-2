import React from 'react';

function SocialButton(props) {

    // Store Link Info
    let socialMediaLink = [
        {
            url: 'http://github.com',
            backgroundColor: '#24292E',
            faIcon: <i className="fab fa-github"></i>,
        },
        {
            url: 'http://linkedin.com',
            backgroundColor: '#0077B5',
            faIcon: <i className="fab fa-linkedin-in"></i>,
        },
        {
            url: 'https://www.behance.net/tokendesigner/',
            backgroundColor: '#0057ff',
            faIcon: <i className="fab fa-behance"></i>,
        },
        {
            url: 'http://google.com',
            backgroundColor: '#F5613C',
            faIcon: <i className="fas fa-envelope"></i>,
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
                    key={key}
                >
                    {sml.faIcon}
                </a>
            )}
        </div>
    );
}

export default SocialButton;
