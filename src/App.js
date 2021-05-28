import { useDispatch, useSelector } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import AppBar from './Components/AppBar/AppBar';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import Loader from 'react-loader-spinner';

import authOperations from './Redux/auth/auth-operations';
import resetNotification from './Redux/notif-action';

import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './App.module.css';

const HomeView = lazy(() =>
  import('./Views/HomeView/HomeView' /* webpackChunkName: "HomeView"*/),
);
const RegisterView = lazy(() =>
  import(
    './Views/RegisterView/RegisterView' /* webpackChunkName: "RegisterView"*/
  ),
);
const LoginView = lazy(() =>
  import('./Views/LoginView/LoginView' /* webpackChunkName: "LoginView"*/),
);
const ContactsView = lazy(() =>
  import(
    './Views/ContactsView/ContactsView' /* webpackChunkName: "ContactsView"*/
  ),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  const loader = (
    <Loader className={s.loader} type="Oval" color="#00BFFF" width={'60px'} />
  );

  const notification = useSelector(state => state.notification);
  if (notification !== null) {
    setTimeout(() => {
      dispatch(resetNotification(null));
    }, 5000);
  }

  useEffect(() => {
    toast.warn(notification, { className: s.notification });
  }, [notification]);

  return (
    <div className={s.container}>
      <AppBar />

      <Suspense fallback={loader}>
        <Switch>
          <Route exact path="/" component={HomeView} />

          <PublicRoute restricted path="/register" redirectTo="/">
            <RegisterView />
          </PublicRoute>

          <PublicRoute restricted path="/login" redirectTo="/">
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Suspense>

      <ToastContainer />
    </div>
  );
}
