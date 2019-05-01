import React from "react";
import { Switch, BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import CreateExpenseaPage from "../components/CreateExpenseaPage";
import EditExpenseaPage from "../components/EditExpenseaPage";
import HelpExpenseaPage from "../components/HelpExpenseaPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Headaer";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={CreateExpenseaPage} exact={true} />
        <Route path="/edit/:id" component={EditExpenseaPage} exact={true} />
        <Route path="/help" component={HelpExpenseaPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
