using {office as ofc} from '../db/building_data';



service officeservice{
    entity building1 as projection on ofc.building1;
    entity building2 as projection on ofc.buliding2;
}