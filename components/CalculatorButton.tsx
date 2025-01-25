import { Pressable, Text } from "react-native";
import {globalStyles} from "@/styles/global-styles";
import {Colors} from "@/constants/Colors";

interface Props{
    label:string;
    color?:string;
    blackText: boolean;
    onPress?:() => void;
}


const CalculatorButton = ({     label,
                                onPress,
                                blackText= false,
                                color= Colors.darkGray
                            }:Props) => {
    return(
        <Pressable style={ globalStyles.button}
                    onPress={ onPress }
        >
            <Text
                style={{ ...globalStyles.buttonText,
                            color:blackText ? 'black' : 'white',
                        }}>
                { label  }
            </Text>
        </Pressable>
    )

}

export default CalculatorButton;