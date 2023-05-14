
import React, { PropsWithChildren } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function Welcome(props: any) {
    const { navigation } = props
    return (
        <View className="flex-1 items-center justify-end py-12 px-8 gap-y-36 bg-background">
            <View className='flex-row justify-center items-center'>
                <View className='bg-white shadow-xl shadow-black/40 w-24 h-24 flex items-center justify-center rounded-full z-30 absolute left-14'><Image className='h-14 w-14' source={require('../../assets/icons/crunchyroll.png')} /></View>
                <View className='bg-white shadow-xl shadow-black/40 w-24 h-24 flex items-center justify-center rounded-full z-40 absolute left-1'><Image className='h-12 w-12' source={require('../../assets/icons/youtube.png')} /></View>
                <View className='bg-white shadow-xl shadow-black/40 w-24 h-24 flex items-center justify-center rounded-full z-50 absolute'><Image className='h-16 w-16' source={require('../../assets/icons/netflix.png')} /></View>
                <View className='bg-white shadow-xl shadow-black/40 w-24 h-24 flex items-center justify-center rounded-full z-30 absolute right-14'><Image className='h-20 w-20' source={require('../../assets/icons/notion.png')} /></View>
                <View className='bg-white shadow-xl shadow-black/40 w-24 h-24 flex items-center justify-center rounded-full z-40 absolute right-1'><Image className='h-14 w-14' source={require('../../assets/icons/spotify.png')} /></View>
            </View>
            <View className='gap-y-7' >
                <Text className='text-center text-itens-dark font-black text-2xl'>
                    Gerencie todas as {'\n'}suas assinaturas em um {'\n'}só lugar
                </Text>
                < Text className='text-center text-itens-light font-normal text-base' >
                    Mantenha as despesas{'\n'}recorrentes à mão e receba{'\n'}notificações próximo as datas
                </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('SelectSubscriptions')} className='w-full p-3 bg-itens-primary rounded-xl' >
                <Text className='text-white text-xl font-bold text-center' >
                    Iniciar
                </Text>
            </TouchableOpacity>
        </View>
    )
}