
import { Add, Lamp, TickCircle } from 'iconsax-react-native';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, FlatList, ScrollView } from 'react-native';

export default function SelectSig(props: any) {
    const { signatures } = props.route.params
    const [openCard, setOpenCard] = useState('')

    const handlerCardSignature = (item: string) => {
        if (openCard == '') {
            setOpenCard(item)
        }
        else if (openCard != '' && openCard != item) {
            setOpenCard(item)
        }
        else {
            setOpenCard('')
        }
    }

    return (
        <>
            <View className='flex-1 py-12 px-5 bg-background'>
                <View className="justify-start gap-y-5 flex-1 flex">
                    <Text className='text-center text-itens-dark font-black text-2xl'>
                        Minhas Assinaturas
                    </Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={signatures}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity onPress={() => handlerCardSignature(item.id)} className={`mb-5 border p-4 flex ${openCard == item.id && 'bg-itens-primary h-52 items-start border-itens-primary'} justify-between rounded-tr-3xl transition-all ease-in-out delay-200 rounded-bl-3xl`}>
                                    <View className='flex flex-row justify-between items-center w-full'>
                                        <View className='flex flex-row gap-x-3'>
                                            <View className={`bg-itens-primary/20 ${openCard == item.id && 'bg-itens-light/40'} rounded-md p-1.5`}>
                                                <Image className='h-8 w-8' source={item?.src} />
                                            </View>
                                            <View className='flex'>
                                                <Text className={` ${openCard == item.id && 'text-background'} font-semibold text-base`}>
                                                    {item.title}
                                                </Text>
                                                <Text className={`${openCard == item.id && 'text-background/60'} text-itens-light font-normal text-xs`}>
                                                    Não informado
                                                </Text>
                                            </View>
                                        </View>
                                        <View className='flex items-end'>
                                            <Text className={`${openCard == item.id && 'text-background'} font-semibold text-base`}>
                                                R$ 00.00
                                            </Text>
                                            <Text className='text-itens-light font-normal text-xs'>
                                                {/* Não informado */}
                                            </Text>
                                        </View>
                                    </View>
                                    {openCard == item.id &&
                                        (
                                            <View className='flex-1 flex justify-center gap-y-4 w-full'>
                                                <View className='flex flex-row justify-between items-center'>
                                                    <Text className='text-background/60 font-medium text-sm'>Forma de Pagamento</Text>
                                                    <Text className='text-background font-medium text-sm'>5436</Text>
                                                    <TouchableOpacity className='border border-white py-1 px-3 rounded-full'>
                                                        <Text className='text-background text-xs'>Configurar</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View className='flex flex-row justify-between items-center'>
                                                    <Text className='text-background/60 font-medium text-sm'>Informações do plano</Text>
                                                    <Text className='text-background font-bold text-sm'>Premium</Text>
                                                    <TouchableOpacity className='border border-white py-1 px-3 rounded-full'>
                                                        <Text className='text-background text-xs'>Selecionar</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        )
                                    }
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
                <View className="justify-end flex">
                    <TouchableOpacity className='w-full h-14 justify-end p-3 bg-itens-primary rounded-xl' >
                        <Text className='text-white text-xl font-bold text-center' >
                            Finalizar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}