import React from 'react';
import SingleWork from './SingleWork';

function RecentWorks() {
    const projectDetails = [
        {
            name: 'Guess The Location',
            description: 'This my take on the popular game, GeoGuessr. This project uses Nominatim GeoCoder, Country.io, and Google APIs, and is consumed using React and Axios. The app randomly selects a street-view available latitude and longitude coordinate, and asks the player to guess the target location by searching for clues in the street-view.',
            liveUrl: 'http://guess-the-location.kentokanazawa.com',
            gitHubUrl: 'http://google.com',
            learnMoreUrl: 'http://google.com',
            toolsUsed: ['ReactJS', 'Google Maps API', 'Nominatim Geocoder API', 'Country.io API'],
            imageSrc: {
                main: 'images/projects/guess-the-location.gif',
                thumbnail: 'images/projects/thumbnails/guess-the-location.png',
            },
        },
        {
            name: 'XML Chat Application',
            description: 'A chat application powered by XML, jQuery and PHP. Chat is information is stored as XML. I implemented a basic login system, with the login credentials stored in a separate xml file as well. The login credentials are hashed, and basic validation is also implemented at the time of login.',
            liveUrl: 'http://google.com',
            gitHubUrl: 'http://google.com',
            learnMoreUrl: 'http://google.com',
            toolsUsed: ['XML', 'AJAX', 'jQuery', 'PHP'],
            imageSrc: {
                main: 'images/projects/xml-chat-app.gif',
                thumbnail: 'images/projects/thumbnails/xml-chat-app.png',
            }
        },
    ]

    return (
        <section className="recent-works" id="development">
            <div>
                <h3 className="recent-works__heading"><span>Recent Works</span></h3>
                {projectDetails.map((pd, key) => {
                    return (
                        <SingleWork
                            projectName={pd.name}
                            description={pd.description}
                            liveUrl={pd.liveUrl}
                            gitHubUrl={pd.liveUrl}
                            learnMoreUrl={pd.learnMoreUrl}
                            toolsUsed={pd.toolsUsed}
                            imageSrc={pd.imageSrc}
                            index={key}
                            key={key}
                        />
                    );
                })}
            </div>
        </section>

    );
}

export default RecentWorks;
