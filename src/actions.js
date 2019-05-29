import { ADD, REMOVE } from "./actionTypes";

export function add(payload) {
  return {
    type: ADD,
    payload
  };
}

export function remove(payload) {
  return {
    type: REMOVE, 
    payload
  };
}