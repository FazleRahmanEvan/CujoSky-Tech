import React from 'react';
import BannerPrice from './BannerPrice';
import PriceButton from './PriceButton';
import SEOPriceCard from './SEOPriceCard/SEOPriceCard';
import PriceTitle from './PriceTitle';

const OurPrice = () => {
    return (
        <div>
            <BannerPrice></BannerPrice>
            <PriceTitle/>
            <PriceButton/>
            <SEOPriceCard/>
            
        </div>
    );
};

export default OurPrice;