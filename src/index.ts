import { events, Product, Response, Stock, Order, OrderItem, OrderPart, OPERATOR, User } from './types'
import api, { client, getConfig, init, initialise, resetConfig, updateToken, updateInstanceUrl } from './api'
import { getTelecomCode, hasError, isError } from './util'
import { getNotificationEnumIds, getNotificationUserPrefTypeIds, getUserFacilities, fetchProducts, fetchProductsGroupedBy, fetchProductsGroupedByParent, fetchProductsStock, fetchProductsStockAtFacility, getOrderDetails, getProductIdentificationPref, getProfile, logout, removeClientRegistrationToken, setProductIdentificationPref, storeClientRegistrationToken, subscribeTopic, unsubscribeTopic, updateOrderStatus, getUserPreference, setUserPreference, setUserLocale } from './modules'

export {
  api,
  client,
  getOrderDetails,
  updateOrderStatus,
  fetchProducts,
  fetchProductsGroupedBy,
  fetchProductsGroupedByParent,
  getNotificationEnumIds,
  getNotificationUserPrefTypeIds,
  getConfig,
  getTelecomCode,
  logout,
  hasError,
  init,
  initialise,
  isError,
  resetConfig,
  updateToken,
  updateInstanceUrl,
  fetchProductsStock,
  fetchProductsStockAtFacility,
  getProductIdentificationPref,
  getProfile,
  setProductIdentificationPref,
  getUserFacilities,
  events,
  Product,
  Response,
  Stock,
  Order,
  OrderItem,
  OrderPart,
  OPERATOR,
  removeClientRegistrationToken,
  storeClientRegistrationToken,
  subscribeTopic,
  unsubscribeTopic,
  User,
  getUserPreference,
  setUserPreference,
  setUserLocale
}