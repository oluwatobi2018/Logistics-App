import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Picker,
  CheckBox,
  TouchableOpacity,
  onValueChange,
} from "react-native";

/*const display = () => {
  <Text>{this.state.pickup}{this.delivery}{this.phone}{this.PickerSelectedVal}{this.dimension}{this.weight}{this.type}{this.checked}{this.order}</Text>
}*/


export default function Booking()
  const [pickup, setpickup] = useState("");
  const [delivery, setdelivery] = useState("");
  const [phone, setphone] = useState("");
  const [PickerSelectedVal, setPickerSelectedVal] = useState("Bulk");
  const [dimension, setdimension] = useState("");
  const [weight, setweight] = useState("");
  const [type, settype] = useState("");
  const [order, setorder] = useState("");
  const [check, setcheck] = useState(false);

  const [pickuperr, setpickuperr] = useState("");
  const [deliveryerr, setdeliveryerr] = useState("");
  const [phoneerr, setphoneerr] = useState("");
  const [PickerSelectedValerr, setPickerSelectedValerr] = useState("");
  const [dimensionerr, setdimensionerr] = useState("");
  const [weighterr, setweighterr] = useState("");
  const [typeerr, settypeerr] = useState("");
  const [ordererr, setordererr] = useState("");
  const [checkerr, setcheckerr] = useState("");


  const validate = () => {
    if (pickup == "" || delivery == "" || phone == "" || PickerSelectedVal == "" || dimension == "" || weight == "" || weight>1500
    || type == "" || order =="" || check == false) {
      if (pickup == "") {
        setpickuperr("Pickup address required");
      }
      else {
        setpickuperr("");
      }
      if (delivery == "") {
        setdeliveryerr("Delivery address required");
      }
      else {
        setdeliveryerr("");
      }
      if (phone == "") {
        setphoneerr("Phone number required");
      }
      else {
        setphoneerr("");
      }
      if (PickerSelectedVal == "") {
        setPickerSelectedValerr("Select either Bulk or Break-Bulk");
      }
      else {
        setPickerSelectedValerr("");
      }
      if (dimension == "") {
        setdimensionerr("Dimension required");
      }
      else {
        setdimensionerr("");
      }
      if (weight == "") {
        setweighterr("Weight required");
      }
      else if(weight>1500){
        setweighterr("Enter weight below 1500");
      }
      else {
        setweighterr("");
      }
      if (type == "") {
        settypeerr("Type required");
      }
      else {
        settypeerr("");
      }
      if (order == "") {
        setordererr("Order Value required");
      }
      else {
        setordererr("");
      }
      if(check==false){
        setcheckerr("Please include the insurance");
      }
      else{
        setcheckerr("");
      }
    }
    else {
      setpickuperr("");
      setdeliveryerr("");
      setphoneerr("");
      setPickerSelectedValerr("");
      setdimensionerr("");
      setweighterr("");
      settypeerr("");
      setordererr("");
      setcheckerr("");
      return <View />
    }
  }
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.total}>

          <View>
            <Text style={styles.container}>Booking</Text>
          </View>
          
          <View>
            <Text style={styles.text}>Pickup Address</Text>
            <TextInput multiline={true} style={styles.input}
              onChangeText={(text) =>  setpickup(text)} />
            <View style={{ width: '75%' }}>
              <Text style={styles.validation}>{pickuperr}</Text>
            </View>

            <Text style={styles.text}>Delivery Address</Text>
            <TextInput multiline={true} style={styles.input}
            onChangeText={(text) =>  setdelivery(text)} />
            <View style={{ width: '75%' }}>
              <Text style={styles.validation}>{deliveryerr}</Text>
            </View>

            <Text style={styles.text}>Phone number</Text>
            <TextInput style={styles.inputsingle} keyboardType="number-pad" maxLength={10}
             onChangeText={(text) =>  setphone(text)} />
             <View style={{ width: '75%' }}>
               <Text style={styles.validation}>{phoneerr}</Text>
             </View>

            <Text style={styles.text}>Category</Text>
            <Picker selectedValue={PickerSelectedVal} style={[styles.inputsingle ]}
              onValueChange={(itemValue, itemIndex) => setPickerSelectedVal(itemValue)}>
              <Picker.Item label="Bulk" value="Bulk" />
              <Picker.Item label="Break-Bulk" value="Break-Bulk" />
            </Picker>
            <View style={{ width: '75%' }}>
               <Text style={styles.validation}>{PickerSelectedValerr}</Text>
            </View>

            <Text style={styles.text2}>Consignment details :</Text>
            <Text style={styles.text}>1. Dimension</Text>
            <TextInput style={styles.inputsingle} placeholder="length × breadth × height" placeholderTextColor="#003f5c"
              onChangeText={(text) =>  setdimension(text)} />
              <View style={{ width: '75%' }}>
                <Text style={styles.validation}>{dimensionerr}</Text>
              </View>

            <Text style={styles.text}>2. Weight</Text>
            <TextInput style={styles.inputsingle} keyboardType="number-pad" placeholder="In kg" placeholderTextColor="#003f5c"
            onChangeText={(text) =>  setweight(text)} />
            <View style={{ width: '75%' }}>
              <Text style={styles.validation}>{weighterr}</Text>
            </View>

            <Text style={styles.text}>3. Type</Text>
            <TextInput style={styles.inputsingle} placeholder="electronic etc.." placeholderTextColor="#003f5c"
            onChangeText={(text) =>  settype(text)} />
            <View style={{ width: '75%' }}>
              <Text style={styles.validation}>{typeerr}</Text>
            </View>

            <Text style={styles.text2}>Declaration :</Text>
            <Text style={styles.text}>Order Value</Text>
            <TextInput style={styles.inputsingle} keyboardType="number-pad"
            onChangeText={(text) =>  setorder(text)} />
            <View style={{ width: '75%' }}>
              <Text style={styles.validation}>{ordererr}</Text>
            </View>

            <View style={{ flexDirection: 'column'}}>
              <View style={{ flexDirection: 'row', marginTop:1, borderColor: 'white'}}>
                <CheckBox 
                  value={check}
                  onValueChange={setcheck}
                />
                <Text style={styles.text2}>  Insurance</Text>
              </View>
            </View>
            <View style={{ width: '75%' }}>
              <Text style={styles.validation}>{checkerr}</Text>
            </View>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText} onPress={validate}>Confirm Booking</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )

 StyleSheet.create({
  container: {
    marginTop: 40,
    marginLeft: 10,
    alignItems: 'center',
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 10,
    marginTop: -20,
    marginLeft: 120,
    marginBottom: 5,
    borderRadius: 30,
    width: 250,
    height: 80,
    color: "white",
    backgroundColor: "#465881",
    textAlignVertical: 'top',
  },
  inputsingle: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 5,
    marginTop: -20,
    borderRadius: 125,
    marginLeft: 120,
    marginBottom: 5,
    width: 250,
    height: 30,
    color: "white",
    backgroundColor: "#465881"
  },
  checkbox: {
    alignSelf: "center",
  },
  total: {
    backgroundColor: '#003f5c',
    alignItems: 'center',
  },
  loginBtn: {
    width: 200,
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 80,
  },
  loginText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
      color: "#ccc",
      fontSize: 16,
  },
  text2: {
    color: "#ccc",
    fontSize: 18,
  },
  validation: {
    color: "crimson",
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: "left",
    marginBottom: 1
  },
});
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Button,
} from "react-native";
import Stars from "react-native-stars";

