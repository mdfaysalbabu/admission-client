import React from 'react';
import CollegeGallery from '../CollegeGallery/CollegeGallery';
import Banner from '../Banner/Banner';
import ResearchPapers from '../researchPapers/researchPapers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <div>
                <CollegeGallery></CollegeGallery>
            </div>
            <div>
                <ResearchPapers></ResearchPapers>
            </div>
        </div>
    );
};

export default Home;