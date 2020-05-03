// https://www.youtube.com/watch?v=lhMKvyLRWo0 // usecontext refresher : Ben Awad. combines useMemo as well
// Source of below code: https://www.newline.co/@3nvi/centralizing-api-error-handling-in-react-apps--80296494

// ------------------------------------------------------------------------------------------------------------------------------
// Error Handler Component
//
// It only exposes the setErrorStatusCode to the children, but not the actual state of 'errorStatusCode'
//
// ------------------------------------------------------------------------------------------------------------------------------
import React from "react";
import { useHistory } from "react-router-dom";

// A context will be the way that we allow components lower down
// the tree to trigger the display of an error page
const ErrorStatusContext = React.createContext();

// The top level component that will wrap our app's core features
const ErrorHandler = ({ children }) => {
  const history = useHistory();
  const [errorStatusCode, setErrorStatusCode] = React.useState();

  // Make sure to "remove" this status code whenever the user
  // navigates to a new URL. If we didn't do that, then the user
  // would be "trapped" into error pages forever
  React.useEffect(() => {
    // Listen for changes to the current location.
    const unlisten = history.listen(() => setErrorStatusCode(undefined));
    // cleanup the listener on unmount
    return unlisten;
  }, []);

  // This is what the component will render. If it has an
  // errorStatusCode that matches an API error, it will only render
  // an error page. If there is no error status, then it will render
  // the children as normal
  const renderContent = () => {
    if (errorStatusCode === 404) {
      return <Page404 />;
    }

    // ... more HTTP codes handled here

    return children;
  };

  // We wrap it in a useMemo for performance reasons. More here:
  // https://kentcdodds.com/blog/how-to-optimize-your-context-value/
  const contextPayload = React.useMemo(() => ({ setErrorStatusCode }), [
    setErrorStatusCode,
  ]);

  // We expose the context's value down to our components, while
  // also making sure to render the proper content to the screen
  return (
    <ErrorStatusContext.Provider value={contextPayload}>
      {renderContent()}
    </ErrorStatusContext.Provider>
  );
};

// A custom hook to quickly read the context's value. It's
// only here to allow quick imports
const useErrorStatus = () => React.useContext(ErrorStatusContext);

// ------------------------------------------------------------------------------------------------------------------------------
// Using Error Handler Component in App.tsx / Parent Component
// ------------------------------------------------------------------------------------------------------------------------------

import React from "react";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import DogPage from "./DogPage";
import IndexPage from "./IndexPage";
import Page404 from "./Page404";

const App = () => {
  return (
    <BrowserRouter>
      <ErrorHandler>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/dogs/:breed/" component={DogPage} />
          <Route component={Page404} />
        </Switch>
      </ErrorHandler>
    </BrowserRouter>
  );
};

// ------------------------------------------------------------------------------------------------------------------------------
// Using Error Handler Component in useQuery api hook
// ------------------------------------------------------------------------------------------------------------------------------
import { useErrorStatus } from "./ErrorHandler";

const useQuery = ({ url }) => {
  const { setErrorStatusCode } = useErrorStatus();
  const [apiData, setApiData] = React.useState();

  React.useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then(({ code, status, ...apiData }) => {
        if (code > 400) {
          setErrorStatusCode(400);
        } else {
          setApiData(apiData);
        }
      });
  }, [url]);

  return { data: apiData };
};

// ------------------------------------------------------------------------------------------------------------------------------
// Using Error Handler Component in Child Component
// ------------------------------------------------------------------------------------------------------------------------------

import React from "react";
import { useParams, Link } from "react-router-dom";
import { get } from "lodash";
import useQuery from "./useQuery";

const DogPage = () => {
  const { breed } = useParams();
  const { data } = useQuery({
    url: `https://dog.ceo/api/breed/${breed}/images/random`,
  });

  const imageSrc = get(data, "message");
  return (
    <div>
      <div>
        <Link to="/">back</Link>
      </div>
      {!imageSrc && <p>Loading...</p>}
      {imageSrc && <img alt={`A nice ${breed}`} src={imageSrc} height={200} />}
    </div>
  );
};
