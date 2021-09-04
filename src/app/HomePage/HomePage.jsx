import Header  from "react-bootstrap/lib/Modal";
import Footer from "react-bootstrap/lib/Modal";
import { DisplayUsers } from "./DisplayUsers";

export const HomePage = () => {
  return (
    <>
      <Header />
      <DisplayUsers />
      <Footer />
    </>
  );
};
