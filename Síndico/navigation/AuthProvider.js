// import React, { createContext, useState } from "react";
// // import auth from "@react-native-firebase/auth";
// import { auth } from "../../config/firebase";
// import { signInWithEmailAndPassword } from "firebase/auth" 

// export const AuthContext = createContext();

// export const AuthProvider = ({children}) => {
//     const [user, setUser] = useState(null);
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();

//     const signin = async () => {
//         await signInWithEmailAndPassword(auth, email, password)
//     }

//     return (
//         <AuthContext.Provider
//             value={{
//                 user,
//                 setUser,
//                 login: async() => {
//                         await signInWithEmailAndPassword(auth, email, password);
//                 },
                
//             }}
//         >
//             {children}
//         </AuthContext.Provider>
//     );
// }