const Form = (props) => {
  const [rating, setRating] = useState(0);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View>
        <Text style={styles.title}>Feedback and Report</Text>
        <Text style={styles.preInput}>Enter Feedback:</Text>
        <TextInput style={styles.textInput} multiline={true} />
        <Text style={styles.preInput}>Rating:</Text>
        <View style={{ alignItems: "center", margin: -30 }}>
          <Stars
            half={true}
            default={2.5}
            update={(rating) => {
              setRating(rating);
            }}
            spacing={4}
            starSize={40}
            count={5}
            fullStar={require("../images/starFilled.png")}
            emptyStar={require("../images/starEmpty.png")}
            halfStar={require("../images/starHalf.png")}
          />
          <Text
            style={{
              color: "#ba1e18",
              fontSize: 15,
              fontWeight: "bold",
              padding: 15,
            }}
          >
            Entered Rating:{rating}
            {"\n\n\n\n\n\n"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Button
            style={styles.buttonContainer}
            title="Submit Review"
            color="#c95924"
            onPress={() => {
              alert("Works");
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
StyleSheet.create({
  title: {
    color: "#1422b8",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    margin: 30,
  },
  preInput: {
    padding: 40,
    margin: 20,
    textAlign: "center",
    fontSize: 17,
    color: "#31a34c",
  },
  textInput: {
    height: 55,
    borderColor: "#2f3da3",
    borderWidth: 1.5,
    borderRadius: 15,
  },
});
import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Keyboard,
    SafeAreaView,
    AppRegistry,
    PanResponder,
} from "react-native";

import DatePicker from 'react-native-datepicker';

class Schedule extends React.Component {
    constructor() {
        super();
        this.state = {
            pickupdate: '',
            deliverydate: '',
            pickuptime: '',
            deliverytime: '',
            date: '',
            time: '20:00',
            datetime: '2016-05-05 20:00',
            datetime1: '2016-05-05 20:00'
        }
    }
    render() {
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                }}
            >
            <View style={styles.total}>
                <Text style={styles.container}>Schedule</Text>
                <Text style={styles.text}>Pick-up date</Text>
                <TextInput style={styles.inputsingle} placeholder="dd-mm-yyyy" placeholderTextColor="#003f5c"
                    onChangeText={(text) => { this.setState({ pickupdate: text }) }}
                />



            <Text style={styles.text}>Pick-up Time</Text>
            <TextInput style={styles.inputsingle} placeholder="hh-mm AM/PM" placeholderTextColor="#003f5c"
                onChangeText={(text) => { this.setState({ pickuptime: text }) }}
            />

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Confirm Schedule</Text>
            </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginLeft: 100,
        alignItems: 'center',
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
    },
    inputsingle: {
        borderWidth: 1,
        borderColor: "#777",
        padding: 5,
        marginTop: -20,
        borderRadius: 125,
        marginLeft: 130,
        marginBottom: 10,
        width: 250,
        height: 30,
        color: "white",
        backgroundColor: "#465881",
    },
    loginBtn: {
        width: 200,
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 100,
    },
    loginText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    text: {
        color: "#ccc",
        fontSize: 16,
        marginLeft: 15,
    },
    total: {
        backgroundColor: '#003f5c',
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
      }

});

