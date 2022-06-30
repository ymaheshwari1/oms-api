import { Geo } from "./index"

export interface ContactMech {
  contactMechId?: string;
  contactMechTypeEnumId?: string;
  dataSourceId?: string;
  infoString?: string;
  gatewayCimId?: string;
  trustLevelEnumId?: string;
  validateMessage?: string;
  paymentFraudEvidenceId?: string;
  replacesContactMechId?: string;
  telecomNumber?: {
    contactMechId: string;
    countryCode?: string;
    areaCode?: string;
    contactNumber?: string;
    askForName?: string;
  };
  postalAddress?: {
    contactMechId: string;
    toName?: string;
    attnName?: string;
    address1?: string;
    address2?: string;
    unitNumber?: string;
    directions?: string;
    city?: string;
    cityGeoId?: string;
    schoolDistrictGeoId?: string;
    countyGeoId?: string;
    stateProvinceGeoId?: string;
    countryGeoId?: string;
    postalCode?: string;
    postalCodeExt?: string;
    postalCodeGeoId?: string;
    geoPointId?: string;
    commercial?: string;
    accessCode?: string;
    telecomContactMechId?: string;
    emailContactMechId?: string;
    shipGatewayAddressId?: string;
    cityGeo?: Geo;
    countyGeo?: Geo;
    stateProvinceGeo?: Geo;
    postalCodeGeo?: Geo;
    countryGeo?: Geo;
    telecomContactMech?: string;
    emailContactMech?: string;
  };
}