import React, { Component } from "react";

class Pet extends Component {
  render() {
    return (
      <div class="content">
        <header>
          <img
            src="logostellar.jpg"
            alt="Logo image of a house enclosing the letter S."
            class="logo"
          />
          <h1>Stellar Sitting Services </h1>
        </header>
        <p>
          <img
            src="pets.jpg"
            alt="Photo of a cat and dog."
            class="right round"
          />
        </p>

        <p>Looking for a pet sitter? We have you covered!</p>
        <p>
          Our company has been open and providing excellent services for over a
          dozen years. Our pet sitters are thoughtful, respectful animal lovers
          who are well trained in pet care.
        </p>

        <h2>Pet Sitting</h2>
        <p>
          Pet sitters are available for scheduled visits to feed, water, clean
          up, and provide companionship for pets. In addition, sitters can
          provide overnight service or long-term stays if needed.{" "}
        </p>

        <h2>Check our Competetive Pricing</h2>
        <p>
          <table>
            <thead>
              <tr>
                <th class="colwidth">Service</th>
                <th>Price in $</th>
                <th>Timeframe</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="bolder">Daily Fish Check</td>
                <td class="rightjust">7.00</td>
                <td>Per Day</td>
                <td>Enter home to check fish tank and feed fish.</td>
              </tr>
              <tr>
                <td class="bolder">Daily Pond Check</td>
                <td class="rightjust">10.00</td>
                <td>Per Day</td>
                <td>
                  Enter home to feed fish, check pond level and pump function.
                </td>
              </tr>
              <tr>
                <td class="bolder">Weekly Pond Check</td>
                <td class="rightjust">30.00</td>
                <td>Per Week</td>
                <td>
                  Minimum of five weeks. Enter home to feed fish, check pond
                  level and pump function. Includes pond top-off and one pump
                  flush.
                </td>
              </tr>
              <tr>
                <td class="bolder">Daily Cat Check</td>
                <td class="rightjust">10.00</td>
                <td>Per Day</td>
                <td>
                  For up to three cats - enter home daily to feed, water, and
                  clean litter.
                </td>
              </tr>
              <tr>
                <td class="bolder">Daily One-Dog Check</td>
                <td class="rightjust">50.00</td>
                <td>Per Day</td>
                <td>
                  Enter home 3 times daily to feed, water, and potty. Includes
                  one 30-minute walk.{" "}
                </td>
              </tr>
              <tr>
                <td class="bolder">Daily Two-Dog Check</td>
                <td class="rightjust">80.00</td>
                <td>Per Day</td>
                <td>
                  Enter home 3 times daily to feed, water, and potty. Includes
                  one 30-minute walk.{" "}
                </td>
              </tr>
              <tr>
                <td class="bolder">Overnight House/pet Sit</td>
                <td class="rightjust">100.00</td>
                <td>Per Day</td>
                <td>
                  Three-night minimum. Sitter on premisis overnight and present
                  for at least 14 out of each 24-hour period. Includes daily
                  care for up to three pets.{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </p>
      </div>
    );
  }
}

export default Pet;
