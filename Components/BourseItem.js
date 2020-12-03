import React from 'react'
import {FlatList,StyleSheet,Text, View,TextInput,Button} from 'react-native'
 class BourseItem extends React.Component{
     
    render(){
        const bourseValue = this.props
        console.log('_________________')
        
        return(
            <View style = {styles.main_container}>
                <View style= {styles.title_container}>
                    <Text style={styles.title_text}>{bourseValue.symbol}</Text>
                    <Text style={styles.exchange_text}>{bourseValue.exchange}</Text>
                </View>
                <View style= {styles.volume_container}>
                    <Text style={styles.volume_text}>Volume: {bourseValue.volume}</Text>
                </View>
                <View style={styles.update_container}>
                    <Text style={styles.update_low}>Low:{bourseValue.low}</Text>
                    <Text style={styles.update_high}>High:{bourseValue.high}</Text>

                </View>
            </View>
        )
    }
 }
 const styles = StyleSheet.create({
     main_container:{
        backgroundColor:'gray',
        margin:5,
        height:190,
        flex:1,
        flexDirection:'column'
        
     },
     title_container:{
         
         margin:5,
         flex:1,
         flexDirection:'row'

     },
     title_text:{
         fontWeight:'bold',
         fontSize:20,
         flexWrap:'wrap',
         flex:1,
         paddingRight:5
     },
     exchange_text:{
        fontSize:15,
        flexWrap:'wrap',
        margin:5,
        fontWeight:'bold'

     },
     volume_container:{
         flex:1,
         justifyContent:'center',
         flexDirection:'row'
     },
     volume_text:{
         fontWeight:'bold'
     },
     update_container:{
         flex:1,
         flexDirection:'row',
     },
     update_low:{
  
         flex:1
     },
     update_high:{
         flex:1
     }
 })
 export default BourseItem 