import ReactDOM from "react-dom";

import { Overlay } from "./styles";

export default function Loader({ isLoading = false }) {
  if (!isLoading) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader" />
    </Overlay>,
    document.getElementById("loader-root")
  );
}
