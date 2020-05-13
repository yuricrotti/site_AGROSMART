import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionInfo from "./Sections/SectionInfo";

import styles from "assets/jss/material-kit-react/views/components.js";
import SectionProcesso from "./Sections/SectionProcesso";
import WorkSection from "../LandingPage/Sections/WorkSection";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const {...rest} = props;
  return (
    <div>
      <Header
        brand="AGROSMART"
        rightLinks={<HeaderLinks/>}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      {<Parallax image={require("assets/img/apple2.jpg")} style={{height: '350px'}}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>
                  AGROSMART
                </h1>
                <h3 className={classes.subtitle}>
                  Armazenamento pós-colheita de frutas com inteligência 
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>}

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <SectionInfo/>
          <SectionProcesso />
          <WorkSection />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
