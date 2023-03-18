import ApiConfig from "../api/config/ApiConfig";

export const API_OBJECT = {
    ACHIEVEMENT: 'achievement',
    GARDEN: 'garden',
    ITEM: 'item',
    LEVEL: 'level',
    MINIGAME: 'minigame',
    PLANT: 'plant',
    PUZZLE: 'puzzle',
    SURVIVAL: 'survival',
    ZOMBIE: 'zombie',
};

export const ROW_OPTIONS = [10,20,50,100];

export const API_BASE_CONFIG: ApiConfig[] = 
    Object.values(API_OBJECT)
        .map(config => ({
            name: config, 
            expanded: config === 'zombie', 
            queryKey: `${config}s`, 
            route: `/${config}s`
        }));