import React, { ReactElement } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { PageContent } from "./components/Styled/PageContent.styled";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";


export default function Routes(): ReactElement {
  return (
      <BrowserRouter>
        <PageContent className='shadow'>
          <Navbar />
          <Switch>
            <Route path="/" exact component={AboutMe} />
            <Route path="/experience" component={Experience} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route component={() => <h1>404</h1>} />
          </Switch>
        </PageContent>
      </BrowserRouter>
  );
}
