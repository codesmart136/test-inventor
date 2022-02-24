// constants
import Onboard from 'bnc-onboard'
import Web3 from "web3";
// log
import { fetchData } from "../data/dataActions";

const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};

export const connect_blockchain = () => {
  return async (dispatch) => {
    const onboard = Onboard({
      dappId: "929bc41c-cc01-4424-a664-3201a6d40696",       // [String] The API key created by step one above
      networkId: 4,  // [Integer] The Ethereum network ID your Dapp uses.
      subscriptions: {
        wallet: wallet => {
           web3 = new Web3(wallet.provider)
        }
      }
    });

    await onboard.walletSelect();
    await onboard.walletCheck();
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};
