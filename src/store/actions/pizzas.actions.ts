import { Action } from '@ngrx/store';
import { Pizza } from 'src/products/models/pizza.model';

const LOAD_PIZZAS = '[Products] Load Pizzas';
const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';
const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}
export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: any) {}
}
export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: Pizza[]) {}
}

export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;
