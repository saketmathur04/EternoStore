import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {
  const [index, setIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  if (!product) {
    return (
      <div className="cancel-wrapper">
        <div className="cancel">
          <h2>Product Not Found</h2>
          <p className="description" style={{ marginTop: '10px' }}>
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/">
            <div className="btn-container">
              <button type="button" className="btn">
                Back to Home
              </button>
            </div>
          </Link>
        </div>
      </div>
    );
  }

  const { image, name, details, price } = product;

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  }

  return (
    <div>
      <Head>
        <title>{name} - SonicZone Premium Audio</title>
        <meta name="description" content={details || `Get ${name} at SonicZone. Enjoy premium sound quality and style.`} />
      </Head>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img 
              src={urlFor(image && image[index])} 
              className="product-detail-image" 
              onClick={() => setIsZoomed(true)}
            />
          </div>
          
          {isZoomed && (
            <div className="lightbox-overlay" onClick={() => setIsZoomed(false)}>
              <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <button className="lightbox-close" onClick={() => setIsZoomed(false)}>✕</button>
                <img src={urlFor(image && image[index])} className="lightbox-image" />
              </div>
            </div>
          )}
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img 
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" aria-label="Decrease quantity" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" aria-label="Increase quantity" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" aria-label="Add item to cart" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
            <button type="button" aria-label="Buy item now" className="buy-now" onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product }
  }
}

export default ProductDetails
