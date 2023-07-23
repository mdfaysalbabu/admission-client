import React from 'react';
import CollegeGallery from '../CollegeGallery/CollegeGallery';
import Banner from '../Banner/Banner';
import ResearchPapers from '../researchPapers/researchPapers';
import PopularCollege from '../PopulerCollege/PopularCollege';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <div>
                <CollegeGallery></CollegeGallery>
            </div>
            <div>
               <PopularCollege></PopularCollege>  
            </div>
            <div>
                <ResearchPapers></ResearchPapers>
            </div>
            
        </div>
    );
};

export default Home;