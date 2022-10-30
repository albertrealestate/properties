import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordBankService {
  seeMap = ["Voir la carte", "See the map"]
  price_title = ["Prix", "Price"]
  dim_title = ["pieds carrés", "square feet"]
  bed_title = ["Chambres", "Bedrooms"]
  bath_title = ["Salles de bain", "Bathrooms"]
  more_infos = ["Pour plus d'information", "For more information"]
  pertinent_infos = ["INFORMATIONS PERTINENTES", "RELEVANT INFORMATION"]
  adresse = ["Adresse", "Address"]
  eval_muni = ["Évaluation municipale ", "Municipal assessment"]
  espace = ["L'ESPACE", "SPACE"]
  construction = ["Année de construction", "Year of construction"]
  caract = ["CARACTÉRISTIQUES","CHARACTERISTICS"]
  contacter = ["Pour nous contacter", "To contact us"]
  vendre = ["À vendre", "For sale"]
  louer = ["À louer", "For rent"]
  propos = ["À Propos De Nous", "About us"]
  tel = ["Numéro de téléphone", "Phone number"]

  home = ["Accueil", "Home"]
  


  constructor() { }
}
