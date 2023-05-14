import ApiConfig from '@/api/config/ApiConfig';
import { get } from '@/api/services/CrudService';
import { useGet } from '@/api/services/hooks/useGenericService';
import { CircularProgress } from '@mui/material';
import { FC } from 'react';
import GridWrapper from './GridWrapper';
import { mapIndividualData, mapListData } from './utils/mapGridData';

interface ListingProps {
  apiObject: ApiConfig;
}

const Listing: FC<ListingProps> = ({ apiObject }): React.ReactElement => {
  const { data } = useGet(
    apiObject.queryKey,
    get,
    `/api/${apiObject.route}`,
    false,
    {
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  if (!data) {
    return <CircularProgress />;
  }

  return (
    <GridWrapper
      gridColumns={apiObject.gridColumns}
      child={
        <>
          {data?.map((d) => mapIndividualData(apiObject, d))}
          {mapListData(apiObject, data ?? [])}
        </>
      }
    />
  );
};

export default Listing;
