export interface CommunicationEvent {
  communicationEventId: string,
  communicationEventTypeId?: string,
  contactMechTypeEnumId?: string,
  statusId?: string,
  parentCommEventId?: string,
  rootCommEventId?: string,
  fromContactMechId?: string,
  toContactMechId?: string,
  fromPartyId?: string,
  fromRoleTypeId?: string,
  toPartyId?: string,
  toRoleTypeId?: string,
  entryDate?: string,
  datetimeStarted?: string,
  datetimeEnded?: string,
  subject?: string,
  contentType?: string,
  body?: string,
  note?: string,
  reasonEnumId?: string,
  contactListId?: string,
  emailMessageId?: string
}