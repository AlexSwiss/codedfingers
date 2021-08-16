import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import AppNav from './Navbar';
import { Avatar, Chip, Typography} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        alignItems: 'center',
      },
    },
    project: {
        paddingTop: '30px'
    }
  }))


const Projects = (props) => {

  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div>
      <AppNav/>
      <Container>
        
      <Container><h3>I have written a few articles..</h3></Container>
      <Container className={classes.project}>
      <hr />
        <Row>
            <h4>How to install Golang and set up your GOPATH the right way</h4>
        </Row>
        <Row>
          <Col md="6">
          <h6>There are many resources on how to get started with golang but 
          some of the articles may solve what you need but do not follow the standard ways to avoid hassles later..</h6>
          </Col>
          <Col md="3"></Col>
          <Col md="3"></Col>
        </Row>
        <Row>
          <LinkIcon />&nbsp; &nbsp;
          <Typography>
            <a target="_blank" href="https://hashnode.com/post/the-proper-way-to-install-golang-and-set-up-your-workspace-ck8qhtjbu009oehs1nri77i5h">View Articles</a>
          </Typography>
        </Row>
      </Container>
      <hr />

      <Container className={classes.project}>
        <Row>
            <h4>Build a Graphql API with Gqlgen and MySQL</h4>
        </Row>
        <Row>
          <Col md="6">
          <h6>In this article, we will be building a graphql API for a book club where members can perform basic CRUD operations</h6>
          </Col>
          <Col md="3"></Col>
          <Col md="3"></Col>
        </Row>
        <Row>
          <LinkIcon />&nbsp; &nbsp;
          <Typography>
            <a target="_blank" href="https://www.linkedin.com/pulse/build-graphql-api-gqlgen-mysql-alexander-ikeh-web-developer/">View Articles</a>
          </Typography>
        </Row>
      </Container>
      <hr />

      
      <Container className={classes.project}>
        <Row>
            <h4>Configure CORS on Gqlgen with React </h4>
        </Row>
        <Row>
          <Col md="6">
          <h6>The first time i encountered the CORS preflight request error, i spent 3-4 days trying to fix the error and it pushed me into impostor syndrome. 
            This is the sole reason for this article to help the next dev this hassle</h6>
          </Col>
          <Col md="3"></Col>
          <Col md="3"></Col>
        </Row>
        <Row>
          <LinkIcon />&nbsp; &nbsp;
          <Typography>
            <a target="_blank" href="https://www.linkedin.com/pulse/configure-cors-gqlgen-react-alexander-ikeh-web-developer/">View Articles</a>
          </Typography>
        </Row>
      </Container>
      <hr />

      </Container>
    </div>
  );
}

export default Projects;