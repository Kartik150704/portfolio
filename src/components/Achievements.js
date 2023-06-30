import React, { useEffect, useState } from 'react';
import './Achievements.css';

const Achievements = () => {

    const [ratings, setratings] = useState("Fetching....")
    const [ranking,setrankings]=useState("Fetching...")
    useEffect(() => {
        fetch(`https://codeforces.com/api/user.rating?handle=kartik150704`)
            .then(response => response.json())
            .then(data => {
                // Process the response data
                data=data.result;
                data=data[data.length-1]
                data=data.newRating
                setratings(parseInt(data))
            })
            .catch(error => {
                // Handle any errors
                console.error(error);
            });
            if(ratings>=1200 && ratings<1400)
            {
                setrankings("Pupil")
            }
            else if(ratings>=1400 && ratings<1600)
            {
                setrankings("Specialist")
            }
            else if(ratings>=1600)
            {
                setrankings("Expert")
            }
    })
    const achievements = [
        { title: `${ranking} on Codeforces`, content: `Ratings :${ratings} \n` },
        { title: 'JEE Advanced Rank', content: 'AIR - 5389' },
        { title: 'JEE Mains Rank', content: 'AIR -2402' },
        { title: 'Coordinator of Coding Club', content: 'Organized coding events' },
        { title: 'Coordinator of Softcom', content: 'Managed technical event' }
    ];

    return (
        <section id="achievements" className="achievements">
            <h2>My Achievements</h2>
            <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                    <div className="achievement-box" key={index}>
                        <div className="front">
                            <strong>{achievement.title}</strong>
                        </div>
                        <div className="back">
                            <p>{achievement.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
