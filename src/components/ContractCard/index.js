import React from 'react';
import {
  View, Text, Pressable,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { contractCardFormattedData } from '../../utils';
import { styles } from '../../styles';

export default function ContractCard({ data }) {
  const {
    tenderTitle,
    publisher,
    contractId,
    publicationDate,
    winners,
    contracts,
    participants,
  } = contractCardFormattedData(data);

  const winnersText = winners === 1 ? `${winners} ganador` : `${winners} ganadores`;
  const contractsText = contracts === 1 ? `${contracts} contrato` : `${contracts} contratos`;
  const participantsText = participants === 1 ? `${participants} participante` : `${participants} participantes`;

  return (
    <Pressable className="relative flex w-full h-52 mb-8 rounded-xl" style={styles.shadow}>
      <View className="flex w-full h-full p-2 rounded-xl overflow-hidden bg-white dark:bg-slate-800">
        <Text className="font-bold text-lg text-black dark:text-white">{tenderTitle}</Text>

        {publisher && (
        <Text className="font-medium text-base mt-1 text-black dark:text-white">
          {publisher}
        </Text>
        )}

        {contractId && (
          <Text className="text-base mt-5 text-slate-500 dark:text-slate-400">
            {'Id de contrato\u00a0: '}
            {contractId}
          </Text>
        )}

        {publicationDate && (
          <Text className="text-base mt-1 mb-1 text-slate-500 dark:text-slate-400">
            {'Fecha de publicacion\u00a0: '}
            {publicationDate}
          </Text>
        )}

        <View className="flex flex-row gap-1">
          {winners && <Text className="text-base text-slate-500 dark:text-slate-400">{winnersText}</Text>}

          {/* Render separator */}
          {(winners && contracts) && <Text className="text-base text-slate-500 dark:text-slate-400">-</Text>}

          {contracts && <Text className="text-base text-slate-500 dark:text-slate-400">{contractsText}</Text>}

          {/* Render separator */}
          {(contracts && participants) && <Text className="text-base text-slate-500 dark:text-slate-400">-</Text>}

          {participants && <Text className="text-base text-slate-500 dark:text-slate-400">{participantsText}</Text>}
        </View>

        <View className="absolute flex justify-center items-center w-7 h-7 right-2 top-1/2 rounded-2xl bg-indigo-600">
          <Feather name="arrow-right" size={24} color="white" />
        </View>
      </View>
    </Pressable>

  );
}
