import React from 'react';
import Forecast from './Forecast'
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                main: 'main', description: 'description', temp: 0
            }
        }
    }

    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=95cead4db5d52c4a924b17b2233ebd74
        `)
            .then((response) => response.json())
            .then((json) => {
                this.setState(
                    {
                        forecast: {
                            main: json.weather[0].main,
                            description: json.weather[0].description,
                            temp: json.main.temp
                        }
                    });
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    componentDidMount = () => this.fetchData()


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../bg.jpeg')} style={styles.backdrop}>
                    <View style={styles.app}>
                        <Text style={styles.font}>Zip code is {this.props.zipCode}.</Text>
                        <Forecast {...this.state.forecast} />
                    </View>
                    <Text style={styles.fontC}>Miss Sasiprapa Sattaban</Text>
                    <Text style={styles.fontC}>5835512018</Text>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { paddingTop: 25 },
    backdrop: { width: "100%", height: "100%" },
    app: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.8)"
    },
    font: {
        color: "white",
        paddingTop: 25,
        fontSize: 18
    },
    fontC: {
        color: 'white',
        paddingTop: 35,
        fontSize: 18
    }
});
