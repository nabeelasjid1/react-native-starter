
let OrangeColor = {
    primaryColor: "#E5634D",
    darkPrimaryColor: "#C31C0D",
    lightPrimaryColor: "#FF8A65",
    accentColor: "#4A90A4"
};

let BlueColor = {
    primaryColor: "#5DADE2",
    darkPrimaryColor: "#1281ac",
    lightPrimaryColor: "#68c9ef",
    accentColor: "#FF8A65"
};

let PinkColor = {
    primaryColor: "#A569BD",
    darkPrimaryColor: "#C2185B",
    lightPrimaryColor: "#F8BBD0",
    accentColor: "#8BC34A"
};

let GreenColor = {
    primaryColor: "#58D68D",
    darkPrimaryColor: "#388E3C",
    lightPrimaryColor: "#C8E6C9",
    accentColor: "#607D8B"
};

let YellowColor = {
    primaryColor: "#FDC60A",
    darkPrimaryColor: "#FFA000",
    lightPrimaryColor: "#FFECB3",
    accentColor: "#795548"
};

/**
 * Main color use for whole application
 */
let BaseColor = {
    ...OrangeColor,
    ...{
        textPrimaryColor: "#212121",
        textSecondaryColor: "#E0E0E1",
        grayColor: "#9B9B9B",
        darkBlueColor: "#24253D",
        dividerColor: "#BDBDBD",
        whiteColor: "#FFFFFF",
        blackColor: "#000000",
        lightGray: "#F0F0F0",
        fieldColor: "#F5F5F5",
        yellowColor: "#FDC60A",
        navyBlue: "#134E65",
        kashmir: "#5D6D7E",
        placeholderColor: "#929FB7"
    }
};

export {
    BaseColor,
    OrangeColor,
    BlueColor,
    PinkColor,
    GreenColor,
    YellowColor
};
