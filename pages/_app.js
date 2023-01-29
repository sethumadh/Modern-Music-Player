import "../styles/globals.css"
// import {wrapper} from "../redux/store"
// import{ withRedux }from 'next-redux-wrapper';
import { Provider } from "react-redux"
import { store } from "../redux/store"

import Layout from "../components"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
  )
}

// export default wrapper.withRedux(MyApp);
export default MyApp
