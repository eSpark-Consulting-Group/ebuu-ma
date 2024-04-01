import { Dimensions } from "react-native";
import * as Yup from "yup";

const { width, height } = Dimensions.get("window");
const sWidth = Dimensions.get("screen").width;
const sHeght = Dimensions.get("screen").height;

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .label("Email")
    .matches(EMAIL_REGEX, { message: "Invalid email" }),
  password: Yup.string().required().min(6).label("Password"),
});

export { width as WINDOW_WIDTH, height as WINDOW_HEIGHT };
export { sWidth as SCREEN_WIDTH, sHeght as SCREEN_HEIGHT };
