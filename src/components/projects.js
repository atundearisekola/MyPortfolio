import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from 'react-mdl';
import ProjectItem from './projectItem';

import { Link, NavLink } from 'react-router-dom';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects">
          <Grid>
            <ProjectItem
              title="Kleanary Andriod&IOS"
              description="Kleanary is and Android and IOS mobile Appliction built with React-Native to make request for laundry"
              github="https://github.com/atundearisekola/kleanary"
              live="#"
            />
            <ProjectItem
              title="Kleanary Web Appliction"
              description="Kleanary is a Laundry Web App built with React.js"
              github="https://github.com/atundearisekola/KleanaryWeb/tree/master/kleanary"
              live="https://kleanary.netlify.app/"
            />
            <ProjectItem
              title="Cleanary"
              description="Cleanary is a Dry Cleaning Web App built with Laravel PHP"
              github="https://github.com/atundearisekola/KleanaryWeb/tree/master/cleanary"
              live="#"
            />
            <ProjectItem
              title="Toyp"
              description="Toyp  is a voting Web App built with Laravel PHP"
              github="https://github.com/atundearisekola/toyp"
              live="#"
            />
            <ProjectItem
              title="Cabbinow"
              description="Cabbinow is an Android Appliction built with Java, a Logistic App to hire or
              request a Cab."
              github="https://github.com/atundearisekola/Cabbinow"
              live="#"
            />
            <ProjectItem
              title="Random Qoutes "
              description="Random Qoutes is a random motivational quotes  Web App built with React.js"
              github="https://github.com/atundearisekola/quotes-app"
              live="https://quotes-app-jet.vercel.app/"
            />
            <ProjectItem
              title="TextZnuta"
              description="TextZnuta is an Image to Text Android Application built with Java to convert text on an Image to editable text ."
              github="https://github.com/atundearisekola/TextZnuta"
              live="#"
            />
            <ProjectItem
              title="Med-Manager"
              description="Med-Manager is a mediction android appliction built with Java to help clients keep and notify them  on when to take their medication."
              github="https://github.com/atundearisekola/Med-Manager2"
              live="#"
            />
            <ProjectItem
              title="Hotel-Booker"
              description="Hotel-Booker is an hotel booking web app built with next.js to help customer pre book their hotel."
              github="https://github.com/atundearisekola/hotelbooking"
              live="https://hotelbooking.vercel.app/"
            />
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects">
          <Grid>
            <ProjectItem
              title="Cleanary"
              description="Cleanary is a Dry Cleaning App built with Laravel PHP"
              github="https://github.com/atundearisekola/KleanaryWeb/tree/master/cleanary"
              live="#"
            />
            <ProjectItem
              title="TextZnuta"
              description="TextZnuta is an Image to Text Application to convert text on an Image to editable text ."
              github="https://github.com/atundearisekola/TextZnuta"
              live="#"
            />
            <ProjectItem
              title="Med-Manager"
              description="Med-Manager is a mediction android appliction to help clients keep and notify them  on when to take their medication."
              github="https://github.com/atundearisekola/Med-Manager2"
              live="#"
            />
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is ReactJS</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is React Native</h1>
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div>
          <h1>This is Python</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          style={{ marginTop: '30px' }}
          activeTab={this.state.activeTab}
          onChange={(tabid) => this.setState({ activeTab: tabid })}
          ripple
        >
          <Tab>Projects</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content"> {this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
