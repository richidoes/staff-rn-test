import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export const DEFAULT_TENDER = 'LICITACION DESCONOCIDA';

export const formatDates = (date) => format(new Date(date), 'PPP', { locale: es });

export const contractCardFormattedData = (data) => {
  const tenderTitle = `${data?.releases[0]?.tender?.title || DEFAULT_TENDER} # ${data?.releases[0]?.tender?.id}`;
  const publisher = data?.releases[0]?.publisher?.name;
  const contractId = data?.releases[0]?.ocid;
  const publicationDate = formatDates(data?.releases[0]?.date);
  const winners = data?.releases[0]?.awards?.length;
  const contracts = data?.releases[0]?.contracts?.length;
  const participants = data?.releases[0]?.parties?.length;

  return {
    tenderTitle,
    publisher,
    contractId,
    publicationDate,
    winners,
    contracts,
    participants,
  };
};

export const contractDetailsFormattedData = (data) => {
  const tenderTitle = `${data?.releases[0]?.tender?.title || DEFAULT_TENDER} # ${data?.releases[0]?.tender?.id}`;
  const winners = getWinnersData(data?.releases[0]?.awards);
  const contracts = getContractData(data?.releases[0]?.contracts);
  const participants = getParticipantsData(data?.releases[0]?.parties);
  const contractURL = data?.compiledRelease?.planning?.budget?.budgetBreakdown[0]?.url;

  const accordionData = [
    {
      title: 'Ganadores',
      winners,
    }, {
      title: 'Contratos',
      contracts,
    },
    {
      title: 'Participantes',
      participants,
    },
  ];

  return {
    tenderTitle,
    accordionData,
    contractURL,
  };
};

export const getWinnersData = (data) => {
  if (!data?.length) {
    return [];
  }

  return data?.map((winner) => ({
    title: winner?.title,
    name: winner?.suppliers[0]?.name,
    amount: `$${winner?.value?.amount} ${winner?.value?.currency}`,
    contractPeriod: `${formatDates(winner?.contractPeriod?.startDate)} / ${formatDates(winner?.contractPeriod?.endDate)}`,
  }));
};

export const getContractData = (data) => {
  if (!data?.length) {
    return [];
  }

  return data?.map((contract) => ({
    title: contract?.title,
    supplier: contract.suppliers[0]?.name,
    buyer: contract.buyers[0]?.name,
  }));
};

export const getParticipantsData = (data) => {
  if (!data?.length) {
    return [];
  }

  return data?.map((participant) => ({
    name: participant?.name,
  }));
};

export const createPagesCount = () => {
  const pages = [];
  /**
   * Setting only 50 pages as per now.
   * Lots of data exist on db,
   * so for demo purposes
   * we will display only 50 pages
 */
  const maxPages = 50;

  for (let page = 1; page <= maxPages; page++) {
    pages.push(page);
  }

  return { pages, maxPages };
};
