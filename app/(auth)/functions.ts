import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";
import auth from "@react-native-firebase/auth";
import { router } from "expo-router";
import { api, xApi } from "../../api";

export const googleSignIn = async (type: "signIn" | "signUp") => {
  try {
    await GoogleSignin.hasPlayServices();
    // let fcmToken = await AsyncStorage.getItem('fcmToken');
    const userInfo = await GoogleSignin.signIn();
    console.log("userinfo", userInfo);

    const googleCredential = auth.GoogleAuthProvider.credential(
      userInfo.idToken
    );
    console.log("googleCredential", googleCredential);
    const user_sign = auth().signInWithCredential(googleCredential);
    await user_sign
      .then(async ({ user }) => {
        console.log("user sign", user.providerData);
        router.push("/(home)");
        // if (type == "signIn") {
        //   const res: any = await xApi.post(
        //     "http://192.168.18.14:3000/api/v1/user/login-auth",
        //     {
        //       email: user.email,
        //     }
        //   );

        //   console.log("res", res);

        //   if (res.ok) {
        //     router.push("/(home)");
        //   } else {
        //     await GoogleSignin.signOut();
        //     alert(res?.data?.message);
        //   }
        // } else {
        //   const res: any = await xApi.post(
        //     "http://192.168.18.14:3000/api/v1/user/signup-auth",
        //     {
        //       email: user.email,
        //       authType: "GOOGLE",
        //       providerID: user.uid,
        //     }
        //   );

        //   console.log("res", res);

        //   if (res.ok) {
        //     router.push("/(home)");
        //   } else {
        //     await GoogleSignin.signOut();
        //     alert(res?.data?.message);
        //   }
        // }

        // const data = <User>{
        //   email: user.email,
        //   userName: user.displayName,
        //   image: user.photoURL,
        //   uid: user.uid,
        //   fcmToken: fcmToken ?? '',
        // };
      })
      .catch((err) => {
        console.log("user", err);
      });
  } catch (error: any) {
    console.error(error);
  }
};

export const facebookSignIn = async (type: "signIn" | "signUp") => {
  // Attempt login with permissions
  try {
    const result = await LoginManager.logInWithPermissions([
      "email",
      "public_profile",
    ]);
    if (result.isCancelled) {
      throw "User cancelled the login process";
    }
    // // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw "Something went wrong obtaining access token";
    }
    console.log("userdata", data);
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken
    );
    const fbuser_sign = auth().signInWithCredential(facebookCredential);
    await fbuser_sign.then(async ({ user }) => {
      console.log("fbuser_sign", user);
      if (type == "signIn") {
        const res: any = await xApi.post(
          "http://192.168.18.14:3000/api/v1/user/login-auth",
          {
            email: user.providerData[0].email,
          }
        );

        console.log("res", res);

        if (res.ok) {
          router.push("/(home)");
        } else {
          await GoogleSignin.signOut();
          alert(res?.data?.message);
        }
      } else {
        const res: any = await xApi.post(
          "http://192.168.18.14:3000/api/v1/user/signup-auth",
          {
            email: user.providerData[0].email,
            authType: "FACEBOOK",
            providerID: user.uid,
          }
        );

        console.log("res", res);

        if (res.ok) {
          router.push("/(home)");
        } else {
          await GoogleSignin.signOut();
          alert(res?.data?.message);
        }
      }
    });
    // Sign-in the user with the credential
    // return auth().signInWithCredential(facebookCredential);
  } catch (error) {
    console.error(error);
  }
};
