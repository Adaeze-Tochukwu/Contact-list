import { useState } from "react";
import ContactList from "./components/contact/ContactList";
import "./App.scss";
import Learning from "./components/contact/Learning";

function App() {
  return (
    <>
      <ContactList />
      <Learning />
    </>
  );
}

export default App;
