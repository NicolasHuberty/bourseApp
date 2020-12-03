import React from 'react'
import {FlatList,StyleSheet,Text, View,TextInput,Button} from 'react-native'
import BourseItem from './BourseItem'
import {get_value} from '../API/get_value'
import Test from '../test'
//Finnhub
const finnhub = require('finnhub');
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "bv4hdvf48v6qpatdl9tg" // Replace this
const finnhubClient = new finnhub.DefaultApi()
//Finnhub initialisation end
class Search extends React.Component{
    constructor(props){
        super(props)
        this._market_value = []
    }

    _loadSearch(){
        const finnhubClient = new finnhub.DefaultApi();
        finnhubClient.country((error, data, response) => {
            this._market_value = data
        });
        this.forceUpdate()
        console.log(this._market_value.forEach(code2))
        
      
    }
    render(){
      

        return(
            <View style={styles.main_container}>
                <TextInput stlye={styles.TextInput} placeholder="Nom de l'action"/>
                <Button  style={{height: 50}} title="Rechercher" onPress={()=> this._loadSearch()}/>
              

            </View>
        )
    }
}
const styles = StyleSheet.create({
    TextInput: {
        marginLeft:5,
        marginRight:5,
        height:50,
        borderColor:'#000000',
        borderWidth:1,
        paddingLeft:5
    },
    main_container:{
        flex:1,
        marginTop:20
     
    }
})
export default Search