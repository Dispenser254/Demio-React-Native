import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";

const Welcome = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            className="w-[130px] h-[84px]"
            resizeMode="contain"
            source={images.logo}
          />

          <Image
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
            source={images.cards}
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              className="w-[136px] h-[15px] absolute -right-8 -bottom-2"
              resizeMode="contain"
              source={images.path}
            />
          </View>

          <Text className="text-sm text-gray-100 mt-7 font-pregular text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
