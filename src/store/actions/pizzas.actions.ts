import { createAction, props } from '@ngrx/store';
import { Pizza } from 'src/products/models/pizza.model';

export const LoadPizzas = createAction('[Products] Load Pizzas');
export const LoadPizzasSuccess = createAction(
  '[Products] Load Pizzas Success',
  props<{ payload: any }>()
);
export const LoadPizzasFail = createAction(
  '[Products] Load Pizzas Fail',
  props<{ payload: Pizza[] }>()
);
