import {Typography} from 'antd';
import React from 'react';

import EnhancedButton from '__components/EnhancedButton';
import {ROUTES} from '__routes';

import AppLayout from '../AppLayout';

import {Props, State} from './types';

export default class ErrorBoundary extends React.PureComponent<Props, State> {
    public state: State = {
        error: null,
        errorInfo: null,
    };

    private onGoToUsersClick = (event: React.MouseEvent) => {
        event.preventDefault();
        window.location.assign(ROUTES.USERS.INDEX);
    };

    public componentDidCatch(error: Error, errorInfo: unknown) {
        this.setState({error, errorInfo});
    }

    public render() {
        const {state} = this;
        const {children} = this.props;

        if (state.errorInfo) {
            return (
                <AppLayout>
                    <Typography.Text>
                        Something went wrong, application crashed
                    </Typography.Text>

                    <br/>

                    <br/>

                    <EnhancedButton
                        buttonProps={{
                            onClick: this.onGoToUsersClick,
                        }}
                    >
                        Return to users page
                    </EnhancedButton>
                </AppLayout>
            );
        }

        return children;
    }
}
