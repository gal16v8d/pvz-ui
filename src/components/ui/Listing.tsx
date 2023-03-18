import { Box } from '@mui/material';
import { FC } from 'react';
import ApiConfig from '../../api/config/ApiConfig';
import { get } from '../../api/services/CrudService';
import { useGet } from '../../api/services/hooks/useGenericService';
import { mapData } from './mapGridData';

interface ListingProps {
  apiObject: ApiConfig;
}

const Listing: FC<ListingProps> = ({ apiObject }) => {
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

  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: `repeat(${apiObject.gridColumns}, 1fr)`,
        }}
      >
        {data?.map((d) => mapData(apiObject, d))}
      </Box>
    </div>
  );
};

export default Listing;
