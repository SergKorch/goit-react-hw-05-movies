export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
// import { BrowserRouter } from "react-router-dom";
// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.querySelector("#root")
// );
// import { Route } from "react-router-dom";

// const App = () => (
//   <>
//     <Route path="/" exact>
//       <Home />
//     </Route>
//     <Route path="/about">
//       <About />
//     </Route>
//     <Route path="/contact">
//       <Contact />
//     </Route>
//   </>
// );