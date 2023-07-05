import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, FlatList,
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { Feather } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { styles } from '../../styles';
import { contractDetailsFormattedData } from '../../utils';

export default function ContractDetails({ route }) {
  const [activeSections, setActiveSections] = useState([]);
  const data = route?.params?.data;
  const { tenderTitle, accordionData, contractURL } = contractDetailsFormattedData(data);

  return (
    <View className={`${styles.page} flex items-center relative`}>
      <Tender title={tenderTitle} />
      <Accordion
        sections={accordionData}
        activeSections={activeSections}
        renderHeader={AccordionHeader}
        renderContent={AccordionContent}
        onChange={setActiveSections}
        touchableComponent={TouchableOpacity}
        containerStyle={{ width: '100%' }}
      />
      <ContractSourceLink url={contractURL} />
    </View>

  );
}

function Tender({ title }) {
  return (
    <View className={'"flex w-full justify-center pl-2 h-14'}>
      <Text className="font-semibold text-xl text-black dark:text-white">{title}</Text>
    </View>
  );
}

function AccordionHeader(section, _, isActive) {
  return (
    <View className={`"flex justify-center items-center w-full h-14 ${isActive ? 'bg-indigo-600' : 'bg-white dark:bg-slate-700'}`}>
      <Text className={`font-semibold text-2xl ${isActive ? 'text-white' : 'text-black dark:text-white'}`}>
        {section?.title}
      </Text>
    </View>
  );
}

function AccordionContent(section) {
  return (
    <View className="w-full h-52 bg-white dark:bg-slate-800">
      <WinnersSection data={section} />
      <ContractsSection data={section} />
      <ParticipantsSection data={section} />
    </View>
  );
}

function WinnersSection({ data }) {
  const isWinnersSection = data?.title === 'Ganadores';
  const winners = data?.winners;

  return (
    <>
      {
      (isWinnersSection && winners?.length) ? (
        <FlatList
          data={winners}
          className="flex w-full h-full"
          ListFooterComponent={renderFooter}
          renderItem={({ item }) => (
            <View className="flex w-[95%] min-h-32 justify-center ml-2 mt-4 mb-1 p-2 rounded-xl bg-white dark:bg-slate-700" key={item?.title} style={styles.paginationButtonShadow}>
              <View className="flex flex-row">
                <Text className={styles.accordionText}>{'Titulo\u00a0: '}</Text>
                <Text className={styles.accordionText}>{item?.title}</Text>
              </View>
              <View className="flex flex-row mt-1">
                <Text className={styles.accordionText}>{'Nombre\u00a0: '}</Text>
                <Text className={styles.accordionText}>{item?.name}</Text>
              </View>
              <View className="flex flex-row mt-1">
                <Text className={styles.accordionText}>{'Monto\u00a0: '}</Text>
                <Text className={styles.accordionText}>{item?.amount}</Text>
              </View>
              <View className="flex flex-row mt-1">
                <Text className={styles.accordionText}>{'Vigencia\u00a0: '}</Text>
                <Text className={styles.accordionText}>{item?.contractPeriod}</Text>
              </View>
            </View>
          )}
        />
      ) : null
    }
    </>

  );
}

function ContractsSection({ data }) {
  const isContractsSection = data?.title === 'Contratos';
  const contracts = data?.contracts;

  return (
    <>
      {
      (isContractsSection && contracts?.length) ? (
        <FlatList
          data={contracts}
          className="flex w-full h-full"
          ListFooterComponent={renderFooter}
          renderItem={({ item }) => (
            <View className="flex w-[95%] min-h-28 ml-2 mt-4 mb-2 p-2 justify-center rounded-xl bg-white dark:bg-slate-700" key={item?.title} style={styles.paginationButtonShadow}>
              <View className="flex flex-row">
                <Text className={styles.accordionText}>{'Titulo\u00a0: '}</Text>
                <Text className={styles.accordionText}>{item?.title}</Text>
              </View>
              <View className="flex flex-row mt-1">
                <Text className={styles.accordionText}>{'Proveedor\u00a0: '}</Text>
                <Text className={styles.accordionText}>{item?.supplier}</Text>
              </View>
              <View className="flex flex-row mt-1">
                <Text className={styles.accordionText}>{'Comprador\u00a0: '}</Text>
                <Text className={styles.accordionText}>{item?.buyer}</Text>
              </View>
            </View>
          )}
        />
      ) : null
    }
    </>

  );
}

function ParticipantsSection({ data }) {
  const isParticipantsSection = data?.title === 'Participantes';
  const participants = data?.participants;

  return (
    <>
      {
      (isParticipantsSection && participants?.length) ? (
        <FlatList
          data={participants}
          className="flex w-full h-full"
          ListFooterComponent={renderFooter}
          renderItem={({ item }) => (
            <View className="flex w-[95%] min-h-14 justify-center ml-2 mt-4 mb-1 p-2 rounded-xl bg-white dark:bg-slate-700" key={item?.title} style={styles.paginationButtonShadow}>
              <View className="flex flex-row">
                <Text className={styles.accordionText}>{'Nombre\u00a0: '}</Text>
                <Text className={styles.accordionText}>{item?.name}</Text>
              </View>
            </View>
          )}
        />
      ) : null
    }
    </>

  );
}

function ContractSourceLink({ url }) {
  return url ? (
    <TouchableOpacity
      onPress={() => Linking.openURL(url)}
      className="absolute flex flex-row top-[65%] justify-center items-center "
    >
      <Text className="font-medium text-lg underline mr-2 text-indigo-600">Fuente</Text>
      <Feather name="external-link" size={24} color="#4F46E5" />
    </TouchableOpacity>
  ) : null;
}

function renderFooter() {
  return (
    <View className="w-full h-4 bg-transparent" />
  );
}
