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
              <h1>Full Stack Developer</h1>

              <hr />

              <Grid className="social-links">
                <Cell col={2} phone={6} tablet={4}>
                  {/* LinkedIn*/}
                  <a
                    href="http://google.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin-square" areia-hidden="true" />
                  </a>
                </Cell>
                <Cell col={2} phone={6} tablet={4}>
                  {/* Github*/}
                  <a
                    href="http://github.com/atundearisekola"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-github-square" areia-hidden="true" />
                  </a>
                </Cell>
                <Cell col={2} phone={6} tablet={4}>
                  {/* freecodecamp*/}
                  <a
                    href="http://google.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-free-code-camp" areia-hidden="true" />
                  </a>
                </Cell>
                <Cell col={2} phone={6} tablet={4}>
                  {/* Youtube*/}
                  <a
                    href="http://google.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-youtube-square" areia-hidden="true" />
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
