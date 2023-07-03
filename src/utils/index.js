import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const DEFAULT_TENDER = 'LICITACION DESCONOCIDA';

export const contractCardFormattedData = (data) => {
  const tenderTitle = `${data?.releases[0]?.tender?.title || DEFAULT_TENDER} # ${data?.releases[0]?.tender?.id}`;
  const publisher = data?.releases[0]?.publisher?.name;
  const contractId = data?.releases[0]?.ocid;
  const publicationDate = format(new Date(data?.releases[0]?.date), 'PPP', { locale: es });
  const winners = data?.releases[0]?.winners?.length;
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