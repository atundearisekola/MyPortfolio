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
            <p style={{ width: '750', margin: 'auto', paddingTop: '1em' }}>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '18px', fontFamily: 'Anton' }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (234) 8159109387
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '18px', fontFamily: 'Anton' }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    atundearisekola@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '18px', fontFamily: 'Anton' }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    @atundearisekola
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
