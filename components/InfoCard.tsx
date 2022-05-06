import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

import WoWSVG from '../assets/images/ic-game-wow.svg';
import CopySVG from '../assets/images/ic-copy.svg';
import DPSSVG from '../assets/images/ic-wow-player-dps.svg';
import TankSVG from '../assets/images/ic-wow-player-tank.svg';
import HealSVG from '../assets/images/ic-wow-player-heal.svg';

export default function CardInfo({info, Rating}: {info: string, Rating: number}){
    return (
        <View style={styles.card}>
            <View style={styles.gameInfo}>
                <WoWSVG width={20} height={20}/>
                <Text style={styles.headerDesc}>{info}</Text>
                <Image style={{marginLeft: 8, width: 3, height: 3, marginTop: 8.5}} source={require('../assets/images/Ellipse 210.svg')}/>
                <Text style={styles.headerDesc}>Today, 10:00</Text>
                <CopySVG style={{left: 68, height: 20, width: 20}}/>
            </View>
            <Text style={styles.description}>
            Salas arrasadas para la pre de TK
            </Text>
            <View style={styles.sessionTags}>
                <Text style={styles.tags}>Mythic Keys</Text>
                <Text style={styles.tags}>Dungeon name</Text>
                <Text style={styles.tags}>RI{Rating}</Text>
            </View>
            <View style={styles.gameInfo}>
                <View style={styles.sessionInfo}>
                    <DPSSVG style={styles.playerClassIcons}/>
                    <Text style={styles.counter}>1/5</Text>
                </View>
                <View style={[styles.sessionInfo, {marginLeft: 7}]}>
                    <TankSVG style={styles.playerClassIcons}/>
                    <Text style={styles.counter}>1/5</Text>
                </View>
                <View style={[styles.sessionInfo, {marginLeft: 7, backgroundColor: 'rgba(255, 255, 255, 0.08)'}]}>
                    <HealSVG style={styles.playerClassIcons}/>
                    <Text style={[styles.counter, {color: '#FFFFFF'}]}>1/5</Text>
                </View>
                <Text style={styles.nickname}>Alveona</Text>
                <Image style={styles.avatar} source={require('../assets/images/image40.png')}></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: 20,
        width: 20,
        // resizeMode: 'contain'
    },
    playerClassIcons:{
        left:7,
        width: 12, 
        height: 12
    },
    card: {
        backgroundColor: '#161616',
        height: 150,
        marginTop: 12,
        borderRadius: 16
    },
    gameInfo: {
        flexDirection: 'row',
        marginTop: 16,
        marginLeft: 16
    },
    headerDesc: {
        color: '#8B6E39',
        marginLeft: 8,
        fontSize: 14,
        letterSpacing: -0.08
    },
    description: {
        fontSize: 18,
        color: '#FFFFFF',
        marginLeft: 16,
        marginTop: 10,
        fontWeight: '600'
    },
    sessionTags: {
        flexDirection: 'row',
        marginTop: 6        
    },
    tags: {
        fontSize: 16,
        marginLeft: 16,
        color: '#7D7D7D'
    },
    sessionInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 53,
        height: 24,
        borderRadius: 12,
        backgroundColor: 'rgba(36, 242, 77, 0.08)'
    },
    nickname: {
        marginLeft: 44,
        color: '#7D7D7D',
        marginTop: 2
    },
    counter: {
        color: '#24F24D',
        marginLeft: 8, 
        fontSize: 14,
        bottom: 1,
        letterSpacing: -0.08
        // fontFamily: 'SF PRO TEXT'
    },
    avatar: {
        width: 24,
        height: 24,
        marginLeft: 8
    }
})