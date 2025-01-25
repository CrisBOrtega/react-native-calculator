import {Text, type TextProps} from 'react-native';
import {globalStyles} from "@/styles/global-styles";

interface Props extends TextProps{
    //no es encesario porner children porque
    //textporps ya lo recopnoce
    //children: string;
    variant?: 'h1'|'h2'
}


const ThemeText = ({children , variant = 'h1',  ...rest } : Props ) => {
    return (
        <Text style={[
            {   color: 'white',
                fontFamily: 'SpaceMono2'
            },
            variant === 'h1' && globalStyles.mainResult,
            variant === 'h2' && globalStyles.subResult

          ]}
                numberOfLines={1}
                adjustsFontSizeToFit
            { ...rest }
        >
            { children }
        </Text>
    )
}

export default ThemeText;