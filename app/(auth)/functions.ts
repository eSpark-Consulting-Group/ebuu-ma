import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";
import auth from "@react-native-firebase/auth";
import { router } from "expo-router";

export const _signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    // let fcmToken = await AsyncStorage.getItem('fcmToken');
    const userInfo = await GoogleSignin.signIn();
    console.log("userinfo", userInfo);

    const googleCredential = auth.GoogleAuthProvider.credential(
      userInfo.idToken
    );
    const user_sign = auth().signInWithCredential(googleCredential);
    user_sign
      .then((user) => {
        console.log("user sign", user);
        router.push("/(home)");
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

export const onFacebookButtonPress = async () => {
  // Attempt login with permissions
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
  fbuser_sign.then((user) => {
    console.log("fbuser_sign", user);
    router.push("/(home)");
  });
  // Sign-in the user with the credential
  // return auth().signInWithCredential(facebookCredential);
};
