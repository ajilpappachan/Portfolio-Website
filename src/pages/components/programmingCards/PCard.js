import React, { Component } from 'react';
import PCardTemplate from './PCardTemplate';
import PCardFullTemplate from './PCardFullTemplate';

class PCard extends Component {
    constructor() {
        super();
        this.state = {
            showFullCard: false
        }
    }

    displayFullCard = () => {
        this.setState({ showFullCard: !this.state.showFullCard });
        console.log(this.state.showFullCard);
    }

    render() {
        const { cardType, language, libraries, title, date, place, company, details, fullDetails, video, photo, link, git } = this.props;

        return (<div>
            {
                this.state.showFullCard ?
                    <PCardFullTemplate
                        cardType={cardType}
                        language={language}
                        libraries={libraries}
                        title={title}
                        date={date}
                        company={company}
                        place={place}
                        fullDetails={fullDetails}
                        video={video}
                        photo={photo}
                        link={link}
                        git={git}
                        displayFullCard={this.displayFullCard}
                    />
                    :
                    <PCardTemplate
                        cardType={cardType}
                        language={language}
                        libraries={libraries}
                        title={title}
                        date={date}
                        company={company}
                        place={place}
                        details={details}
                        displayFullCard={this.displayFullCard}
                    />
            }
        </div>)
    }
}

export default PCard;