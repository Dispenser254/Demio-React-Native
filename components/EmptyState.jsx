import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="flex justify-center items-center px-4">
      <Image
        className="w-[270px] h-[216px]"
        resizeMode="contain"
        source={images.empty}
      />

      <Text className="text-sm font-pmedium text-gray-100">{title}</Text>
      <Text className="text-xl font-psemibold text-center text-white mt-2">
        {subtitle}
      </Text>

      <CustomButton
        title="Back To Explore"
        containerStyles="w-full my-5"
        handlePress={() => router.push("/home")}
      />
    </View>
  );
};

export default EmptyState;
