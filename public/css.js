import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "'Sriracha', cursive"
    },
    "btn-title a": {
        "paddingTop": 5,
        "paddingRight": 16,
        "paddingBottom": 5,
        "paddingLeft": 16,
        "background": "#1480E2",
        "color": "#FFF",
        "textDecoration": "none",
        "fontFamily": "'Sriracha', cursive",
        "fontSize": 20,
        "borderBottom": "9px #0871d0 solid",
        "borderRadius": 4,
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "transition": "all 0.2s ease-in-out",
        "WebkitTransition": "all 0.2s ease-in-out"
    },
    "btn-title": {
        "paddingTop": "4%"
    },
    "bar-color": {
        "backgroundColor": "#ffffff",
        "borderColor": "#ffffff",
        "WebkitBoxShadow": "3px 6px 17px -4px rgba(0,0,0,0.75)",
        "MozBoxShadow": "3px 6px 17px -4px rgba(0,0,0,0.75)",
        "boxShadow": "14px 1px 17px -4px rgba(0,0,0,0.75)"
    },
    "setsize": {
        "marginTop": -8
    },
    "img-center": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "text-sub": {
        "textAlign": "center",
        "marginTop": "-4%",
        "fontSize": 24
    },
    "bg2": {
        "backgroundColor": "#03A9F4"
    },
    "ribbon": {
        "position": "fixed",
        "top": 0,
        "left": 0,
        "zIndex": 9400,
        "width": 130
    }
});