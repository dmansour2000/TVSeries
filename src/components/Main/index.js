import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../../containers/Series';
import SingleSeries from '../../containers/SingleSeries';

const Main = props => (
    <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Series} />
        <Route path={process.env.PUBLIC_URL + '/series/:id'} component={SingleSeries} />
    </Switch>
);

export default Main;