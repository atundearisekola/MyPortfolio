import React, { Component } from 'react';
import { Grid, Cell, Chip, ChipContact } from 'react-mdl';
import atunde from '../images/myimage.jpg';
class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={atunde} alt="avatar" className="avatar-img" />
            <div className="banner-text">
              <h1 className="banner-text__title">Full Stack Developer</h1>

              <hr />

              <Grid className="social-links">
                <Cell col={2} phone={2} tablet={2}>
                  {/* LinkedIn*/}
                  <a
                    href="https://www.linkedin.com/in/arisekola-atunde-1ab82aba/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin-square" areia-hidden="true" />
                  </a>
                </Cell>
                <Cell col={2} phone={2} tablet={2}>
                  {/* Github*/}
                  <a
                    href="http://github.com/atundearisekola"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-github-square" areia-hidden="true" />
                  </a>
                </Cell>
                <Cell col={2} phone={2} tablet={2}>
                  {/* freecodecamp*/}
                  <a
                    href="https://web.facebook.com/atunde.arisekola/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-facebook-square" areia-hidden="true" />
                  </a>
                </Cell>
                <Cell col={2} phone={2} tablet={2}>
                  {/* Youtube*/}
                  <a
                    href="https://twitter.com/atundearisekola"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-twitter-square" areia-hidden="true" />
                  </a>
                </Cell>
              </Grid>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
