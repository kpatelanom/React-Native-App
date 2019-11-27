import React, { Component } from 'react'
import { View, Text,FlatList,StyleSheet,AsyncStorage } from 'react-native';
import { connect } from "react-redux";
import { getUserList } from './../Redux/ListReducer';


class ListScreen extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:''
        }
      }
    componentDidMount(){
     this.props.getUserList()
     AsyncStorage.getItem('name').then(name=>this.setState({name:name}))
    }

    render() {
        return (
            <View>
             <Text>Hello Mr. {this.state.name}</Text>
              <FlatList
                data={this.props.userData}
                renderItem={({item}) => <Text style={styles.item} key={item.id}>{item.name}</Text>}
             />
           </View>
        
        )
    }
}

const mapStateToProps = state =>{
   return{
       userData:state.ListReducer.userData
   }
}

export default connect(mapStateToProps,{getUserList})(ListScreen);

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
  