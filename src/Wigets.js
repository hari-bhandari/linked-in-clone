import React from 'react';
import './Wigets.css';
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"

function Wigets() {

    const newsArticle = (heading, subtitle) => (
        <div className = "wigets__article">
            <div className = "wigets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className = "wigets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div>
            <div className = "wigets">
                <div className = "wigets__header">
                    <h2>Latest News</h2>
                    <InfoIcon/>
                    
                </div>
                {newsArticle("Aliens Abduct Donald Trump", "They're now begging the citizens of Earth to allow them to return him - 99999 Readers")}
                {newsArticle("President Trump has found the cause of the Pandemic ", "he claims the Corona Virus was spread by the ghost of Elvis - 222222 Readers")}
                {newsArticle("Venezuela has invaded Trinidad and Tobago ", "They came for the doubles but stayed for the Roti - 55555 Readers")}
                {newsArticle("Vladamir Putin has fallen off his horse ", "The mare was apparently in heat and started acting up when Putin removed his shirt - 777 Readers")}
            </div>
            <div className = "wigets__training">
                <div className = "wigets__header">
                    <h2>Most Viewed Courses</h2>
                    <InfoIcon/>
                    
                </div>
                {newsArticle("1. Learn how to Perform a colonoscopy", "It's a shitty job but someone has to do it")}
                {newsArticle("2. Javascript for morons", "Learn how to develop a better personality by mastering javascript")}
                {newsArticle("3. The importance of common sense ", "We can't stress this enough, the last thing this world needs is more stupidity")}
                {newsArticle("4. How to think for yourself", "In this course we will show you how to think like us for yourself, we'll tell you everything you should be thinking")}
            </div>
        </div>
        
    )
}

export default Wigets
