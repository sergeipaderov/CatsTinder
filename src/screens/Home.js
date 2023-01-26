import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  Image,
  Text,
  Switch,
} from 'react-native';
import axios from 'axios';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import NavBar from '../components/NavBar';
import CustomButton from '../components/CustomButtom';

// Sorry guys. Was not very clear for me what I need to do with with "votes" endpoint.
// Besides was need to resolve issue with specific Ruby's version and RVM during the app's creation.
// I spent too much time with it and didn't have time to finish everething.

const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFavorites, setIsFavorits] = useState(false);
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    onGetCats();
  }, []);

  const onGetCats = () => {
    // using axios.all for add other requests favorites, etc....
    // cerate api folder for requests
    try {
      axios
        .all([
          axios.get(
            'https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1',
          ),
        ])
        .then(res => {
          setCats(res[0].data);
          setLoading(false);
        })
        .catch(err => console.error(err));
    } catch (error) {
      console.error(error);
    }
  };

  // For switch component
  const toggleSwitch = () => setIsFavorits(prev => !prev);

  const onCatRemove = () => {
    let arr = cats.filter((item, index) => index !== 0);

    setCats(arr);
  };

  const container = {
    backgroundColor: isDarkMode ? Colors.darker : '#E5E5E5',
  };

  const onAddFavorite = () => {
    // Votes button's handler must to looks like this (more or less). It returns 401 for now.

    try {
      axios
        .post('https://api.thecatapi.com/v1/favourites', {
          image_id: cats[0]?.id,
        })
        .then(onCatRemove())
        .catch(err => console.log(err));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={container}>
      {/* Add Switch here} */}
      <View style={styles.homeContainer}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <View style={styles.catContainer}>
            <Image style={styles.img} source={{uri: cats[0]?.url}} />
            {!loading && cats[0]?.url?.breeds ? (
              <View style={styles.infoContainer}>
                <View style={styles.upInfo}>
                  <Text style={styles.name}>{cats[0]?.url?.breeds?.name}</Text>
                  <Text style={styles.name}>{votes}</Text>
                </View>
                <View style={styles.bottomInfo}>
                  <Text style={styles.location}>
                    {cats[0]?.url?.breeds?.origin}
                  </Text>
                </View>
              </View>
            ) : (
              <View style={styles.infoContainer}>
                <View style={styles.upInfo}>
                  <Text style={styles.name}>No Info</Text>
                </View>
              </View>
            )}
          </View>
        )}
        <View style={styles.buttonsWrapper}>
          <CustomButton icon="close" handler={onCatRemove} />
          <CustomButton handler={onAddFavorite} />
        </View>
      </View>
      <NavBar navigation={navigation} screen="Home" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    height: '90%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 40,
  },
  catContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  infoContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    position: 'absolute',
    bottom: 0,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  img: {
    borderRadius: 16,
    width: '90%',
    height: 446,
  },
  name: {
    fontWeight: 700,
    fontSize: 16,
    color: '#434141',
  },
  location: {
    fontWeight: 700,
    fontSize: 8,
    color: '#BFBFC0',
  },
  upInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 6,
  },
  bottomInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    width: '100%',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 154,
  },
});

export default Home;
