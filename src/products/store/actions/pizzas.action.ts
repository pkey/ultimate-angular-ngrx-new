import { Action } from "@ngrx/store";
import { Pizza } from "src/products/models/pizza.model";

export const LOAD_PIZZAS_FAIL = "[Products] Load Pizzas";
export const LOAD_PIZZAS_SUCCESS = "[Products] Load Pizzas Success";
export const LOAD_PIZZAS = "[Products] Load Pizzas";

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}
export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) {}
}
export class LoadPizzasSucces implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {}
}

export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSucces;
