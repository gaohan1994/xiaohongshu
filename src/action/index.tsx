import {
  CHANGE_LOADING,
  CHANGE_ROUTE,
  RECEIVE_PRODUCT_LIST,
  RECEIVE_PRODUCT_INFOS,
} from '../constants';
import { Dispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

export interface AbstractInterface {
  type: 
    CHANGE_LOADING |
    CHANGE_ROUTE |
    RECEIVE_PRODUCT_LIST |
    RECEIVE_PRODUCT_INFOS;

  payload: any;
}

type Actions = AbstractInterface;

export default Actions;

export type MyDispatch = ThunkDispatch<any, any, any> | Dispatch<Actions>;

/**
 * @param `抽象参数接口`
 */

export interface DispatchAbstract<T extends Object = {}> {
  param: T;
  dispatch: MyDispatch;
}

export interface  DispatchAbstract<T extends Object = {}, P extends Object = {}> {
  param: T;
  option?: P;
  dispatch: MyDispatch;
}

export interface AbstractInterfaceParam<T extends Object> {
  result?: T;
  success: boolean;
}

export interface ComponentUserAbstractProps {

}