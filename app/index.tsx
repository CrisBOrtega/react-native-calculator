import { View , Text } from 'react-native';
import {globalStyles} from "@/styles/global-styles";
import ThemeText from "@/components/ThemeText";
import CalculatorButton from "@/components/CalculatorButton";
import {Colors} from "@/constants/Colors";

const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>

            { /* Resultados */ }
            <View style={{paddingHorizontal:30 ,
                          marginBottom: 20}}>
               <ThemeText
                   variant='h1'
               >
                    50 x 5000
               </ThemeText>
                <ThemeText variant='h2'>
                    250
                </ThemeText>
            </View>
            { /* fin de resultados */ }
            {/* filas de botones */}
            <View style={globalStyles.row}>
                <CalculatorButton label="C"
                                  blackText={true}
                                  onPress={()=>console.log('C')}
                                  color={Colors.lightGray}
                />
                <CalculatorButton label="+/-"
                                  blackText={true}
                                  onPress={()=>console.log('+/-')}
                                  color={Colors.lightGray}
                />
                <CalculatorButton label="del"
                                  blackText={true}
                                  onPress={()=>console.log('del')}
                                  color={Colors.lightGray}
                />
                <CalculatorButton label="/"
                                  blackText={false}
                                  onPress={()=>console.log('/')}
                                  color={Colors.lightGray}
                />
            </View>


            {/* fin de filas de botones */ }

        </View>
    )
}

export default CalculatorApp;