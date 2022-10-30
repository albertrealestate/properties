import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service'
import { Propriete } from '../Interface/propriete'

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  isFrench = 1; // true --> french ; false --> english
  louer : Array<any> = [];
  vendre : Array<any> = [];
  VENDRE_HAS_BEEN_FETCHED = false
  LOUER_HAS_BEEN_FETCHED = false

  constructor(private firebaseService : FirebaseService) {
    
    //louer
    this.firebaseService.getPropriete(false).then((data) => {
      if(!this.LOUER_HAS_BEEN_FETCHED){
        this.LOUER_HAS_BEEN_FETCHED = true
        data.forEach(doc => {
        let temp : Propriete = <Propriete>{...doc.data(), id : doc.id};

        temp["prix"] = Number(temp["prix"]).toLocaleString("en") + ' / month + GST ​​/ QST';

        const liste_string_object = ["sellType"]
        
        liste_string_object.forEach(element => {
          if(temp[element]){
            if(temp[element] instanceof Object){
              temp[element] = [temp[element]["english"], temp[element]["french"]];
            }else if(typeof(temp[element]) === "string"){
              temp[element] =  [temp[element],temp[element]];
            }
          }
        });

        // Description : {"english" : [], "french" : []}
        temp["Description"] = [temp["Description"]["english"], temp["Description"]["french"]];


        // Dimensions + carac : {"english" : {}, "french" : {}}
        const list_tags = ["Dimensions", "carac"];
        const languages = ["english", "french"]
        list_tags.forEach(attribut => {
          let temp1 = [];
          if(temp[attribut]){
            languages.forEach(language => {
              let keys = Object.keys(temp[attribut][language]);
              let temp2 = [];
              keys.forEach(key => {
                temp2.push([key, temp[attribut][language][key]])
              });
              temp1.push(temp2);

            });
            temp[attribut] = temp1;
          }
          
        });
        this.louer.push(temp);

        });
      }
      
      
    });
  

    //vendre
    
    this.firebaseService.getPropriete(true).then((data) => {
      if(!this.VENDRE_HAS_BEEN_FETCHED){
        this.VENDRE_HAS_BEEN_FETCHED = true
        data.forEach(doc => {
        let temp : Propriete = <Propriete>{...doc.data(), id : doc.id};
        
        temp["prix"] = Number(temp["prix"]).toLocaleString("en")

        const liste_string_object = ["sellType"]

        liste_string_object.forEach(element => {
          if(temp[element]){
            if(temp[element] instanceof Object){
              
              temp[element] = [temp[element]["english"], temp[element]["french"]];
            }else if(typeof(temp[element]) === "string"){
              temp[element] =  [temp[element],temp[element]];
            }
          }
          
        });

        // Description : {"english" : [], "french" : []}
        if(temp["Description"]){
          temp["Description"] = [temp["Description"]["english"], temp["Description"]["french"]];
        }
        

        // Dimensions + carac : {"english" : {}, "french" : {}}
        const list_tags = ["Dimensions", "carac"];
        const languages = ["english", "french"]
        list_tags.forEach(attribut => {
          let temp1 = [];
          
          if(temp[attribut]){
            languages.forEach(language => {
              let keys = Object.keys(temp[attribut][language]);
              let temp2 = [];
              keys.forEach(key => {
                temp2.push([key, temp[attribut][language][key]])
              });
              temp1.push(temp2);

            });
            temp[attribut] = temp1;
          }
          
        });

        this.vendre.push(temp);
        console.log("wow from properties")

      });
      }
      
      
    });
    

    
    //this.genLouer()
    //this.genVendre()


    console.log(this.louer)

  }

  updateLouer() : Promise<boolean>{
    return new Promise((resolve) => {
      this.firebaseService.getPropriete(false).then((data) => {
        if(!this.LOUER_HAS_BEEN_FETCHED){
          this.LOUER_HAS_BEEN_FETCHED = true
          data.forEach(doc => {
          let temp : Propriete = <Propriete>{...doc.data(), id : doc.id};
  
          temp["prix"] = Number(temp["prix"]).toLocaleString("en") + ' / month + GST ​​/ QST';
  
          const liste_string_object = ["sellType"]
          
          liste_string_object.forEach(element => {
            if(temp[element]){
              if(temp[element] instanceof Object){
                temp[element] = [temp[element]["english"], temp[element]["french"]];
              }else if(typeof(temp[element]) === "string"){
                temp[element] =  [temp[element],temp[element]];
              }
            }
          });
  
          // Description : {"english" : [], "french" : []}
          temp["Description"] = [temp["Description"]["english"], temp["Description"]["french"]];
  
  
          // Dimensions + carac : {"english" : {}, "french" : {}}
          const list_tags = ["Dimensions", "carac"];
          const languages = ["english", "french"]
          list_tags.forEach(attribut => {
            let temp1 = [];
            if(temp[attribut]){
              languages.forEach(language => {
                let keys = Object.keys(temp[attribut][language]);
                let temp2 = [];
                keys.forEach(key => {
                  temp2.push([key, temp[attribut][language][key]])
                });
                temp1.push(temp2);
  
              });
              temp[attribut] = temp1;
            }
            
          });
          this.louer.push(temp);
          
        });
        }

        resolve(true);
      });
      
      
    })
  }

  updateVendre() : Promise<boolean>{
    return new Promise((resolve) => {
      //vendre
      this.firebaseService.getPropriete(true).then((data) => {
        if(!this.VENDRE_HAS_BEEN_FETCHED){
          this.VENDRE_HAS_BEEN_FETCHED = true
          data.forEach(doc => {
          let temp : Propriete = <Propriete>{...doc.data(), id : doc.id};
          
          temp["prix"] = Number(temp["prix"]).toLocaleString("en")

          const liste_string_object = ["sellType"]

          liste_string_object.forEach(element => {
            if(temp[element]){
              if(temp[element] instanceof Object){
                
                temp[element] = [temp[element]["english"], temp[element]["french"]];
              }else if(typeof(temp[element]) === "string"){
                temp[element] =  [temp[element],temp[element]];
              }
            }
            
          });

          // Description : {"english" : [], "french" : []}
          if(temp["Description"]){
            temp["Description"] = [temp["Description"]["english"], temp["Description"]["french"]];
          }
          

          // Dimensions + carac : {"english" : {}, "french" : {}}
          const list_tags = ["Dimensions", "carac"];
          const languages = ["english", "french"]
          list_tags.forEach(attribut => {
            let temp1 = [];
            
            if(temp[attribut]){
              languages.forEach(language => {
                let keys = Object.keys(temp[attribut][language]);
                let temp2 = [];
                keys.forEach(key => {
                  temp2.push([key, temp[attribut][language][key]])
                });
                temp1.push(temp2);

              });
              temp[attribut] = temp1;
            }
            
          });

          this.vendre.push(temp);
          console.log("wow from properties")

        });
        }
        
        resolve(true);
      });
      
      
    })
  }


  genLouer(){
    
  let louer = [
    {
      'id': 3,
      'title': ['Marie-Victorin', 'Marie-Victorin'],
      'sellType': ['Édifice commercial', 'Commercial building'],
      'adress': ['336B Route Marie-Victorin', '336B Route Marie-Victorin'],
      'city': 'Saint-Pierre-Les-Becquets, G0X 2Z0',
      'urlMap': 'https://goo.gl/maps/dxRb8PhJ2k7n7PjS7',
      'prix': 3300,
      'nbPiedsCarre': "28492.3",
      'AConstruction': 1957,
      'EvalMuni': '290 700 $',
      'mls': 12532040,
      'urlRealtor': 'https://www.realtor.ca/immobilier/22079784/336-342-route-marie-victorin-saint-pierre-les-becquets',
      'size': 11,
      'url': 'assets/les_bequets/',
      'Description': [["Location d'une bâtisse commercial. Grand centre camion avec 4 garages / ateliers mécaniques avec réception, bureau et entreposage. Située au coeur du village de St-Pierre-les-Becquets. ", "Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"], ['Rental of a commercial building. Large truck center with 4 garages / mechanical workshops with reception, office and storage. Located in the heart of the village of St-Pierre-les-Becquets. ', " Sale without legal warranty of quality, at the buyer's risk and peril "]],
      'Dimensions': [[['Terrain superficie', '2646.8 PC']], [['Land area', '2646.8 SF ']]],
      'carac': [[['Fondation', 'Béton coulé'], ['Sous-sol', 'Aucun'], ['Zonage', 'Commercial'], ['Énergie pour le chauffage', 'Électricité'], ['Approvisionnement en eau', 'Municipalité'], ["Système d'égouts", 'Municipalité']], [[' Foundation ', ' Poured concrete '], [' Basement ', ' None '], [' Zoning ', ' Commercial '], [' Heating energy ', 'Electricity'], ['Water supply', 'Municipality'], ['Sewage system', 'Municipality']]]
    }, {
      'id': 4,
      'title': ['Marie-Victorin', 'Marie-Victorin'],
      'sellType': ['Édifice commercial', 'Commercial building'],
      'adress': ['336A - 342 Route Marie-Victorin', '336A - 342 Route Marie-Victorin'],
      'city': 'Saint-Pierre-Les-Becquets, G0X 2Z0',
      'urlMap': 'https://goo.gl/maps/dxRb8PhJ2k7n7PjS7',
      'prix': 3750,
      'nbPiedsCarre': 28492.3,
      'AConstruction': 1957,
      'EvalMuni': '290 700 $',
      'mls': 12532040,
      'urlRealtor': 'https://www.realtor.ca/immobilier/22079784/336-342-route-marie-victorin-saint-pierre-les-becquets',
      'size': 33,
      'url': 'assets/les_bequets_housing/',
      'Description': [["Location d'une bâtisse com6031c587719e9cdd02d6af948e7a716c322f3d55ercial, grand centre du camion avec 4 garages/ateliers mécaniques avec réception, bureau et entreposage. Située au coeur du village de St-Pierre-les-Becquets. ", "Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"], ['Rental of a building com6031c587719e9cdd02d6af948e7a716c322f3d55ercial, large truck center with 4 garages / mechanical workshops with reception, office and storage. Located in the heart of the village of St-Pierre-les-Becquets. ', " Sale without legal warranty of quality, at the buyer's own risk "]],
      'Dimensions': [[['Terrain superficie', '2646.8 PC']], [['Land area', '2646.8 SF']]],
      'carac': [[['Fondation', 'Béton coulé'], ['Sous-sol', 'Aucun'], ['Zonage', 'Commercial'], ['Énergie pour le chauffage', 'Électricité'], ['Approvisionnement en eau', 'Municipalité'], ["Système d'égouts", 'Municipalité']], [['Foundation', 'Poured concrete'], ['Basement', 'None'], ['Zoning', 'Commercial'], ['Energy for heating ', ' Electricity '], [' Water supply ', ' Municipality '], ['Sewage system', ' Municipality ']]]
    }
  ]

  louer.forEach(propr => {
    this.saveInfo(propr, false);
  });

  }





  genVendre(){
    let vendre = [
    {
      'id': "18",
      'title': ['Saint-Pierre-Les-Becquets', 'Saint-Pierre-Les-Becquets'],
      'sellType': ['Édifice commercial', 'Commercial building'],
      'adress': ['336 - 342 Route Marie-Victorin', '336 - 342 Route Marie-Victorin'],
      'city': 'Saint-Pierre-Les-Becquets, G0X 2Z0',
      'urlMap': 'https://goo.gl/maps/X2iEDzNTFaniTPET6',
      'prix': 347500,
      'nbPiedsCarre': 28492.3,
      'EvalMuni': '290 700 $',
      'mls': 12532040,
      'urlRealtor': 'https://www.realtor.ca/immobilier/22079784/336-342-route-marie-victorin-saint-pierre-les-becquets',
      'size': 33,
      'url': 'assets/les_bequets_housing/',
      'Description': [["Location d'une bâtisse commercial, grand centre du camion avec 4 garages/ateliers mécaniques avec réception, bureau et entreposage. Située au coeur du village de St-Pierre-les-Becquets. ", "Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"], ['Rental of a commercial building, large truck center with 4 garages / mechanical workshops with reception, office and storage. Located in the heart of the village of St-Pierre-les-Becquets. ', " Sale without legal warranty of quality, at the buyer's own risk "]],
      'Dimensions': [[['Terrain superficie', '2646.8 PC']], [['Land area', '2646.8 SF']]],
      'carac': [[['Fondation', 'Béton coulé'], ['Sous-sol', 'Aucun'], ['Zonage', 'Commercial'], ['Énergie pour le chauffage', 'Électricité'], ['Approvisionnement en eau', 'Municipalité'], ["Système d'égouts", 'Municipalité']], [['Foundation', 'Poured concrete'], ['Basement', 'None'], ['Zoning', 'Commercial'], ['Energy for heating ', ' Electricity '], [' Water supply ', ' Municipality '], ['Sewage system', ' Municipality ']]]
    },  {
      'id': "7",
      'title': ['Les-Becquets', 'Les-Becquets'],
      'sellType': ['Terrain vacant', ' Vacant lot '],
      'adress': ['1 Route Marie-Victorin', ' 1 Route Marie-Victorin '],
      'nbPiedsCarre': 11247.3,
      'city': "Saint-Pierre-Les-Becquets, G0X 2Z0",
      'urlMap': "https://goo.gl/maps/cbacnPPDr3ZEE9JA7",
      'prix': 24000,
      'mls': 9682434,
      'urlRealtor': "https://www.realtor.ca/immobilier/22078461/route-marie-victorin-saint-pierre-les-becquets",
      'size': 3,
      'url': "assets/marie-victorin/",
      'Description': [['Terrain asphalté. Peut être vendu avec le centre du camion (voir MLS)', "Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"], [' Asphalted lot. Can be sold with the center of the truck (see MLS) ', "Sale without legal warranty of quality, at the buyer's risk"]],
      'carac': [[['Zonage', 'Commercial'], ['Approvisionnement en eau', 'Aucun'], ["Système d'égouts", 'Aucun']], [[' Zoning ', ' Commercial '], [' Water supply ', 'None'], ['Sewage system', 'None']]]
    }, {
      'id': "8",
      'title': ['Montcalm', 'Montcalm'],
      'sellType': ['Maison à étages', 'Two or more storey'],
      'adress': ['88 - 90 Rue Principale', '88 - 90 Rue Principale '],
      'city': "Montcalm (Laurentides), J0T2V0",
      'urlMap': "https://goo.gl/maps/sLQ1AgZtQMZ8PKUb7",
      'prix': 90000,
      'nbChambre': 5,
      'nbSalleBain': 2,
      'nbPiedsCarre': 64039.8,
      'AConstruction': 1925,
      'EvalMuni': "115 200 $",
      'mls': 23562010,
      'urlRealtor': "https://www.realtor.ca/immobilier/20880041/3-chambre-unifamiliale-unifamilial-88-90-rue-principale-montcalm",
      'size': 8,
      'url': "assets/montcalm/",
      'Description': [['À qui la chance !Maison unifamiliale ou Duplex en plein coeur du village de Montcalm avec un accès direct à la piste cyclable du Corridor Aérobic, 58 km de piste.Zonage résidentiel et commercial. Rénovations à prévoir', 'Inclus : aucunes', 'Exclus : aucunes', "Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"], [" Who's lucky! Single-family house or Duplex in the heart of the village of Montcalm with direct access to the track cycle of the Aerobic Corridor, 58 km of track. Residential and commercial zoning. Renovations to be planned ", ' Included: none ', ' Excluded: none ', "Sale without legal warranty of quality, at the buyer's risk and peril"]],
      'Dimensions': [[['Terrain dim.', '50x119 P'], ['Terrain dim.', 'Irrégulier'], ['Batisse dim.', '29x46 P'], ['Batisse dim.', 'Irrégulier']], [[' Land dim. ', ' 50x119 P '], ['Sun field', 'Irregular'], ['Sun building', '29x46 P'], ['Sun building', 'Irregular']]],
      'carac': [[['Mode de chauffage', 'Plinthes électriques'], ['Approvisionnement en eau', 'Puits artésien'], ['Énergie pour le chauffage', 'Électricité'], ['Fondation', 'Bloc de béton'], ['Particularités', 'Coin de rue'], ['Proximité', 'Piste cyclable, Ski de fond'], ['Sous-sol', 'Vide sanitaire'], ["Système d'égouts", 'puits absorbant, Fosse septique'], ['Toiture', "Bardeaux d'asphalte"], ['Topographie', 'Plat'], ['Zonage', 'Commercial, Résidentiel']], [['Heating mode', 'Electric baseboards'], ['Water supply', 'Artesian well'], ['Heating energy', 'Electricity'], ['Foundation', 'Concrete block'], ['Special features', ' Corner street '], [' Proximity ', ' Bicycle path, Cross-country skiing '], [' Basement ', ' Crawl space '], ['Sewage system', ' absorbent well, Septic tank '], ['Roofing', 'Asphalt shingles'], ['Topography', 'Flat'], ['Zoning', 'Commercial, Residential']]]
    }, {
      'id': "9",
      'title': ['Terrain Bequets', 'Terrain Bequets'],
      'sellType': ['Terrain commercial', ' Commercial land '],
      'adress': ['1 Rue Du Centre', ' 1 Rue Du Center '],
      'city': "Saint-Pierre-Les-Becquets, G0X 2Z0",
      'urlMap': "https://goo.gl/maps/7vGdwBPaeyeMfr9u5",
      'prix': 29000,
      'nbPiedsCarre': 78656.0,
      'EvalMuni': "30 500 $",
      'mls': 27737440,
      'urlRealtor': "https://www.realtor.ca/immobilier/22079945/rue-du-centre-saint-pierre-les-becquets",
      'size': 5,
      'url': "assets/terrain_bequets/",
      'Description': [["Terrain asphalté idéal pour entretien d'équipement ou stationnement. Situé au coeur de St-Pierre les Becquets.", "Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"], ['Asphalted land ideal for maintenance of equipment or parking. Located in the heart of St-Pierre les Becquets.', " Sale without legal warranty of quality, at the buyer's risk and peril "]],
      'Dimensions': [[['Terrain superficie', '7 307,5 M2']], [['Land area', '7,307.5 M2']]],
      'carac': [[['Terrain', 'Asphalté'], ['Topographie', 'Plat'], ['Zonage', 'Commercial'], ['Approvisionnement en eau', 'Aucun'], ["Système d'égouts", 'Aucun']], [['Land', 'Asphalt'], ['Topography', 'Flat'], ['Zoning', 'Commercial'], ['Water supply', 'None'], ['Sewage system', 'None']]]
    }, {
      'id': "10",
      'title': ["Saint-Adolphe-d'Howard", "Saint-Adolphe-d'Howard"],
      'sellType': ['Terrain vacant', 'Vacant lot'],
      'adress': ['18e Avenue', '18th Avenue'],
      'city': "Saint-Adolphe-d'Howard (Laurentides), J0T2B0",
      'urlMap': "https://maps.google.com?q=%2018e%20Avenue%20J0T2B0",
      'prix': 10000,
      'nbPiedsCarre': 16833.3,
      'EvalMuni': "10 800 $",
      'mls': 12097798,
      'urlRealtor': "https://www.realtor.ca/immobilier/20891425/terrain-vague-18e-avenue-saint-adolphe-dhoward",
      'size': 1,
      'url': "assets/Saint-Adolphe-d'Howard/",
      'Description': [["Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"], ["Sale without legal warranty of quality, at the buyer's risk"]],
      'Dimensions': [[['Terrain superficie', '16833.3 PC'], ['Terrain dim.', '45.97x35.05 M'], ['Terrain dim.', 'Irrégulier']], [[' Land area ', ' 16833.3 SF '], [' Sun field ', '45 .97x35.05 M'], ['Sun field', 'Irregular']]],
      'carac': [[['Approvisionnement en eau', 'Aucun'], ["Système d'égouts", 'Aucun'], ['Zonage', 'Résidentiel']], [['Water supply', 'None'], ['Sewage system', 'None'], ['Zoning', 'Residential']]]
    }, {
      'id': "11",
      'title': ['Héritage', 'Heritage'],
      'sellType': ['Terrain vacant', 'Vacant land'],
      'adress': ["Ch. de l'Héritage", "Ch. De l'Héritage"],
      'city': "Saint-Adolphe-d'Howard (Laurentides), J0T2B0",
      'urlMap': "https://maps.google.com?q=%20Ch%2E%20de%20l%27H%C3%A9ritage%20J0T2B0",
      'prix': 18000,
      'nbPiedsCarre': 59002.8,
      'EvalMuni': "18 000 $",
      'mls': 11274386,
      'urlRealtor': "https://www.realtor.ca/immobilier/20888518/terrain-vague-ch-de-lh%C3%A9ritage-saint-adolphe-dhoward",
      'size': 2,
      'url': "assets/Héritage/",
      'Description': [["Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"], ["Sale without legal warranty of quality, at the buyer's risk and peril"]],
      'Dimensions': [[['Terrain superficie', '59002.8 PC'], ['Terrain dim.', '50.12x110.1 M'], ['Terrain dim.', 'Irrégulier']], [['Land area ', '59002.8 SF '], [' Sun field ', '50 .12x110.1 M'], ['Sun field', 'Irregular']]],
      'carac': [[['Approvisionnement en eau', 'Aucun'], ['Particularités', 'chemin privé, milieu humide,'], ["Système d'égouts", 'Aucun'], ['Zonage', 'Résidentiel']], [['Water supply', 'None'], ['Features', 'private road, wetland,'], ['Sewage system', 'None'], ['Zoning', 'Residential']]]
    }, {
      'id': "12",
      'title': ['Harel', 'Harel'],
      'sellType': ['Terrain vacant', 'Vacant lot'],
      'adress': ['Ch. du Lac-Harel', 'Ch. du Lac-Harel '],
      'city': "Lac-Supérieur (Laurentides), J0T1P0",
      'urlMap': "https://maps.google.com?q=%20Ch%2E%20du%20Lac%2DHarel%20J0T1P0",
      'prix': 19000,
      'nbPiedsCarre': 67537.8,
      'EvalMuni': "19 100 $",
      'mls': 27811021,
      'urlRealtor': "https://www.realtor.ca/immobilier/20888529/terrain-vague-ch-du-lac-harel-lac-sup%C3%A9rieur",
      'size': 2,
      'url': "assets/Lac-Harel/",
      'Description': [["Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"], ["Sale without legal warranty of quality, at the buyer's risk and peril"]],
      'Dimensions': [[['Terrain superficie', '67537.8 PC'], ['Terrain dim.', '65.41x95 M'], ['Terrain dim.', 'Irrégulier']], [[' Land area ', ' 67537.8 SF '], [' Land dim. ', '65 .41x95 M'], ['Sun field', 'Irregular']]],
      'carac': [[['Approvisionnement en eau', 'Aucun'], ["Système d'égouts", 'Aucun'], ['Zonage', 'Résidentiel']], [['Water supply', 'None'], ['Sewage system', 'None'], [' Zoning ', ' Residential ']]]
    }, {
      'id': "13",
      'title': ['Flamingo', 'Flamingo'],
      'sellType': ['Terrain vacant', 'Vacant lot'],
      'adress': ['Ch. Flamingo', 'Ch. Flamingo '],
      'city': "Saint-Adolphe-d'Howard (Laurentides), J0T2B0",
      'urlMap': "https://maps.google.com?q=%20Ch%2E%20Flamingo%20J0T2B0",
      'prix': 16000,
      'nbPiedsCarre': 17123.9,
      'EvalMuni': "16 700 $",
      'mls': 25022339,
      'urlRealtor': "https://www.realtor.ca/immobilier/20888524/terrain-vague-ch-flamingo-saint-adolphe-dhoward",
      'size': 1,
      'url': "assets/flamingo/",
      'Description': [["Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"], ["Sale without legal warranty of quality, at the buyer's own risk"]],
      'Dimensions': [[['Terrain superficie', '17123.9 PC'], ['Terrain dim.', '15.24x88.7 M'], ['Terrain dim.', 'Irrégulier']], [[' Land area ', ' 17123.9 SF '], [' Land dim. ', ' 15.24x88.7 M '], [' Sun field ', ' Irregular ']]],
      'carac': [[['Approvisionnement en eau', 'Aucun'], ["Système d'égouts", 'Aucun'], ['Particularités', 'Boisé'], ['Zonage', 'Résidentiel']], [[' Water supply ', ' None '], ['Sewage system', ' None '], [' Special features ', ' Wooded '], [' Zoning ', ' Residential ']]]
    }, {
      'id': "14",
      'title': ['Trembles', 'Aspens'],
      'sellType': ['Terrain vacant', ' Vacant land '],
      'adress': ['Ch. des Trembles', ' Ch. des Trembles'],
      'city': "Saint-Adolphe-d'Howard (Laurentides), J0T2B0",
      'urlMap': "https://maps.google.com?q=%20Ch%2E%20des%20Trembles%20J0T2B0",
      'prix': 18000,
      'nbPiedsCarre': 53750.4,
      'EvalMuni': "18 200 $",
      'mls': 14590552,
      'urlRealtor': "https://www.realtor.ca/immobilier/20888520/terrain-vague-ch-des-trembles-saint-adolphe-dhoward",
      'size': 2,
      'url': "assets/trembles/",
      'Description': [["Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"], ["Sale without legal warranty of quality, at the buyer's own risk"]],
      'Dimensions': [[['Terrain superficie', '53750.4 PC'], ['Terrain dim.', '115.98x32.19 M'], ['Terrain dim.', 'Irrégulier']], [['Land area', '53750.4 SF'], ['Land dim.', '115.98x32.19 M'], ['Sun field', 'Irregular']]],
      'carac': [[['Approvisionnement en eau', 'Aucun'], ['Particularités', 'Rue privée'], ["Système d'égouts", 'Aucun'], ['Zonage', 'Résidentiel']], [['Water supply', 'None'], ['Special features', 'Private street'], ['Street system sewers', 'None'], ['Zoning', 'Residential']]]
    }, {
      'id': "15",
      'title': ['Val-Morin', 'Val-Morin'],
      'sellType': ['Terrain vacant', 'Vacant land'],
      'adress': ['22e Avenue', '22e Avenue'],
      'city': "22e Avenue, Val-Morin (Laurentides), J0T2R0",
      'urlMap': "https://maps.google.com?q=%2022e%20Avenue%20J0T2R0",
      'prix': 6000,
      'nbPiedsCarre': 6922.8,
      'EvalMuni': "13 400 $",
      'mls': 12780751,
      'urlRealtor': "https://www.realtor.ca/immobilier/20888519/terrain-vague-22e-avenue-val-morin",
      'size': 1,
      'url': "assets/vacant/",
      'Description': [["Terrain non constructible, zone humide selon l'urbaniste de la ville", "Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"], ['Non-constructible land, wetland according to the town planner', 'Sale without legal warranty of quality, at risk and perils of the buyer ']],
      'Dimensions': [[['Terrain superficie', '6922.8 PC'], ['Terrain dim.', '20.6x31 M'], ['Terrain dim.', 'Irrégulier']], [['Land area', '6922.8 SF'], ['Land dim.', '20 .6x31 M '], [' Land dim. ', ' Irregular ']]],
      'carac': [[['Approvisionnement en eau', 'Aucun'], ['Particularités', 'Rue privée'], ["Système d'égouts", 'Aucun'], ['Zonage', 'Résidentiel']], [['Water supply', 'None'], ['Special features', 'Private street'], ['Sewage system', 'None'], ['Zoning', 'Residential']]]
    }, {
      'id': "16",
      'title': ['Laval Pont Viau', 'Laval Pont Viau'],
      'sellType': ['Terrain vacant', 'Vacant lot'],
      'adress': ['Boul des Laurentides', 'Boul des Laurentides'],
      'city': "Laval Pont Viau, Boul des Laurentides",
      'prix': 3500,
      'nbPiedsCarre': 440.2,
      'EvalMuni': "3 000 $",
      'size': 1,
      'url': "assets/vacant/"
    }, {
      'id': "17",
      'title': ['Laval St Francois', 'Laval St Francois'],
      'sellType': ['Terrain vacant', 'Vacant lot'],
      'adress': ['Montee Masson', 'Montee Masson'],
      'city': "Laval St Francois, Montee Masson",
      'prix': 1200,
      'nbPiedsCarre': 1337.8,
      'EvalMuni': "1 500 $",
      'size': 1,
      'url': "assets/vacant/"
    }, {
      'id': "19",
      'title': ['Pointe Calumet', 'Pointe Calumet'],
      'sellType': ['Terrain vacant', 'Vacant lot'],
      'adress': ['16E avenue', '16E avenue'],
      'city': "	16E avenue, Pointe Calumet",
      'prix': 2000,
      'nbPiedsCarre': 9772.8,
      'EvalMuni': "2 500 $",
      'size': 1,
      'url': "assets/vacant/"
    }]
    vendre.forEach(propr => {
      this.saveInfo(propr, true);
    });
    

  }

 




  saveInfo(prop : any, isVendre : boolean){
    
    prop["isVendre"] = isVendre;
    //delete prop["isVendre"];

    delete prop["id"];
    if(prop["title"]){
      prop["title"] = prop["title"][0];
    }
    
    if(prop["adress"]){
      prop["adress"] = prop["adress"][0];
    }
    
    
    const liste_string_object = ["sellType"]

    liste_string_object.forEach(element => {
      if(prop[element]){
        if(prop[element][0] === prop[element][1]){
          prop[element] = prop[element][0];
        }else{
          prop[element] = {"english" : prop[element][0], "french": prop[element][1]};
        }
      }
      
    });

// Description : {"english" : [], "french" : []}
    if(prop["Description"]){
      prop["Description"] = {"english" : prop["Description"][0], "french" : prop["Description"][1]}
    }
    


// Dimensions + carac : {"english" : {}, "french" : {}}
    const list_tags = ["Dimensions", "carac"];
    const languages = ["english", "french"];

    list_tags.forEach(attribut => {
      if(prop[attribut]){
        let temp1 = {};
        for(let i = 0; i<2; i++){
          let temp2 = {}

          prop[attribut][i].forEach(duo => {
            temp2[duo[0]] = duo[1];
          });
          let language = (i == 0)? "english" : "french"; 
          temp1[language] = temp2;
        }
        prop[attribut] = temp1;
      }
      
    });

    this.firebaseService.savePropriete(prop);
  }




}
