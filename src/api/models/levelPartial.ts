/**
 * pvz-service
 * Plants vs Zombies Info API
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AdventureRef } from "./adventureRef";

export interface LevelPartial {
  level?: string;
  unlock?: Array<string>;
  ref?: AdventureRef;
  is_minigame?: boolean;
}