AppRegistry.registerComponent('datepicker', () => datepicker);

/*
            <Text style={styles.text}>Delivery date</Text>
            <TextInput style={styles.inputsingle} placeholder="dd-mm-yyyy" placeholderTextColor="#003f5c"
                onChangeText={(text) => { this.setState({ deliverydate: text }) }}
            />
            <Text style={styles.text}>Delivery Time</Text>
            <TextInput style={styles.inputsingle} placeholder="hh-mm AM/PM" placeholderTextColor="#003f5c"
                onChangeText={(text) => { this.setState({ deliverytime: text }) }}
            />
            */
            import React, { useState } from "react";
            import {
                StyleSheet,
                View,
                Text,
                TextInput,
                TouchableWithoutFeedback,
                TouchableOpacity,
                Keyboard,
                SafeAreaView,
                AppRegistry,
                PanResponder,
            } from "react-native";
            
            import DatePicker from 'react-native-datepicker';
            
            class Schedule extends React.Component {
                constructor() {
                    super();
                    this.state = {
                        pickupdate: '',
                        deliverydate: '',
                        pickuptime: '',
                        deliverytime: '',
                        date: '',
                        time: '20:00',
                        datetime: '2016-05-05 20:00',
                        datetime1: '2016-05-05 20:00'
                    }
                }
                render() {
                    return (
                        <TouchableWithoutFeedback
                            onPress={() => {
                                Keyboard.dismiss();
                            }}
                        >
                        <View style={styles.total}>
                            <Text style={styles.container}>Schedule</Text>
                            <Text style={styles.text}>Pick-up date</Text>
                            <TextInput style={styles.inputsingle} placeholder="dd-mm-yyyy" placeholderTextColor="#003f5c"
                                onChangeText={(text) => { this.setState({ pickupdate: text }) }}
                            />
            
            
            
                        <Text style={styles.text}>Pick-up Time</Text>
                        <TextInput style={styles.inputsingle} placeholder="hh-mm AM/PM" placeholderTextColor="#003f5c"
                            onChangeText={(text) => { this.setState({ pickuptime: text }) }}
                        />
            
                        <TouchableOpacity style={styles.loginBtn}>
                            <Text style={styles.loginText}>Confirm Schedule</Text>
                        </TouchableOpacity>
                            </View>
                        </TouchableWithoutFeedback>
                    );
                };
            }
            
 StyleSheet.create({
                container: {
                    marginTop: 40,
                    marginLeft: 100,
                    alignItems: 'center',
                    fontWeight: "bold",
                    fontSize: 50,
                    color: "#fb5b5a",
                },
                inputsingle: {
                    borderWidth: 1,
                    borderColor: "#777",
                    padding: 5,
                    marginTop: -20,
                    borderRadius: 125,
                    marginLeft: 130,
                    marginBottom: 10,
                    width: 250,
                    height: 30,
                    color: "white",
                    backgroundColor: "#465881",
                },
                loginBtn: {
                    width: 200,
                    backgroundColor: "#fb5b5a",
                    borderRadius: 25,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                    marginBottom: 10,
                    marginLeft: 100,
                },
                loginText: {
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                },
                text: {
                    color: "#ccc",
                    fontSize: 16,
                    marginLeft: 15,
                },
                total: {
                    backgroundColor: '#003f5c',
                },
                container2: {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#F5FCFF'
                  },
                  welcome: {
                    fontSize: 20,
                    textAlign: 'center',
                    margin: 10
                  },
                  instructions: {
                    textAlign: 'center',
                    color: '#333333',
                    marginBottom: 5
                  }
            
            });
            
            AppRegistry.registerComponent('datepicker', () => datepicker);
            
            /*
                        <Text style={styles.text}>Delivery date</Text>
                        <TextInput style={styles.inputsingle} placeholder="dd-mm-yyyy" placeholderTextColor="#003f5c"
                            onChangeText={(text) => { this.setState({ deliverydate: text }) }}
                        />
                        <Text style={styles.text}>Delivery Time</Text>
                        <TextInput style={styles.inputsingle} placeholder="hh-mm AM/PM" placeholderTextColor="#003f5c"
                            onChangeText={(text) => { this.setState({ deliverytime: text }) }}
                        />
                        */
                        import React from "react";

                        import { createStackNavigator } from '@react-navigation/stack';
                        import SignIn from "../screens/SignIn";
                        import SignUp from "../screens/SignUp";
                        
                        const Stack = createStackNavigator();
                        const HomeStackNavigator = () => (
                            <Stack.Navigator>
                                <Stack.Screen name="Signin" component={SignIn} />
                                <Stack.Screen name="Signup" component={SignUp} />
                            </Stack.Navigator>
                        );

                        import React, { useState } from 'react';
