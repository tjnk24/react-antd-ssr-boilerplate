import {store} from './configureStore';

export enum Status {
    Success = 'success',
    Pending = 'pending',
    Failed = 'failed',
}

export type StoreState<D> = {
    status?: Status;
    error?: string;
    data?: D;
}

export type CommonStore = ReturnType<typeof store.getState>;

export type ExtendedState<D> = CommonStore & StoreState<D>;
