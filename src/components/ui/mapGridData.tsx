import ApiConfig from '../../api/config/ApiConfig';
import { API_OBJECT } from '../../config/ApiBaseConfig';
import AchievementCard from '../achievement/AchievementCard';
import GardenCard from '../garden/GardenCard';
import ItemCard from '../item/ItemCard';
import MiniGameCard from '../minigame/MiniGameCard';
import PuzzleCard from '../puzzle/PuzzleCard';

interface DataId {
  _id: string;
}

export const mapData = (apiObject: ApiConfig, data: unknown) => {
  const key = (data as DataId)._id;

  switch (apiObject.name) {
    case API_OBJECT.ACHIEVEMENT:
      return <AchievementCard key={key} data={data} />;
    case API_OBJECT.GARDEN:
      return <GardenCard key={key} data={data} />;
    case API_OBJECT.ITEM:
      return <ItemCard key={key} data={data} />;
    case API_OBJECT.MINIGAME:
      return <MiniGameCard key={key} data={data} />;
    case API_OBJECT.PUZZLE:
      return <PuzzleCard key={key} data={data} />;
    default:
      return undefined;
  }
};
