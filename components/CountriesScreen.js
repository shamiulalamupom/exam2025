import React, { useState } from "react";
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
  Button,
} from "react-native";
import countries from "../data/countries";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CountriesScreen = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleBack = () => {
    setSelectedCountry(null);
  };

  if (selectedCountry) {
    return (
      <View>
        <TouchableOpacity onPress={handleBack}>
          <Icon name="keyboard-backspace" size={35} />
        </TouchableOpacity>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={{ uri: selectedCountry.flag }}
            style={{ width: 300, height: 200, resizeMode: "contain" }}
          />
          <Text style={{ fontSize: 20, marginTop: 10, fontWeight: "bold" }}>
            {selectedCountry.name}
          </Text>
          <Text style={{ fontSize: 15, marginTop: 10 }}>
            {`Population: ${selectedCountry.population}`}
          </Text>
          <Text style={{ fontSize: 10, marginTop: 10 }}>
            {selectedCountry.description}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <ScrollView>
        {countries.map((country, index) => (
          <View
            key={index}
            style={{
              marginBottom: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => setSelectedCountry(country)}>
              <Image
                source={{ uri: country.flag }}
                style={{
                  width: 500,
                  height: 400,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CountriesScreen;
