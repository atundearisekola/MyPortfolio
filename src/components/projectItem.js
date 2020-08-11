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
import { Link, NavLink } from 'react-router-dom';

class ProjectItem extends Component {
  render() {
    return (
      <Cell col={4} phone={12} tablet={6}>
        <Card shadow={5} className="card">
          <CardTitle className="card-title">{this.props.title} </CardTitle>
          <CardText className="card-text">{this.props.description}</CardText>
          <CardActions border className="card-actions">
            <a href={this.props.github}>
              {' '}
              <i
                className="fa fa-github-square card-icon"
                areia-hidden="true"
              />
            </a>

            <a href={this.props.live}>
              {' '}
              <i className="fa fa-eye card-icon" areia-hidden="true" />
            </a>
          </CardActions>
        </Card>
      </Cell>
    );
  }
}

export default ProjectItem;
