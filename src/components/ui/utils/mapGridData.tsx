import ApiConfig from '../../../api/config/ApiConfig';
import { API_OBJECT } from '../../../config/ApiBaseConfig';
import AchievementCard from '../../achievement/AchievementCard';
import GardenCard from '../../garden/GardenCard';
import ItemCard from '../../item/ItemCard';
import LevelCard from '../../level/LevelCard';
import MiniGameCard from '../../minigame/MiniGameCard';
import PlantListing from '../../plant/PlantListing';
import PuzzleCard from '../../puzzle/PuzzleCard';
import SurvivalCard from '../../survival/SurvivalCard';
import ZombieListing from '../../zombie/ZombieListing';

interface DataId {
  _id: string;
}

export const mapIndividualData = (
  apiObject: ApiConfig,
  data: unknown
): JSX.Element | null => {
  const key = (data as DataId)._id;

  switch (apiObject.name) {
    case API_OBJECT.ACHIEVEMENT:
      return <AchievementCard key={key} data={data} />;
    case API_OBJECT.GARDEN:
      return <GardenCard key={key} data={data} />;
    case API_OBJECT.ITEM:
      return <ItemCard key={key} data={data} />;
    case API_OBJECT.LEVEL:
      return <LevelCard key={key} data={data} />;
    case API_OBJECT.MINIGAME:
      return <MiniGameCard key={key} data={data} />;
    case API_OBJECT.PUZZLE:
      return <PuzzleCard key={key} data={data} />;
    case API_OBJECT.SURVIVAL:
      return <SurvivalCard key={key} data={data} />;
    default:
      return null;
  }
};

export const mapListData = (
  apiObject: ApiConfig,
  data: unknown[]
): JSX.Element | null => {
  switch (apiObject.name) {
    case API_OBJECT.PLANT:
      return <PlantListing data={data} />;
    case API_OBJECT.ZOMBIE:
      return <ZombieListing data={data} />;
    default:
      return null;
  }
};
