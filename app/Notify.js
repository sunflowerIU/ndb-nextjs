import { ToastContainer, Zoom } from "react-toastify";

function Notify() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable={false}
      pauseOnHover
      theme="light"
      transition={Zoom}
    />
  );
}

export default Notify;
