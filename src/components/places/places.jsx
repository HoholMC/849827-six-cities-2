import React from "react";
import PropTypes from 'prop-types';
import {PlaceCard} from '../place-card/place-card.jsx';

export class Places extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentPlaceCard: null,
    };
  }
  render() {
    const {offers, nameOnClick} = this.props;
    // const {currentPlaceCard} = this.state;
    // console.log(this.state);
    // console.log(this.props);
    return <section className="cities__places places">
    console.log(currentPlaceCard);
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex="0">Popular</li>
          <li className="places__option" tabIndex="0">Price: low to high</li>
          <li className="places__option" tabIndex="0">Price: high to low</li>
          <li className="places__option" tabIndex="0">Top rated first</li>
        </ul>
        {/*
        <select className="places__sorting-type" id="places-sorting">
           <option className="places__option" value="popular" defaultValue>Popular</option>
           <option className="places__option" value="to-high">Price: low to high</option>
           <option className="places__option" value="to-low">Price: high to low</option>
           <option className="places__option" value="top-rated">Top rated first</option>
         </select>
         */}
      </form>
      <div className="cities__places-list places__list tabs__content">
        {offers.map((it, i) => <PlaceCard
          key={name + i}
          mark={it.mark}
          imageSrc={it.imageSrc}
          priceValue={it.priceValue}
          priceText={it.priceText}
          rating={it.rating}
          name={it.name}
          type={it.type}
          nameOnClick={nameOnClick}
          onMouseEnter= {
            (currentRef) => {
              this.setState(()=>{
                return {
                  currentPlaceCard: currentRef.current
                };
              });
            // let currentRef = ``;
            // console.log(currentRef.current);
            }}
        />)}
      </div>
    </section>;
  }
}

Places.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.string).isRequired,
  nameOnClick: PropTypes.func.isRequired,
};
