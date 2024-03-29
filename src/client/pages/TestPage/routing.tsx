import loadable from '@loadable/component';
import {Spin} from 'antd';
import React from 'react';

import AppRoute from '__components/AppRoute';
import {ROUTES} from '__routes';

const AsyncPage = loadable(
    () => import(
        /* webpackChunkName: "testPage" */ './containers/page'
    ),
    {fallback: <Spin/>},
);

export default (
    <AppRoute
        exact
        path={ROUTES.TEST_PAGE.INDEX}
        component={AsyncPage}
        title="Test Page"
    />
);
