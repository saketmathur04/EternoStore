import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt={heroBanner.product || 'Featured product'} title={heroBanner.product || 'Featured product'} className="hero-banner-image" />

        <p className="hero-tagline">
          Discover studio-grade audio engineered for those who demand nothing but the best.
        </p>

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button" aria-label={`Buy ${heroBanner.product || 'featured product'} now`}>{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
