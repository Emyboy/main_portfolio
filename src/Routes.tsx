import React, { ReactElement } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { PageContent } from "./components/Styled/PageContent.styled";
import AboutMe from "./pages/AboutMe";


export default function Routes(): ReactElement {
  return (
      <BrowserRouter>
          <Navbar />
        <PageContent className='shadow'>
          <Switch>
            <Route path="/" component={AboutMe} />
          </Switch>
        </PageContent>
      </BrowserRouter>
  );
}
