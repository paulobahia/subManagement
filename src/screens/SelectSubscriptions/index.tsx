
import { Add, Lamp, TickCircle } from 'iconsax-react-native';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, FlatList, ScrollView } from 'react-native';
import { signatureList } from '../../variables/signatures';

export default function SelectSub(props: any) {
    const { navigation } = props

    interface Item {
        id: number,
        title: string,
        src: string,
    }

    const [selectedItems, setSelectedItems] = useState<Item[]>([]);

    const handleSelectItem = (item: Item) => {
        const index = selectedItems.findIndex(selectedItem => selectedItem.id === item.id);
        if (index !== -1) {
            const newSelectedItems = [...selectedItems];
            newSelectedItems.splice(index, 1);
            setSelectedItems(newSelectedItems);
        } else {
            setSelectedItems([...selectedItems, { id: item.id, title: item.title, src: item.src }]);
        }
    }

    return (
        <View className="flex-1 justify-start py-12 bg-background">
            <View className='gap-y-3 mt-5 px-8 mb-16' >
                <Text className='text-start text-itens-dark font-black text-2xl'>
                    Gerencie todas as{'\n'}assinaturas de forma fácil
                </Text>
                < Text className='text-start text-itens-light font-normal text-base' >
                    Selecione as suas assinaturas ativas
                </Text>
            </View>
            <View className='border p-5 max-w-full mt-12'>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    directionalLockEnabled={true}
                    alwaysBounceVertical={false}
                >
                    <FlatList
                        contentContainerStyle={{ alignSelf: 'flex-start' }}
                        numColumns={Math.ceil(signatureList.length / 4)}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={signatureList}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity onPress={() => handleSelectItem(item)} className={`border border-itens-primary rounded-3xl mx-2 my-2 p-2 ${selectedItems.find((obj) => obj.id === item.id) && 'bg-itens-primary'}`}>
                                    <View className='flex-row items-center justify-between'>
                                        <View className='flex-row items-center gap-x-2'>
                                            <Image className='h-5 w-5' source={item?.src} />
                                            <Text className={`text-start font-normal text-sm ${selectedItems.find((obj) => obj.id === item.id) && 'text-white font-semibold'}`}>{item.title}</Text>
                                        </View>
                                        {selectedItems.find((obj) => obj.id === item.id) ? <TickCircle size="20" className='text-white ml-2' variant="Bold" /> : <Add size="20" className='text-itens-primary ml-2' />}
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </ScrollView>
            </View>
            <View className='px-8 flex-1 justify-end'>
                <TouchableOpacity disabled={selectedItems.length == 0} onPress={() => navigation.navigate('SelectSignatures', { signatures: selectedItems })} className={`w-full mb-5 p-4 ${selectedItems.length == 0 ? 'bg-itens-primary/50' : 'bg-itens-primary'} transition-all ease-in-out delay-200 rounded-xl`} >
                    <Text className='text-white text-xl font-bold text-center' >
                        Iniciar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className='text-itens-primary text-xl font-semibold text-center' >
                        Skip
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}