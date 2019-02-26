import {
  RECEIVE_PRODUCT_LIST,
  RECEIVE_PRODUCT_INFOS,
  RECEIVE_CURRENT_PRODUCT,
} from '../constants';
import { Stores } from './index';
import Actions from '../action';
import numeral from 'numeral';

export type Product = {
  productTypeList: any[];
  productInfos: any[];
  currentProduct: any;
};

export const initState = {
  productTypeList: [],
  productInfos: [],
  currentProduct: {},
};

/**
 * Product 仓库
 *
 * @export
 * @param {Product} [state=initState]
 * @param {*} action
 * @returns {Product}
 */
export default function product (state: Product = initState,  action: Actions): Product {
  switch (action.type) {

    case RECEIVE_CURRENT_PRODUCT:
      const { payload: { currentProduct } } = action;
      state = {
        ...state,
        currentProduct,
      };
      return state;

    case RECEIVE_PRODUCT_LIST:
      const { payload: { productTypeList } } = action;

      state = {
        ...state,
        productTypeList
      };
      return state;

    case RECEIVE_PRODUCT_INFOS:
      const { 
        payload: {
          page,
          productInfos,
        } 
      } = action;

      if (numeral(page).value() === 1) {
        return {
          ...state,
          productInfos,
        };
      } else {
        return {
          ...state,
          productInfos: state.productInfos.concat(productInfos),
        };
      }

    default: return state;
  }
}

export const getCurrentProduct = (state: Stores) => state.product.currentProduct;

export const getProductTypeList = (state: Stores) => state.product.productTypeList;

export const getProductInfos = (state: Stores) => state.product.productInfos;