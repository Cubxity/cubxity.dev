import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import "../styles/globals.css";

function MyApp({Component, pageProps}) {
  return (
    <div className="dark">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;