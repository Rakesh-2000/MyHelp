import {
  NavigationAction,
  createNavigationContainerRef,
  NavigationState,
  StackActions,
  ParamListBase,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const navigate = (routeName: string, params?: object) => {
  if (navigationRef.isReady()) {
    navigationRef.current?.navigate(routeName as never, params as never);
  }
};

export const canGoBack = () => navigationRef.current?.canGoBack();

export const goBack = () => {
  if (navigationRef.isReady() && navigationRef.current?.canGoBack()) {
    navigationRef.current?.goBack();
  }
};

export const replace = (name: string, params?: object) => {
  if (navigationRef.isReady()) {
    navigationRef.current?.dispatch(StackActions.replace(name, params));
  }
};

export const dispatch = (
  action: NavigationAction | ((state: NavigationState) => NavigationAction),
) => {
  if (navigationRef.isReady()) {
    navigationRef.current?.dispatch(action);
  }
};

export const setParams = (params: Partial<ParamListBase[any]>) => {
  if (navigationRef.isReady()) {
    navigationRef.current?.setParams(params as never);
  }
};

//screens to be registered here
export const ScreenNames = {
  AllExpenses: 'AllExpenses',
  ManageExpenses: 'ManageExpenses',
  RecentExpenses: 'RecentExpenses',
  BottomNaviation:'BottomNaviation',
};