import {
    StyleSheet, Text, View,
    TextInput, TouchableOpacity,
    Image
} from 'react-native';

export default function SignIn({ navigation }) {

    const [currUserID, newUserID] = useState("");
    const [currPassword, newPassword] = useState("");
    const [passState, newPassState] = useState("");
    const [userState, newUserState] = useState("");

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const passNotEmpty = () => {
        if (currPassword == "" || currUserID == "" || reg.test(currUserID) == false) {
            if (currUserID == "") {
                newUserState("Username required");
            }
            else if (reg.test(currUserID) == false) {
                newUserState("Invalid Email Format");
            }
            else {
                newUserState("");
            }
            if (currPassword == "") {
                newPassState("Password required");
            }
            else {
                newPassState("");
            }
        }
        else {
            newUserState("");
            newPassState("");
            return <View />
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.logo}>Sign In</Text>
            <Image style={styles.ImageStyle} source={require('./Images/ProfileAvatar.jpg')} />
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Email..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => newUserID(text)} />
            </View>

            <View style={{ width: '75%' }}>
                <Text style={styles.validation}>{userState}</Text>
            </View>

            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Password..."
                    placeholderTextColor="#003f5c"
                    secureTextEntry
                    onChangeText={text => newPassword(text)} />
            </View>
            <View style={{ width: '75%' }}>
                <Text style={styles.validation}>{passState}
                </Text>
            </View>


            <TouchableOpacity style={styles.loginBtn} onPress={passNotEmpty}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text style={styles.loginText}>Signup</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
    );
}

StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
        marginBottom: 40,
        marginTop: 35
    },
    inputView: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        marginBottom: 13,
        justifyContent: "center",
        padding: 20,
    },
    inputText: {
        height: 50,
        fontSize: 20,
        color: "white",

    },
    forgot: {
        color: "#ccc",
        fontSize: 16,
        marginTop: 10
    },
    loginText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    ImageStyle: {
        width: 110,
        height: 110,
        marginBottom: 20,
        borderRadius: 75
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 13,
        marginBottom: 15
    },
    validation: {
        color: "crimson",
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: "left",
        marginBottom: 13
    }
});
import React, { useState } from 'react';
import {
  StyleSheet, Text,
  View, TextInput,
  TouchableOpacity, 
} from 'react-native';



      