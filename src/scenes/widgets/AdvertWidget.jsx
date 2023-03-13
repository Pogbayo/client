import { Typography, useTheme} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;
    
    return (
       <WidgetWrapper>
         <FlexBetween>
            <Typography color={dark} variant="h5" fontweight="500">
                Sponsored
            </Typography>
            <Typography color={medium}>
                Create Ad
            </Typography>
         </FlexBetween>
         <img 
           width="100%"
           height="auto"
           src={`${process.env.REACT_APP_MBE}/assets/info4.jpeg`}
           style={{borderRadius : "0.75rem", margin:"0.75rem 0"}}
           alt="advert" />
           <FlexBetween>
             <Typography color={main}>mikaCosmetics</Typography>
             <Typography color={medium}>mikacosmetics.com</Typography>
           </FlexBetween>
           <Typography color={medium} m="0.5rem 0">
             Your pathway to stunning and immaculate beauty and make sure your
             is exfoliating skin and shining like light.
           </Typography>
       </WidgetWrapper>
        );
};

export default AdvertWidget;