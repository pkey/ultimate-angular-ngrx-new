import { Action, createReducer, on } from '@ngrx/store';
import { Pizza } from 'src/products/models/pizza.model';
import * as pizzaActions from '../actions/pizzas.actions';

export interface PizzaState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}
export const initialState: PizzaState = {
  data: [],
  loaded: false,
  loading: false
};

const pizzasReducer = createReducer(
  initialState,
  on(pizzaActions.LoadPizzas, state => ({ ...state, loading: true })),
  on(pizzaActions.LoadPizzasFail, state => ({
    ...state,
    loading: false,
    loaded: false
  })),
  on(pizzaActions.LoadPizzasSuccess, (state, { payload }) => ({
    ...state,
    data: payload.data,
    loading: false,
    loaded: true
  }))
);

export function reducer(state: PizzaState | undefined, action: Action) {
  return pizzasReducer(state, action);
}
