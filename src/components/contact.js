import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import atunde from '../images/myimage.jpg';
class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Atunde Arisekola</h2>
            <img
              style={{ height: '250px' }}
              src={atunde}
              alt="avatar"
              className="avatar-img"
            />
            <p
              className=""
              style={{
                margin: 'auto',
                paddingTop: '1em',
                paddingBottom: '1em',
              }}
            >
              I am an experienced Full-Stack developer and social media manager,
              I’ve been a professional developer for more than 4 years. I’ve
              mostly worked professionally with Java, PHP, Javascript, Node.js
              and Python, I am proficient in the use of Frameworks including
              (React.js, React Native, Next.js, Gatsby, Laravel), I have well
              understanding of tools like Docker, Kubernetics and micro-service
              architecture.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent className="contact-list__item">
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (234) 8159109387
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className="contact-list__item">
                    <i className="fa fa-envelope" aria-hidden="true" />
                    atundearisekola@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className="contact-list__item">
                    <span>
                      <i
                        className="fa fa-skype contact-list__item-icon"
                        aria-hidden="true"
                      />
                    </span>
                    <span>@atundearisekola</span>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
