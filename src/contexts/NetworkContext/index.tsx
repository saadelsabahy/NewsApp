/* eslint-disable react-hooks/exhaustive-deps */
import NetInfo from '@react-native-community/netinfo';
import React, {ReactNode, useEffect, useState} from 'react';
import {onlineManager} from 'react-query';

interface ContextTypes {
  isOnline: boolean;
}
export const NetworkContext = React.createContext<ContextTypes>({});

interface Props {
  children: ReactNode;
}
const NetworkProvider = ({children}: Props) => {
  const [isOnline, setisOnline] = useState(false);

  useEffect(() => {
    onlineManager.setEventListener(setOnline => {
      return NetInfo.addEventListener(({isConnected}) => {
        setOnline(isConnected ? isConnected : undefined);
      });
    });
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      //console.log({state}, 'from context');
      setisOnline(state.isInternetReachable ?? false);
    });

    return () => removeNetInfoSubscription();
  }, []);

  return (
    <NetworkContext.Provider value={{isOnline}}>
      {children}
    </NetworkContext.Provider>
  );
};

export {NetworkProvider};
