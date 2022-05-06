import { ScrollView, StyleSheet, TextStyle, ViewStyle, Image, ImageBackground , Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { LinearGradient } from 'expo-linear-gradient';
import CardInfo from '../components/InfoCard';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import BackSVG from '../assets/images/Group 6231.svg';
import FilterSVG from '../assets/images/Group 6232.svg'
import NotificationSVG from '../assets/images/ic-notification.svg'
import RoundSVG from '../assets/images/Rectangle 65118.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>){
  const [filterRI, setFilterRI] = useState(0);
  const [category, setCategory] = useState('Groups');

  function filterChange():void{
    if (filterRI === 0){
      setFilterRI(1500);
    }
    else setFilterRI(0)
  }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.headerImage} source={require('../assets/images/Wow.png')}>
            <LinearGradient colors={['transparent', '#050505']} style={styles.gradient}>
              <SafeAreaView>
              <View style={styles.headerWrapper}>
                <BackSVG />
                <View style={{flexDirection:'row', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.0)'}}>
                <TouchableOpacity onPress={filterChange}>
                  <FilterSVG style={{right: 16}}/>
                </TouchableOpacity>
                <View style={{backgroundColor: 'rgba(0, 0, 0, 0.0)'}}>
                  <RoundSVG style={{position: 'absolute', left: -8, bottom: -8}}/>
                  <NotificationSVG  />
                </View>
                </View>
              </View>
              </SafeAreaView>
              <View style={styles.gameNameContainer}>
                <Text style={styles.gameName}>Wolrd of Warcraft Classic</Text>
              </View>
            <View style={{paddingLeft: 38, flexDirection: 'row', backgroundColor: 'rgba(0, 0, 0, 0.0)'}}>
              <TouchableHighlight onPress={()=>setCategory('Groups')}>
                <View style={category === 'Groups' ? styles.btnPress : styles.btnNormal} key='Groups'><Text style={category === 'Groups' ? styles.categoryPress : styles.categoryNormal}>Groups</Text></View>
              </TouchableHighlight>
              <TouchableHighlight onPress={()=>setCategory('Players')}>
                <View style={category === 'Players' ? styles.btnPress : styles.btnNormal} key='Players'><Text style={category === 'Players' ? styles.categoryPress : styles.categoryNormal}>Players</Text></View>
              </TouchableHighlight> 
              <TouchableHighlight onPress={()=>setCategory('Teams')}>
                <View style={category === 'Teams' ? styles.btnPress : styles.btnNormal} key='Teams'><Text style={category === 'Teams' ? styles.categoryPress : styles.categoryNormal}>Teams</Text></View>
              </TouchableHighlight>
            </View>
            </LinearGradient>
            </ImageBackground>
            <View style={styles.scrollWrapper}>
            <ScrollView style={styles.list}>
              {
                RIS.filter((x => x > filterRI)).map((RI, index) => {return (<CardInfo key={index} info="WoW Classic" Rating={RI}/>)})
              }
            </ScrollView>
            </View>
        </View>
    );
}

function DevAlert():void{
  alert('In development');
}

let RIS: number[] = [673, 386, 1314, 260, 1679, 2625, 2597, 703, 1311, 1167, 2673, 2551, 476, 703, 522, 1354, 1875, 2524, 1050, 219, 1132, 2625, 1915, 372, 1347, 2286, 2803, 2967, 2644, 1270, 619, 2027, 2840, 2428, 1036, 1864, 1557, 396, 427, 2394, 1126, 903, 1901, 1129, 1591, 1534, 1611, 60, 2858, 617, 1005, 2210, 1459, 358, 1524, 2200, 1484, 1552, 654, 2921, 1906, 2999, 1507, 1173, 863, 2047, 636, 2493, 2358, 2408, 2437, 2396, 2340, 2056, 2651, 108, 424, 2546, 236, 2177, 2916, 263, 2664, 1973, 180, 578, 1257, 1233, 2626, 1749, 421, 861, 489, 58, 1937, 1587, 2135, 2819, 2440, 2019, 1361, 2310, 2158, 1486, 2468, 1119, 1711, 2841, 2552, 2411];

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#050505'
    },
    gameNameContainer: {
      width: 335,
      height: 72,
      paddingLeft: 37,
      backgroundColor: 'rgba(255, 255, 255, 0.0)',
    },
    gameName: {
      lineHeight: 36,
      fontSize: 32,
      fontWeight: '700'
    },
    headerWrapper: {
      flexDirection: 'row',
      paddingTop: 12,
      paddingHorizontal: 38,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.0)'
    },
    headerImage: {
      flex: 1,
      resizeMode: 'cover',
      width: '100%'
    },
    gradient: {
      flex: 1,
      width: '100%',
      justifyContent: 'space-between'
    },
    list: {
      flexDirection: 'column',
      alignSelf: 'center',
      height: 50,
      width: 335
    },
    scrollWrapper: {
      backgroundColor: 'rgba(0, 0, 0, 0.0)',
      height: 510
    },
    btnPress: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      height: 32,
      width: 89,      
      borderRadius: 20,
      paddingRight: 20
    },
    btnNormal: {
      backgroundColor: 'rgba(255, 255, 255, 0.0)',
      justifyContent: 'center',
      alignItems: 'center',
      height: 32,      
      width: 89,
      borderRadius: 100,
      paddingRight: 20
    },
    categoryPress:{
      color: '#FFFFFF',
      paddingLeft: 16,
      letterSpacing: -0.15
    },
    categoryNormal:{
      color: 'rgba(255, 255, 255, 0.48)',
      paddingLeft: 16,
      letterSpacing: -0.15
    }
  });