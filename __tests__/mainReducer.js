// import { expect } from '@jest/globals';
// import { beforeEach, it } from 'jest-circus';
// import { describe } from 'yargs';
import subject from '../client/reducers/mainReducer';

describe ('crunchWORLD main reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      productsArray: [],
      gotLatestProducts: false,
      cartArray: [],
      totalItems: 0,
    }
  });

  describe('default state', () => {
    it('should return a default state when given an undefind input', () => {
      expect(subject(undefined, {type: undefined})).toEqual(state);
    });
  })

  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'asdfjkl' };
      expect(subject(state, action)).toBe(state)
    })
  })
})