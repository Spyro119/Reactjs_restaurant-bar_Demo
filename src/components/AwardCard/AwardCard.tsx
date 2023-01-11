import React from 'react';

interface IAwardCardProp {
  award: {
    imgUrl: string;
    title: string;
    subtitle: string
  }
}

const AwardCard = ({ award : { imgUrl, title, subtitle }} : IAwardCardProp) => (
  <div className="app__Laurels_awards-card">
    <img src={imgUrl} alt="award" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{color: "#DCCA87"}}>{title}</p>
      <p className="p__cormorant">{subtitle}</p>

    </div>
  </div>
)

export default AwardCard;