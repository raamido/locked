import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDo5ckFsmi1I-WoyP_78rV-MgCMnRD_HpQ",
  authDomain: "locked-bedd7.firebaseapp.com",
  projectId: "locked-bedd7",
  storageBucket: "locked-bedd7.appspot.com",
  messagingSenderId: "666507730600",
  appId: "1:666507730600:web:58f0fe3187e57124966c9d",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
