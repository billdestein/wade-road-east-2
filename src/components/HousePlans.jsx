import React, { Component } from 'react';
import MillsFarm from "./MillsFarm.png"
import BarnStylePoolHouse from "./BarnStylePoolHouse.jpg"
import './HousePlans.css';
export default class HousePlans extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log("HousePlans");
  }

  render() {
    return (
      <div className="HousePlans">
        <h1>House Plans</h1>
        <h2>Main House</h2>
        <p>The four-bedroom main house comes from Southern Living.  You can find it here.<br/></p>
        <ul>
          <li><a href="https://houseplans.southernliving.com/plans/SL1901?index=27&search%5Bbedrooms%5D%5B%5D=4%2B&search%5Bplan%5D=&search%5Bsort%5D=&search%5Bsquare_feet%5D=2470%2C4200&search%5Butf8%5D=%E2%9C%93&search%5Bvendor%5D=">main house</a></li>
        </ul>
        <p>We're working with a draftsman to change the elevation on the main house to look less like a Louisiana low country cottage, and more like an East Tennessee farmhouse.  That involves adding a wrap-around porch, and changing the dormers to shed-style.  The finished product will look like this:<br/></p>
        <img src={MillsFarm} alt="MillsFarm"/>
        <h2>Pool House</h2>
        <p>The two-bedroom pool house will have one of these two floor plans:<br/></p>
        <ul>
          <li><a href="https://houseplans.southernliving.com/plans/SL1581?index=6&search%5Bbedrooms%5D%5B%5D=2&search%5Bmax_square_feet%5D=1490&search%5Bmin_square_feet%5D=1030&search%5Bplan%5D=&search%5Bsquare_feet%5D=1030%2C1490&search%5Butf8%5D=%E2%9C%93&search%5Bvendor%5D=">option 1</a></li>
          <li><a href="https://www.architecturaldesigns.com/house-plans/2-bed-cottage-house-plan-with-porches-front-and-back-51835hz">option 2</a></li>
        </ul>

        <p>We're working with a draftsman to change the elevation of the pool house to look like a historic barn.  The pool house will have a tin roof and barn board siding.  The goal is to have a gathering space around the pool with this sort of vibe:<br/></p>
        <img src={BarnStylePoolHouse} alt="BarnStylePoolHouse"/>




        
      </div>
    );
  }
}
