import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";
/**
 * @interface
 * An interface representing Country.
 */
export interface Country {
    /**
     * @member {string} [isocode]
     */
    isocode?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
}
/**
 * @interface
 * An interface representing Region.
 */
export interface Region {
    /**
     * @member {string} [countryIso]
     */
    countryIso?: string;
    /**
     * @member {string} [isocode]
     */
    isocode?: string;
    /**
     * @member {string} [isocodeShort]
     */
    isocodeShort?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
}
/**
 * @interface
 * An interface representing Address.
 */
export interface Address {
    /**
     * @member {string} [companyName]
     */
    companyName?: string;
    /**
     * @member {Country} [country]
     */
    country?: Country;
    /**
     * @member {boolean} [defaultAddress]
     */
    defaultAddress?: boolean;
    /**
     * @member {string} [email]
     */
    email?: string;
    /**
     * @member {string} [firstName]
     */
    firstName?: string;
    /**
     * @member {string} [formattedAddress]
     */
    formattedAddress?: string;
    /**
     * @member {string} [id]
     */
    id?: string;
    /**
     * @member {string} [lastName]
     */
    lastName?: string;
    /**
     * @member {string} [line1]
     */
    line1?: string;
    /**
     * @member {string} [line2]
     */
    line2?: string;
    /**
     * @member {string} [phone]
     */
    phone?: string;
    /**
     * @member {string} [postalCode]
     */
    postalCode?: string;
    /**
     * @member {Region} [region]
     */
    region?: Region;
    /**
     * @member {boolean} [shippingAddress]
     */
    shippingAddress?: boolean;
    /**
     * @member {string} [title]
     */
    title?: string;
    /**
     * @member {string} [titleCode]
     */
    titleCode?: string;
    /**
     * @member {string} [town]
     */
    town?: string;
    /**
     * @member {boolean} [visibleInAddressBook]
     */
    visibleInAddressBook?: boolean;
}
/**
 * @interface
 * An interface representing AddressList.
 */
export interface AddressList {
    /**
     * @member {Address[]} [addresses]
     */
    addresses?: Address[];
}
/**
 * @interface
 * An interface representing ErrorModel.
 * Error message
 *
 */
export interface ErrorModel {
    /**
     * @member {string} [errorCode] Error code
     */
    errorCode?: string;
    /**
     * @member {string} [message] Descriptive, human readable error message.
     */
    message?: string;
    /**
     * @member {string} [reason] Additional classification specific for each
     * error type e.g. 'noStock'.
     */
    reason?: string;
    /**
     * @member {string} [subject] Identifier of the related object e.g. '1'.
     */
    subject?: string;
    /**
     * @member {string} [subjectType] Type of the object related to the error
     * e.g. 'entry'.
     */
    subjectType?: string;
    /**
     * @member {string} [type] Type of the error e.g. 'LowStockError'.
     */
    type?: string;
}
/**
 * @interface
 * An interface representing ErrorList.
 * List of errors
 *
 */
export interface ErrorList {
    /**
     * @member {ErrorModel[]} [errors]
     */
    errors?: ErrorModel[];
}
/**
 * @interface
 * An interface representing AddressValidation.
 */
export interface AddressValidation {
    /**
     * @member {string} [decision]
     */
    decision?: string;
    /**
     * @member {ErrorList} [errors]
     */
    errors?: ErrorList;
    /**
     * @member {Address[]} [suggestedAddresses]
     */
    suggestedAddresses?: Address[];
}
/**
 * @interface
 * An interface representing Price.
 */
export interface Price {
    /**
     * @member {string} [currencyIso]
     */
    currencyIso?: string;
    /**
     * @member {string} [formattedValue]
     */
    formattedValue?: string;
    /**
     * @member {number} [maxQuantity]
     */
    maxQuantity?: number;
    /**
     * @member {number} [minQuantity]
     */
    minQuantity?: number;
    /**
     * @member {PriceType} [priceType] Possible values include: 'BUY', 'FROM'
     */
    priceType?: PriceType;
    /**
     * @member {number} [value]
     */
    value?: number;
}
/**
 * @interface
 * An interface representing Stock.
 */
export interface Stock {
    /**
     * @member {number} [stockLevel]
     */
    stockLevel?: number;
    /**
     * @member {string} [stockLevelStatus]
     */
    stockLevelStatus?: string;
}
/**
 * @interface
 * An interface representing Image.
 */
export interface Image {
    /**
     * @member {string} [altText]
     */
    altText?: string;
    /**
     * @member {string} [format]
     */
    format?: string;
    /**
     * @member {number} [galleryIndex]
     */
    galleryIndex?: number;
    /**
     * @member {ImageType} [imageType] Possible values include: 'PRIMARY',
     * 'GALLERY'
     */
    imageType?: ImageType;
    /**
     * @member {string} [url]
     */
    url?: string;
}
/**
 * @interface
 * An interface representing VariantOptionQualifier.
 */
export interface VariantOptionQualifier {
    /**
     * @member {Image} [image]
     */
    image?: Image;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {string} [qualifier]
     */
    qualifier?: string;
    /**
     * @member {string} [value]
     */
    value?: string;
}
/**
 * @interface
 * An interface representing VariantOption.
 */
export interface VariantOption {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {Price} [priceData]
     */
    priceData?: Price;
    /**
     * @member {Stock} [stock]
     */
    stock?: Stock;
    /**
     * @member {string} [url]
     */
    url?: string;
    /**
     * @member {VariantOptionQualifier[]} [variantOptionQualifiers]
     */
    variantOptionQualifiers?: VariantOptionQualifier[];
}
/**
 * @interface
 * An interface representing BaseOption.
 */
export interface BaseOption {
    /**
     * @member {VariantOption[]} [options]
     */
    options?: VariantOption[];
    /**
     * @member {VariantOption} [selected]
     */
    selected?: VariantOption;
    /**
     * @member {string} [variantType]
     */
    variantType?: string;
}
/**
 * @interface
 * An interface representing Currency.
 */
export interface Currency {
    /**
     * @member {boolean} [active]
     */
    active?: boolean;
    /**
     * @member {string} [isocode]
     */
    isocode?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {string} [symbol]
     */
    symbol?: string;
}
/**
 * @interface
 * An interface representing GeoPoint.
 */
export interface GeoPoint {
    /**
     * @member {number} [latitude]
     */
    latitude?: number;
    /**
     * @member {number} [longitude]
     */
    longitude?: number;
}
/**
 * @interface
 * An interface representing Time.
 */
export interface Time {
    /**
     * @member {string} [formattedHour]
     */
    formattedHour?: string;
    /**
     * @member {Uint8Array} [hour]
     */
    hour?: Uint8Array;
    /**
     * @member {Uint8Array} [minute]
     */
    minute?: Uint8Array;
}
/**
 * @interface
 * An interface representing SpecialOpeningDay.
 */
export interface SpecialOpeningDay {
    /**
     * @member {boolean} [closed]
     */
    closed?: boolean;
    /**
     * @member {Time} [closingTime]
     */
    closingTime?: Time;
    /**
     * @member {string} [comment]
     */
    comment?: string;
    /**
     * @member {Date} [date]
     */
    date?: Date;
    /**
     * @member {string} [formattedDate]
     */
    formattedDate?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {Time} [openingTime]
     */
    openingTime?: Time;
}
/**
 * @interface
 * An interface representing WeekdayOpeningDay.
 */
export interface WeekdayOpeningDay {
    /**
     * @member {boolean} [closed]
     */
    closed?: boolean;
    /**
     * @member {Time} [closingTime]
     */
    closingTime?: Time;
    /**
     * @member {Time} [openingTime]
     */
    openingTime?: Time;
    /**
     * @member {string} [weekDay]
     */
    weekDay?: string;
}
/**
 * @interface
 * An interface representing OpeningSchedule.
 */
export interface OpeningSchedule {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {SpecialOpeningDay[]} [specialDayOpeningList]
     */
    specialDayOpeningList?: SpecialOpeningDay[];
    /**
     * @member {WeekdayOpeningDay[]} [weekDayOpeningList]
     */
    weekDayOpeningList?: WeekdayOpeningDay[];
}
/**
 * @interface
 * An interface representing PointOfService.
 */
export interface PointOfService {
    /**
     * @member {Address} [address]
     */
    address?: Address;
    /**
     * @member {string} [description]
     */
    description?: string;
    /**
     * @member {string} [displayName]
     */
    displayName?: string;
    /**
     * @member {number} [distanceKm]
     */
    distanceKm?: number;
    /**
     * @member {{ [propertyName: string]: string }} [features]
     */
    features?: {
        [propertyName: string]: string;
    };
    /**
     * @member {string} [formattedDistance]
     */
    formattedDistance?: string;
    /**
     * @member {GeoPoint} [geoPoint]
     */
    geoPoint?: GeoPoint;
    /**
     * @member {Image} [mapIcon]
     */
    mapIcon?: Image;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {OpeningSchedule} [openingHours]
     */
    openingHours?: OpeningSchedule;
    /**
     * @member {string} [storeContent]
     */
    storeContent?: string;
    /**
     * @member {Image[]} [storeImages]
     */
    storeImages?: Image[];
    /**
     * @member {string} [url]
     */
    url?: string;
}
/**
 * @interface
 * An interface representing Language.
 */
export interface Language {
    /**
     * @member {boolean} [active]
     */
    active?: boolean;
    /**
     * @member {string} [isocode]
     */
    isocode?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {string} [nativeName]
     */
    nativeName?: string;
}
/**
 * @interface
 * An interface representing DeliveryMode.
 */
export interface DeliveryMode {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {Price} [deliveryCost]
     */
    deliveryCost?: Price;
    /**
     * @member {string} [description]
     */
    description?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
}
/**
 * @interface
 * An interface representing DeliveryModeList.
 */
export interface DeliveryModeList {
    /**
     * @member {DeliveryMode[]} [deliveryModes]
     */
    deliveryModes?: DeliveryMode[];
}
/**
 * @interface
 * An interface representing BaseStore.
 */
export interface BaseStore {
    /**
     * @member {string} [createReturnProcessCode]
     */
    createReturnProcessCode?: string;
    /**
     * @member {Currency[]} [currencies]
     */
    currencies?: Currency[];
    /**
     * @member {Currency} [defaultCurrency]
     */
    defaultCurrency?: Currency;
    /**
     * @member {PointOfService} [defaultDeliveryOrigin]
     */
    defaultDeliveryOrigin?: PointOfService;
    /**
     * @member {Language} [defaultLanguage]
     */
    defaultLanguage?: Language;
    /**
     * @member {Country[]} [deliveryCountries]
     */
    deliveryCountries?: Country[];
    /**
     * @member {DeliveryModeList} [deliveryModes]
     */
    deliveryModes?: DeliveryModeList;
    /**
     * @member {boolean} [externalTaxEnabled]
     */
    externalTaxEnabled?: boolean;
    /**
     * @member {Language[]} [languages]
     */
    languages?: Language[];
    /**
     * @member {number} [maxRadiusForPosSearch]
     */
    maxRadiusForPosSearch?: number;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {string} [paymentProvider]
     */
    paymentProvider?: string;
    /**
     * @member {PointOfService[]} [pointsOfService]
     */
    pointsOfService?: PointOfService[];
    /**
     * @member {string} [submitOrderProcessCode]
     */
    submitOrderProcessCode?: string;
}
/**
 * @interface
 * An interface representing SearchQuery.
 */
export interface SearchQuery {
    /**
     * @member {string} [value]
     */
    value?: string;
}
/**
 * @interface
 * An interface representing SearchState.
 */
export interface SearchState {
    /**
     * @member {SearchQuery} [query]
     */
    query?: SearchQuery;
    /**
     * @member {string} [url]
     */
    url?: string;
}
/**
 * @interface
 * An interface representing Breadcrumb.
 */
export interface Breadcrumb {
    /**
     * @member {string} [facetCode]
     */
    facetCode?: string;
    /**
     * @member {string} [facetName]
     */
    facetName?: string;
    /**
     * @member {string} [facetValueCode]
     */
    facetValueCode?: string;
    /**
     * @member {string} [facetValueName]
     */
    facetValueName?: string;
    /**
     * @member {SearchState} [removeQuery]
     */
    removeQuery?: SearchState;
    /**
     * @member {SearchState} [truncateQuery]
     */
    truncateQuery?: SearchState;
}
/**
 * @interface
 * An interface representing Component.
 */
export interface Component {
    /**
     * @member {Date} [modifiedtime]
     */
    modifiedtime?: Date;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {any} [otherProperties]
     */
    otherProperties?: any;
    /**
     * @member {string} [typeCode]
     */
    typeCode?: string;
    /**
     * @member {string} [uid]
     */
    uid?: string;
}
/**
 * @interface
 * An interface representing ComponentList.
 */
export interface ComponentList {
    /**
     * @member {Component[]} [component]
     */
    component?: Component[];
}
/**
 * @interface
 * An interface representing ContentSlot.
 */
export interface ContentSlot {
    /**
     * @member {ComponentList} [components]
     */
    components?: ComponentList;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {string} [position]
     */
    position?: string;
    /**
     * @member {string} [slotId]
     */
    slotId?: string;
    /**
     * @member {boolean} [slotShared]
     */
    slotShared?: boolean;
    /**
     * @member {string} [slotStatus]
     */
    slotStatus?: string;
}
/**
 * @interface
 * An interface representing ContentSlotList.
 */
export interface ContentSlotList {
    /**
     * @member {ContentSlot[]} [contentSlot]
     */
    contentSlot?: ContentSlot[];
}
/**
 * @interface
 * An interface representing CMSPage.
 */
export interface CMSPage {
    /**
     * @member {ContentSlotList} [contentSlots]
     */
    contentSlots?: ContentSlotList;
    /**
     * @member {boolean} [defaultPage]
     */
    defaultPage?: boolean;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {string} [template]
     */
    template?: string;
    /**
     * @member {string} [title]
     */
    title?: string;
    /**
     * @member {string} [typeCode]
     */
    typeCode?: string;
    /**
     * @member {string} [uid]
     */
    uid?: string;
}
/**
 * @interface
 * An interface representing CardType.
 */
export interface CardType {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
}
/**
 * @interface
 * An interface representing CardTypeList.
 */
export interface CardTypeList {
    /**
     * @member {CardType[]} [cardTypes]
     */
    cardTypes?: CardType[];
}
/**
 * @interface
 * An interface representing PromotionOrderEntryConsumed.
 */
export interface PromotionOrderEntryConsumed {
    /**
     * @member {number} [adjustedUnitPrice]
     */
    adjustedUnitPrice?: number;
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {number} [orderEntryNumber]
     */
    orderEntryNumber?: number;
    /**
     * @member {number} [quantity]
     */
    quantity?: number;
}
/**
 * @interface
 * An interface representing PromotionRestriction.
 */
export interface PromotionRestriction {
    /**
     * @member {string} [description]
     */
    description?: string;
    /**
     * @member {string} [restrictionType]
     */
    restrictionType?: string;
}
/**
 * @interface
 * An interface representing Promotion.
 */
export interface Promotion {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {string[]} [couldFireMessages]
     */
    couldFireMessages?: string[];
    /**
     * @member {string} [description]
     */
    description?: string;
    /**
     * @member {boolean} [enabled]
     */
    enabled?: boolean;
    /**
     * @member {Date} [endDate]
     */
    endDate?: Date;
    /**
     * @member {string[]} [firedMessages]
     */
    firedMessages?: string[];
    /**
     * @member {number} [priority]
     */
    priority?: number;
    /**
     * @member {Image} [productBanner]
     */
    productBanner?: Image;
    /**
     * @member {string} [promotionGroup]
     */
    promotionGroup?: string;
    /**
     * @member {string} [promotionType]
     */
    promotionType?: string;
    /**
     * @member {PromotionRestriction[]} [restrictions]
     */
    restrictions?: PromotionRestriction[];
    /**
     * @member {Date} [startDate]
     */
    startDate?: Date;
    /**
     * @member {string} [title]
     */
    title?: string;
}
/**
 * @interface
 * An interface representing PromotionResult.
 */
export interface PromotionResult {
    /**
     * @member {PromotionOrderEntryConsumed[]} [consumedEntries]
     */
    consumedEntries?: PromotionOrderEntryConsumed[];
    /**
     * @member {string} [description]
     */
    description?: string;
    /**
     * @member {Promotion} [promotion]
     */
    promotion?: Promotion;
}
/**
 * @interface
 * An interface representing Voucher.
 */
export interface Voucher {
    /**
     * @member {Price} [appliedValue]
     */
    appliedValue?: Price;
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {Currency} [currency]
     */
    currency?: Currency;
    /**
     * @member {string} [description]
     */
    description?: string;
    /**
     * @member {boolean} [freeShipping]
     */
    freeShipping?: boolean;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {number} [value]
     */
    value?: number;
    /**
     * @member {string} [valueFormatted]
     */
    valueFormatted?: string;
    /**
     * @member {string} [valueString]
     */
    valueString?: string;
    /**
     * @member {string} [voucherCode]
     */
    voucherCode?: string;
}
/**
 * @interface
 * An interface representing ConfigurationInfo.
 */
export interface ConfigurationInfo {
    /**
     * @member {string} [configurationLabel]
     */
    configurationLabel?: string;
    /**
     * @member {string} [configurationValue]
     */
    configurationValue?: string;
    /**
     * @member {string} [configuratorType]
     */
    configuratorType?: string;
    /**
     * @member {string} [status]
     */
    status?: string;
}
/**
 * @interface
 * An interface representing Category.
 */
export interface Category {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {Image} [image]
     */
    image?: Image;
    /**
     * @member {string} [url]
     */
    url?: string;
}
/**
 * @interface
 * An interface representing FeatureUnit.
 */
export interface FeatureUnit {
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {string} [symbol]
     */
    symbol?: string;
    /**
     * @member {string} [unitType]
     */
    unitType?: string;
}
/**
 * @interface
 * An interface representing FeatureValue.
 */
export interface FeatureValue {
    /**
     * @member {string} [value]
     */
    value?: string;
}
/**
 * @interface
 * An interface representing Feature.
 */
export interface Feature {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {boolean} [comparable]
     */
    comparable?: boolean;
    /**
     * @member {string} [description]
     */
    description?: string;
    /**
     * @member {FeatureUnit} [featureUnit]
     */
    featureUnit?: FeatureUnit;
    /**
     * @member {FeatureValue[]} [featureValues]
     */
    featureValues?: FeatureValue[];
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {boolean} [range]
     */
    range?: boolean;
    /**
     * @member {string} [type]
     */
    type?: string;
}
/**
 * @interface
 * An interface representing Classification.
 */
export interface Classification {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {Feature[]} [features]
     */
    features?: Feature[];
    /**
     * @member {string} [name]
     */
    name?: string;
}
/**
 * @interface
 * An interface representing FutureStock.
 */
export interface FutureStock {
    /**
     * @member {Date} [date]
     */
    date?: Date;
    /**
     * @member {string} [formattedDate]
     */
    formattedDate?: string;
    /**
     * @member {Stock} [stock]
     */
    stock?: Stock;
}
/**
 * @interface
 * An interface representing PriceRange.
 */
export interface PriceRange {
    /**
     * @member {Price} [maxPrice]
     */
    maxPrice?: Price;
    /**
     * @member {Price} [minPrice]
     */
    minPrice?: Price;
}
/**
 * @interface
 * An interface representing ProductReference.
 */
export interface ProductReference {
    /**
     * @member {string} [description]
     */
    description?: string;
    /**
     * @member {boolean} [preselected]
     */
    preselected?: boolean;
    /**
     * @member {number} [quantity]
     */
    quantity?: number;
    /**
     * @member {string} [referenceType]
     */
    referenceType?: string;
    /**
     * @member {Product} [target]
     */
    target?: Product;
}
/**
 * @interface
 * An interface representing User.
 */
export interface User {
    /**
     * @member {Currency} [currency]
     */
    currency?: Currency;
    /**
     * @member {string} [customerId]
     */
    customerId?: string;
    /**
     * @member {Date} [deactivationDate]
     */
    deactivationDate?: Date;
    /**
     * @member {Address} [defaultAddress]
     */
    defaultAddress?: Address;
    /**
     * @member {string} [displayUid]
     */
    displayUid?: string;
    /**
     * @member {string} [firstName]
     */
    firstName?: string;
    /**
     * @member {Language} [language]
     */
    language?: Language;
    /**
     * @member {string} [lastName]
     */
    lastName?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {string} [title]
     */
    title?: string;
    /**
     * @member {string} [titleCode]
     */
    titleCode?: string;
    /**
     * @member {string} [uid]
     */
    uid?: string;
}
/**
 * @interface
 * An interface representing Review.
 */
export interface Review {
    /**
     * @member {string} [alias]
     */
    alias?: string;
    /**
     * @member {string} [comment]
     */
    comment?: string;
    /**
     * @member {Date} [date]
     */
    date?: Date;
    /**
     * @member {string} [headline]
     */
    headline?: string;
    /**
     * @member {string} [id]
     */
    id?: string;
    /**
     * @member {User} [principal]
     */
    principal?: User;
    /**
     * @member {number} [rating]
     */
    rating?: number;
}
/**
 * @interface
 * An interface representing VariantCategory.
 */
export interface VariantCategory {
    /**
     * @member {boolean} [hasImage]
     */
    hasImage?: boolean;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {number} [priority]
     */
    priority?: number;
}
/**
 * @interface
 * An interface representing VariantValueCategory.
 */
export interface VariantValueCategory {
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {number} [sequence]
     */
    sequence?: number;
    /**
     * @member {VariantCategory[]} [superCategories]
     */
    superCategories?: VariantCategory[];
}
/**
 * @interface
 * An interface representing VariantMatrixElement.
 */
export interface VariantMatrixElement {
    /**
     * @member {VariantMatrixElement[]} [elements]
     */
    elements?: VariantMatrixElement[];
    /**
     * @member {boolean} [isLeaf]
     */
    isLeaf?: boolean;
    /**
     * @member {VariantCategory} [parentVariantCategory]
     */
    parentVariantCategory?: VariantCategory;
    /**
     * @member {VariantOption} [variantOption]
     */
    variantOption?: VariantOption;
    /**
     * @member {VariantValueCategory} [variantValueCategory]
     */
    variantValueCategory?: VariantValueCategory;
}
/**
 * @interface
 * An interface representing Product.
 */
export interface Product {
    /**
     * @member {boolean} [availableForPickup]
     */
    availableForPickup?: boolean;
    /**
     * @member {number} [averageRating]
     */
    averageRating?: number;
    /**
     * @member {BaseOption[]} [baseOptions]
     */
    baseOptions?: BaseOption[];
    /**
     * @member {string} [baseProduct]
     */
    baseProduct?: string;
    /**
     * @member {Category[]} [categories]
     */
    categories?: Category[];
    /**
     * @member {Classification[]} [classifications]
     */
    classifications?: Classification[];
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {boolean} [configurable]
     */
    configurable?: boolean;
    /**
     * @member {string} [configuratorType]
     */
    configuratorType?: string;
    /**
     * @member {string} [description]
     */
    description?: string;
    /**
     * @member {FutureStock[]} [futureStocks]
     */
    futureStocks?: FutureStock[];
    /**
     * @member {Image[]} [images]
     */
    images?: Image[];
    /**
     * @member {string} [manufacturer]
     */
    manufacturer?: string;
    /**
     * @member {boolean} [multidimensional]
     */
    multidimensional?: boolean;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {number} [numberOfReviews]
     */
    numberOfReviews?: number;
    /**
     * @member {Promotion[]} [potentialPromotions]
     */
    potentialPromotions?: Promotion[];
    /**
     * @member {Price} [price]
     */
    price?: Price;
    /**
     * @member {PriceRange} [priceRange]
     */
    priceRange?: PriceRange;
    /**
     * @member {ProductReference[]} [productReferences]
     */
    productReferences?: ProductReference[];
    /**
     * @member {boolean} [purchasable]
     */
    purchasable?: boolean;
    /**
     * @member {Review[]} [reviews]
     */
    reviews?: Review[];
    /**
     * @member {Stock} [stock]
     */
    stock?: Stock;
    /**
     * @member {string} [summary]
     */
    summary?: string;
    /**
     * @member {string[]} [tags]
     */
    tags?: string[];
    /**
     * @member {string} [url]
     */
    url?: string;
    /**
     * @member {VariantMatrixElement[]} [variantMatrix]
     */
    variantMatrix?: VariantMatrixElement[];
    /**
     * @member {VariantOption[]} [variantOptions]
     */
    variantOptions?: VariantOption[];
    /**
     * @member {string} [variantType]
     */
    variantType?: string;
    /**
     * @member {Price[]} [volumePrices]
     */
    volumePrices?: Price[];
    /**
     * @member {boolean} [volumePricesFlag]
     */
    volumePricesFlag?: boolean;
}
/**
 * @interface
 * An interface representing OrderEntry.
 */
export interface OrderEntry {
    /**
     * @member {Price} [basePrice]
     */
    basePrice?: Price;
    /**
     * @member {ConfigurationInfo[]} [configurationInfos]
     */
    configurationInfos?: ConfigurationInfo[];
    /**
     * @member {DeliveryMode} [deliveryMode]
     */
    deliveryMode?: DeliveryMode;
    /**
     * @member {PointOfService} [deliveryPointOfService]
     */
    deliveryPointOfService?: PointOfService;
    /**
     * @member {number} [entryNumber]
     */
    entryNumber?: number;
    /**
     * @member {Product} [product]
     */
    product?: Product;
    /**
     * @member {number} [quantity]
     */
    quantity?: number;
    /**
     * @member {Price} [totalPrice]
     */
    totalPrice?: Price;
    /**
     * @member {boolean} [updateable]
     */
    updateable?: boolean;
}
/**
 * @interface
 * An interface representing DeliveryOrderEntryGroup.
 */
export interface DeliveryOrderEntryGroup {
    /**
     * @member {Address} [deliveryAddress]
     */
    deliveryAddress?: Address;
    /**
     * @member {OrderEntry[]} [entries]
     */
    entries?: OrderEntry[];
    /**
     * @member {number} [quantity]
     */
    quantity?: number;
    /**
     * @member {Price} [totalPriceWithTax]
     */
    totalPriceWithTax?: Price;
}
/**
 * @interface
 * An interface representing PaymentDetails.
 */
export interface PaymentDetails {
    /**
     * @member {string} [accountHolderName]
     */
    accountHolderName?: string;
    /**
     * @member {Address} [billingAddress]
     */
    billingAddress?: Address;
    /**
     * @member {string} [cardNumber]
     */
    cardNumber?: string;
    /**
     * @member {CardType} [cardType]
     */
    cardType?: CardType;
    /**
     * @member {boolean} [defaultPayment]
     */
    defaultPayment?: boolean;
    /**
     * @member {string} [expiryMonth]
     */
    expiryMonth?: string;
    /**
     * @member {string} [expiryYear]
     */
    expiryYear?: string;
    /**
     * @member {string} [id]
     */
    id?: string;
    /**
     * @member {string} [issueNumber]
     */
    issueNumber?: string;
    /**
     * @member {boolean} [saved]
     */
    saved?: boolean;
    /**
     * @member {string} [startMonth]
     */
    startMonth?: string;
    /**
     * @member {string} [startYear]
     */
    startYear?: string;
    /**
     * @member {string} [subscriptionId]
     */
    subscriptionId?: string;
}
/**
 * @interface
 * An interface representing PickupOrderEntryGroup.
 */
export interface PickupOrderEntryGroup {
    /**
     * @member {PointOfService} [deliveryPointOfService]
     */
    deliveryPointOfService?: PointOfService;
    /**
     * @member {number} [distance]
     */
    distance?: number;
    /**
     * @member {OrderEntry[]} [entries]
     */
    entries?: OrderEntry[];
    /**
     * @member {number} [quantity]
     */
    quantity?: number;
    /**
     * @member {Price} [totalPriceWithTax]
     */
    totalPriceWithTax?: Price;
}
/**
 * @interface
 * An interface representing Principal.
 */
export interface Principal {
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {string} [uid]
     */
    uid?: string;
}
/**
 * @interface
 * An interface representing Cart.
 */
export interface Cart {
    /**
     * @member {PromotionResult[]} [appliedOrderPromotions]
     */
    appliedOrderPromotions?: PromotionResult[];
    /**
     * @member {PromotionResult[]} [appliedProductPromotions]
     */
    appliedProductPromotions?: PromotionResult[];
    /**
     * @member {Voucher[]} [appliedVouchers]
     */
    appliedVouchers?: Voucher[];
    /**
     * @member {boolean} [calculated]
     */
    calculated?: boolean;
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {Address} [deliveryAddress]
     */
    deliveryAddress?: Address;
    /**
     * @member {Price} [deliveryCost]
     */
    deliveryCost?: Price;
    /**
     * @member {number} [deliveryItemsQuantity]
     */
    deliveryItemsQuantity?: number;
    /**
     * @member {DeliveryMode} [deliveryMode]
     */
    deliveryMode?: DeliveryMode;
    /**
     * @member {DeliveryOrderEntryGroup[]} [deliveryOrderGroups]
     */
    deliveryOrderGroups?: DeliveryOrderEntryGroup[];
    /**
     * @member {string} [description]
     */
    description?: string;
    /**
     * @member {OrderEntry[]} [entries]
     */
    entries?: OrderEntry[];
    /**
     * @member {Date} [expirationTime]
     */
    expirationTime?: Date;
    /**
     * @member {string} [guid]
     */
    guid?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {boolean} [net]
     */
    net?: boolean;
    /**
     * @member {Price} [orderDiscounts]
     */
    orderDiscounts?: Price;
    /**
     * @member {PaymentDetails} [paymentInfo]
     */
    paymentInfo?: PaymentDetails;
    /**
     * @member {number} [pickupItemsQuantity]
     */
    pickupItemsQuantity?: number;
    /**
     * @member {PickupOrderEntryGroup[]} [pickupOrderGroups]
     */
    pickupOrderGroups?: PickupOrderEntryGroup[];
    /**
     * @member {PromotionResult[]} [potentialOrderPromotions]
     */
    potentialOrderPromotions?: PromotionResult[];
    /**
     * @member {PromotionResult[]} [potentialProductPromotions]
     */
    potentialProductPromotions?: PromotionResult[];
    /**
     * @member {Price} [productDiscounts]
     */
    productDiscounts?: Price;
    /**
     * @member {Date} [saveTime]
     */
    saveTime?: Date;
    /**
     * @member {Principal} [savedBy]
     */
    savedBy?: Principal;
    /**
     * @member {string} [site]
     */
    site?: string;
    /**
     * @member {string} [store]
     */
    store?: string;
    /**
     * @member {Price} [subTotal]
     */
    subTotal?: Price;
    /**
     * @member {Price} [totalDiscounts]
     */
    totalDiscounts?: Price;
    /**
     * @member {number} [totalItems]
     */
    totalItems?: number;
    /**
     * @member {Price} [totalPrice]
     */
    totalPrice?: Price;
    /**
     * @member {Price} [totalPriceWithTax]
     */
    totalPriceWithTax?: Price;
    /**
     * @member {Price} [totalTax]
     */
    totalTax?: Price;
    /**
     * @member {number} [totalUnitCount]
     */
    totalUnitCount?: number;
    /**
     * @member {Principal} [user]
     */
    user?: Principal;
}
/**
 * @interface
 * An interface representing CartList.
 */
export interface CartList {
    /**
     * @member {Cart[]} [carts]
     */
    carts?: Cart[];
}
/**
 * @interface
 * An interface representing CartModification.
 */
export interface CartModification {
    /**
     * @member {boolean} [deliveryModeChanged]
     */
    deliveryModeChanged?: boolean;
    /**
     * @member {OrderEntry} [entry]
     */
    entry?: OrderEntry;
    /**
     * @member {number} [quantity]
     */
    quantity?: number;
    /**
     * @member {number} [quantityAdded]
     */
    quantityAdded?: number;
    /**
     * @member {string} [statusCode]
     */
    statusCode?: string;
    /**
     * @member {string} [statusMessage]
     */
    statusMessage?: string;
}
/**
 * @interface
 * An interface representing CartModificationList.
 */
export interface CartModificationList {
    /**
     * @member {CartModification[]} [cartModifications]
     */
    cartModifications?: CartModification[];
}
/**
 * @interface
 * An interface representing CategoryHierarchy.
 */
export interface CategoryHierarchy {
    /**
     * @member {string} [id]
     */
    id?: string;
    /**
     * @member {Date} [lastModified]
     */
    lastModified?: Date;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {CategoryHierarchy[]} [subcategories]
     */
    subcategories?: CategoryHierarchy[];
    /**
     * @member {string} [url]
     */
    url?: string;
}
/**
 * @interface
 * An interface representing CatalogVersion.
 */
export interface CatalogVersion {
    /**
     * @member {CategoryHierarchy[]} [categories]
     */
    categories?: CategoryHierarchy[];
    /**
     * @member {string} [id]
     */
    id?: string;
    /**
     * @member {Date} [lastModified]
     */
    lastModified?: Date;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {string} [url]
     */
    url?: string;
}
/**
 * @interface
 * An interface representing Catalog.
 */
export interface Catalog {
    /**
     * @member {CatalogVersion[]} [catalogVersions]
     */
    catalogVersions?: CatalogVersion[];
    /**
     * @member {string} [id]
     */
    id?: string;
    /**
     * @member {Date} [lastModified]
     */
    lastModified?: Date;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {string} [url]
     */
    url?: string;
}
/**
 * @interface
 * An interface representing CatalogList.
 */
export interface CatalogList {
    /**
     * @member {Catalog[]} [catalogs]
     */
    catalogs?: Catalog[];
}
/**
 * @interface
 * An interface representing ComponentIDList.
 */
export interface ComponentIDList {
    /**
     * @member {string[]} [idList]
     */
    idList?: string[];
}
/**
 * @interface
 * An interface representing Consent.
 */
export interface Consent {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {Date} [consentGivenDate]
     */
    consentGivenDate?: Date;
    /**
     * @member {Date} [consentWithdrawnDate]
     */
    consentWithdrawnDate?: Date;
}
/**
 * @interface
 * An interface representing ConsentTemplate.
 */
export interface ConsentTemplate {
    /**
     * @member {Consent} [currentConsent]
     */
    currentConsent?: Consent;
    /**
     * @member {string} [description]
     */
    description?: string;
    /**
     * @member {string} [id]
     */
    id?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {number} [version]
     */
    version?: number;
}
/**
 * @interface
 * An interface representing ConsentTemplateList.
 */
export interface ConsentTemplateList {
    /**
     * @member {ConsentTemplate[]} [consentTemplates]
     */
    consentTemplates?: ConsentTemplate[];
}
/**
 * @interface
 * An interface representing ConsignmentEntry.
 */
export interface ConsignmentEntry {
    /**
     * @member {OrderEntry} [orderEntry]
     */
    orderEntry?: OrderEntry;
    /**
     * @member {number} [quantity]
     */
    quantity?: number;
    /**
     * @member {number} [shippedQuantity]
     */
    shippedQuantity?: number;
}
/**
 * @interface
 * An interface representing Consignment.
 */
export interface Consignment {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {PointOfService} [deliveryPointOfService]
     */
    deliveryPointOfService?: PointOfService;
    /**
     * @member {ConsignmentEntry[]} [entries]
     */
    entries?: ConsignmentEntry[];
    /**
     * @member {Address} [shippingAddress]
     */
    shippingAddress?: Address;
    /**
     * @member {string} [status]
     */
    status?: string;
    /**
     * @member {Date} [statusDate]
     */
    statusDate?: Date;
    /**
     * @member {string} [trackingID]
     */
    trackingID?: string;
}
/**
 * @interface
 * An interface representing CountryList.
 */
export interface CountryList {
    /**
     * @member {Country[]} [countries]
     */
    countries?: Country[];
}
/**
 * @interface
 * An interface representing CurrencyList.
 */
export interface CurrencyList {
    /**
     * @member {Currency[]} [currencies]
     */
    currencies?: Currency[];
}
/**
 * @interface
 * An interface representing FacetValue.
 */
export interface FacetValue {
    /**
     * @member {number} [count]
     */
    count?: number;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {SearchState} [query]
     */
    query?: SearchState;
    /**
     * @member {boolean} [selected]
     */
    selected?: boolean;
}
/**
 * @interface
 * An interface representing Facet.
 */
export interface Facet {
    /**
     * @member {boolean} [category]
     */
    category?: boolean;
    /**
     * @member {boolean} [multiSelect]
     */
    multiSelect?: boolean;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {number} [priority]
     */
    priority?: number;
    /**
     * @member {FacetValue[]} [topValues]
     */
    topValues?: FacetValue[];
    /**
     * @member {FacetValue[]} [values]
     */
    values?: FacetValue[];
    /**
     * @member {boolean} [visible]
     */
    visible?: boolean;
}
/**
 * @interface
 * An interface representing LanguageList.
 */
export interface LanguageList {
    /**
     * @member {Language[]} [languages]
     */
    languages?: Language[];
}
/**
 * @interface
 * An interface representing Pagination.
 * Pagination info
 *
 */
export interface Pagination {
    /**
     * @member {number} [count] Number of elements on this page
     */
    count?: number;
    /**
     * @member {boolean} [hasNext] Indicates if there is next page
     */
    hasNext?: boolean;
    /**
     * @member {boolean} [hasPrevious] Indicates if there is previous page
     */
    hasPrevious?: boolean;
    /**
     * @member {number} [page] Current page number
     */
    page?: number;
    /**
     * @member {number} [totalCount] Total number of elements
     */
    totalCount?: number;
    /**
     * @member {number} [totalPages] Total number of pages
     */
    totalPages?: number;
}
/**
 * @interface
 * An interface representing Sort.
 * Sort option
 *
 */
export interface Sort {
    /**
     * @member {boolean} [asc]
     */
    asc?: boolean;
    /**
     * @member {string} [code]
     */
    code?: string;
}
/**
 * @interface
 * An interface representing ListAdaptedComponents.
 */
export interface ListAdaptedComponents {
    /**
     * @member {any[]} [components]
     */
    components?: any[];
    /**
     * @member {Pagination} [pagination]
     */
    pagination?: Pagination;
    /**
     * @member {Sort[]} [sorts]
     */
    sorts?: Sort[];
}
/**
 * @interface
 * An interface representing MemberList.
 */
export interface MemberList {
    /**
     * @member {Principal[]} [members]
     */
    members?: Principal[];
}
/**
 * @interface
 * An interface representing OrderEntryList.
 */
export interface OrderEntryList {
    /**
     * @member {OrderEntry[]} [orderEntries]
     */
    orderEntries?: OrderEntry[];
}
/**
 * @interface
 * An interface representing OrderHistory.
 */
export interface OrderHistory {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {string} [guid]
     */
    guid?: string;
    /**
     * @member {Date} [placed]
     */
    placed?: Date;
    /**
     * @member {string} [status]
     */
    status?: string;
    /**
     * @member {string} [statusDisplay]
     */
    statusDisplay?: string;
    /**
     * @member {Price} [total]
     */
    total?: Price;
}
/**
 * @interface
 * An interface representing PaginationModel.
 */
export interface PaginationModel {
    /**
     * @member {number} [currentPage]
     */
    currentPage?: number;
    /**
     * @member {number} [pageSize]
     */
    pageSize?: number;
    /**
     * @member {string} [sort]
     */
    sort?: string;
    /**
     * @member {number} [totalPages]
     */
    totalPages?: number;
    /**
     * @member {number} [totalResults]
     */
    totalResults?: number;
}
/**
 * @interface
 * An interface representing SortModel.
 */
export interface SortModel {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {boolean} [selected]
     */
    selected?: boolean;
}
/**
 * @interface
 * An interface representing OrderHistoryList.
 */
export interface OrderHistoryList {
    /**
     * @member {OrderHistory[]} [orders]
     */
    orders?: OrderHistory[];
    /**
     * @member {PaginationModel} [pagination]
     */
    pagination?: PaginationModel;
    /**
     * @member {SortModel[]} [sorts]
     */
    sorts?: SortModel[];
}
/**
 * @interface
 * An interface representing OrderStatusUpdateElement.
 */
export interface OrderStatusUpdateElement {
    /**
     * @member {string} [baseSiteId]
     */
    baseSiteId?: string;
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {string} [status]
     */
    status?: string;
}
/**
 * @interface
 * An interface representing OrderStatusUpdateElementList.
 */
export interface OrderStatusUpdateElementList {
    /**
     * @member {OrderStatusUpdateElement[]} [orderStatusUpdateElements]
     */
    orderStatusUpdateElements?: OrderStatusUpdateElement[];
}
/**
 * @interface
 * An interface representing Order.
 */
export interface Order {
    /**
     * @member {PromotionResult[]} [appliedOrderPromotions]
     */
    appliedOrderPromotions?: PromotionResult[];
    /**
     * @member {PromotionResult[]} [appliedProductPromotions]
     */
    appliedProductPromotions?: PromotionResult[];
    /**
     * @member {Voucher[]} [appliedVouchers]
     */
    appliedVouchers?: Voucher[];
    /**
     * @member {boolean} [calculated]
     */
    calculated?: boolean;
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {Consignment[]} [consignments]
     */
    consignments?: Consignment[];
    /**
     * @member {Date} [created]
     */
    created?: Date;
    /**
     * @member {Address} [deliveryAddress]
     */
    deliveryAddress?: Address;
    /**
     * @member {Price} [deliveryCost]
     */
    deliveryCost?: Price;
    /**
     * @member {number} [deliveryItemsQuantity]
     */
    deliveryItemsQuantity?: number;
    /**
     * @member {DeliveryMode} [deliveryMode]
     */
    deliveryMode?: DeliveryMode;
    /**
     * @member {DeliveryOrderEntryGroup[]} [deliveryOrderGroups]
     */
    deliveryOrderGroups?: DeliveryOrderEntryGroup[];
    /**
     * @member {string} [deliveryStatus]
     */
    deliveryStatus?: string;
    /**
     * @member {string} [deliveryStatusDisplay]
     */
    deliveryStatusDisplay?: string;
    /**
     * @member {OrderEntry[]} [entries]
     */
    entries?: OrderEntry[];
    /**
     * @member {boolean} [guestCustomer]
     */
    guestCustomer?: boolean;
    /**
     * @member {string} [guid]
     */
    guid?: string;
    /**
     * @member {boolean} [net]
     */
    net?: boolean;
    /**
     * @member {Price} [orderDiscounts]
     */
    orderDiscounts?: Price;
    /**
     * @member {PaymentDetails} [paymentInfo]
     */
    paymentInfo?: PaymentDetails;
    /**
     * @member {number} [pickupItemsQuantity]
     */
    pickupItemsQuantity?: number;
    /**
     * @member {PickupOrderEntryGroup[]} [pickupOrderGroups]
     */
    pickupOrderGroups?: PickupOrderEntryGroup[];
    /**
     * @member {Price} [productDiscounts]
     */
    productDiscounts?: Price;
    /**
     * @member {string} [site]
     */
    site?: string;
    /**
     * @member {string} [status]
     */
    status?: string;
    /**
     * @member {string} [statusDisplay]
     */
    statusDisplay?: string;
    /**
     * @member {string} [store]
     */
    store?: string;
    /**
     * @member {Price} [subTotal]
     */
    subTotal?: Price;
    /**
     * @member {Price} [totalDiscounts]
     */
    totalDiscounts?: Price;
    /**
     * @member {number} [totalItems]
     */
    totalItems?: number;
    /**
     * @member {Price} [totalPrice]
     */
    totalPrice?: Price;
    /**
     * @member {Price} [totalPriceWithTax]
     */
    totalPriceWithTax?: Price;
    /**
     * @member {Price} [totalTax]
     */
    totalTax?: Price;
    /**
     * @member {OrderEntry[]} [unconsignedEntries]
     */
    unconsignedEntries?: OrderEntry[];
    /**
     * @member {Principal} [user]
     */
    user?: Principal;
}
/**
 * @interface
 * An interface representing PaymentDetailsList.
 */
export interface PaymentDetailsList {
    /**
     * @member {PaymentDetails[]} [payments]
     */
    payments?: PaymentDetails[];
}
/**
 * @interface
 * An interface representing PaymentRequest.
 */
export interface PaymentRequest {
    /**
     * @member {{ [propertyName: string]: string }} [mappingLabels]
     */
    mappingLabels?: {
        [propertyName: string]: string;
    };
    /**
     * @member {{ [propertyName: string]: string }} [parameters]
     */
    parameters?: {
        [propertyName: string]: string;
    };
    /**
     * @member {string} [postUrl]
     */
    postUrl?: string;
}
/**
 * @interface
 * An interface representing PointOfServiceList.
 */
export interface PointOfServiceList {
    /**
     * @member {PointOfService[]} [pointOfServices]
     */
    pointOfServices?: PointOfService[];
}
/**
 * @interface
 * An interface representing PointOfServiceStock.
 */
export interface PointOfServiceStock {
    /**
     * @member {Address} [address]
     */
    address?: Address;
    /**
     * @member {string} [description]
     */
    description?: string;
    /**
     * @member {string} [displayName]
     */
    displayName?: string;
    /**
     * @member {number} [distanceKm]
     */
    distanceKm?: number;
    /**
     * @member {{ [propertyName: string]: string }} [features]
     */
    features?: {
        [propertyName: string]: string;
    };
    /**
     * @member {string} [formattedDistance]
     */
    formattedDistance?: string;
    /**
     * @member {GeoPoint} [geoPoint]
     */
    geoPoint?: GeoPoint;
    /**
     * @member {Image} [mapIcon]
     */
    mapIcon?: Image;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {OpeningSchedule} [openingHours]
     */
    openingHours?: OpeningSchedule;
    /**
     * @member {Stock} [stockInfo]
     */
    stockInfo?: Stock;
    /**
     * @member {string} [storeContent]
     */
    storeContent?: string;
    /**
     * @member {Image[]} [storeImages]
     */
    storeImages?: Image[];
    /**
     * @member {string} [url]
     */
    url?: string;
}
/**
 * @interface
 * An interface representing ProductExpressUpdateElement.
 */
export interface ProductExpressUpdateElement {
    /**
     * @member {string} [catalogId]
     */
    catalogId?: string;
    /**
     * @member {string} [catalogVersion]
     */
    catalogVersion?: string;
    /**
     * @member {string} [code]
     */
    code?: string;
}
/**
 * @interface
 * An interface representing ProductExpressUpdateElementList.
 */
export interface ProductExpressUpdateElementList {
    /**
     * @member {ProductExpressUpdateElement[]} [productExpressUpdateElements]
     */
    productExpressUpdateElements?: ProductExpressUpdateElement[];
}
/**
 * @interface
 * An interface representing ProductList.
 */
export interface ProductList {
    /**
     * @member {string} [catalog]
     */
    catalog?: string;
    /**
     * @member {number} [currentPage]
     */
    currentPage?: number;
    /**
     * @member {Product[]} [products]
     */
    products?: Product[];
    /**
     * @member {number} [totalPageCount]
     */
    totalPageCount?: number;
    /**
     * @member {number} [totalProductCount]
     */
    totalProductCount?: number;
    /**
     * @member {string} [version]
     */
    version?: string;
}
/**
 * @interface
 * An interface representing ProductReferenceList.
 */
export interface ProductReferenceList {
    /**
     * @member {ProductReference[]} [references]
     */
    references?: ProductReference[];
}
/**
 * @interface
 * An interface representing SpellingSuggestion.
 */
export interface SpellingSuggestion {
    /**
     * @member {string} [query]
     */
    query?: string;
    /**
     * @member {string} [suggestion]
     */
    suggestion?: string;
}
/**
 * @interface
 * An interface representing ProductSearchPage.
 */
export interface ProductSearchPage {
    /**
     * @member {Breadcrumb[]} [breadcrumbs]
     */
    breadcrumbs?: Breadcrumb[];
    /**
     * @member {string} [categoryCode]
     */
    categoryCode?: string;
    /**
     * @member {SearchState} [currentQuery]
     */
    currentQuery?: SearchState;
    /**
     * @member {Facet[]} [facets]
     */
    facets?: Facet[];
    /**
     * @member {string} [freeTextSearch]
     */
    freeTextSearch?: string;
    /**
     * @member {string} [keywordRedirectUrl]
     */
    keywordRedirectUrl?: string;
    /**
     * @member {PaginationModel} [pagination]
     */
    pagination?: PaginationModel;
    /**
     * @member {Product[]} [products]
     */
    products?: Product[];
    /**
     * @member {SortModel[]} [sorts]
     */
    sorts?: SortModel[];
    /**
     * @member {SpellingSuggestion} [spellingSuggestion]
     */
    spellingSuggestion?: SpellingSuggestion;
}
/**
 * @interface
 * An interface representing PromotionList.
 */
export interface PromotionList {
    /**
     * @member {Promotion[]} [promotions]
     */
    promotions?: Promotion[];
}
/**
 * @interface
 * An interface representing PromotionResultList.
 */
export interface PromotionResultList {
    /**
     * @member {PromotionResult[]} [promotions]
     */
    promotions?: PromotionResult[];
}
/**
 * @interface
 * An interface representing RegionList.
 */
export interface RegionList {
    /**
     * @member {Region[]} [regions]
     */
    regions?: Region[];
}
/**
 * @interface
 * An interface representing ReviewList.
 */
export interface ReviewList {
    /**
     * @member {Review[]} [reviews]
     */
    reviews?: Review[];
}
/**
 * @interface
 * An interface representing SaveCartResult.
 */
export interface SaveCartResult {
    /**
     * @member {Cart} [savedCartData]
     */
    savedCartData?: Cart;
}
/**
 * @interface
 * An interface representing StoreFinderSearchPage.
 */
export interface StoreFinderSearchPage {
    /**
     * @member {number} [boundEastLongitude]
     */
    boundEastLongitude?: number;
    /**
     * @member {number} [boundNorthLatitude]
     */
    boundNorthLatitude?: number;
    /**
     * @member {number} [boundSouthLatitude]
     */
    boundSouthLatitude?: number;
    /**
     * @member {number} [boundWestLongitude]
     */
    boundWestLongitude?: number;
    /**
     * @member {string} [locationText]
     */
    locationText?: string;
    /**
     * @member {PaginationModel} [pagination]
     */
    pagination?: PaginationModel;
    /**
     * @member {SortModel[]} [sorts]
     */
    sorts?: SortModel[];
    /**
     * @member {number} [sourceLatitude]
     */
    sourceLatitude?: number;
    /**
     * @member {number} [sourceLongitude]
     */
    sourceLongitude?: number;
    /**
     * @member {PointOfService[]} [stores]
     */
    stores?: PointOfService[];
}
/**
 * @interface
 * An interface representing StoreFinderStockSearchPage.
 */
export interface StoreFinderStockSearchPage {
    /**
     * @member {number} [boundEastLongitude]
     */
    boundEastLongitude?: number;
    /**
     * @member {number} [boundNorthLatitude]
     */
    boundNorthLatitude?: number;
    /**
     * @member {number} [boundSouthLatitude]
     */
    boundSouthLatitude?: number;
    /**
     * @member {number} [boundWestLongitude]
     */
    boundWestLongitude?: number;
    /**
     * @member {string} [locationText]
     */
    locationText?: string;
    /**
     * @member {PaginationModel} [pagination]
     */
    pagination?: PaginationModel;
    /**
     * @member {Product} [product]
     */
    product?: Product;
    /**
     * @member {SortModel[]} [sorts]
     */
    sorts?: SortModel[];
    /**
     * @member {number} [sourceLatitude]
     */
    sourceLatitude?: number;
    /**
     * @member {number} [sourceLongitude]
     */
    sourceLongitude?: number;
    /**
     * @member {PointOfServiceStock[]} [stores]
     */
    stores?: PointOfServiceStock[];
}
/**
 * @interface
 * An interface representing Suggestion.
 */
export interface Suggestion {
    /**
     * @member {string} [value]
     */
    value?: string;
}
/**
 * @interface
 * An interface representing SuggestionList.
 */
export interface SuggestionList {
    /**
     * @member {Suggestion[]} [suggestions]
     */
    suggestions?: Suggestion[];
}
/**
 * @interface
 * An interface representing Title.
 */
export interface Title {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {string} [name]
     */
    name?: string;
}
/**
 * @interface
 * An interface representing TitleList.
 */
export interface TitleList {
    /**
     * @member {Title[]} [titles]
     */
    titles?: Title[];
}
/**
 * @interface
 * An interface representing UserGroup.
 */
export interface UserGroup {
    /**
     * @member {Principal[]} [members]
     */
    members?: Principal[];
    /**
     * @member {number} [membersCount]
     */
    membersCount?: number;
    /**
     * @member {string} [name]
     */
    name?: string;
    /**
     * @member {UserGroup[]} [subGroups]
     */
    subGroups?: UserGroup[];
    /**
     * @member {string} [uid]
     */
    uid?: string;
}
/**
 * @interface
 * An interface representing UserGroupList.
 */
export interface UserGroupList {
    /**
     * @member {number} [currentPage]
     */
    currentPage?: number;
    /**
     * @member {number} [numberOfPages]
     */
    numberOfPages?: number;
    /**
     * @member {number} [pageSize]
     */
    pageSize?: number;
    /**
     * @member {number} [totalNumber]
     */
    totalNumber?: number;
    /**
     * @member {UserGroup[]} [userGroups]
     */
    userGroups?: UserGroup[];
}
/**
 * @interface
 * An interface representing UserSignUp.
 */
export interface UserSignUp {
    /**
     * @member {string} [firstName]
     */
    firstName?: string;
    /**
     * @member {string} [lastName]
     */
    lastName?: string;
    /**
     * @member {string} [password]
     */
    password?: string;
    /**
     * @member {string} [titleCode]
     */
    titleCode?: string;
    /**
     * @member {string} [uid]
     */
    uid?: string;
}
/**
 * @interface
 * An interface representing VoucherList.
 */
export interface VoucherList {
    /**
     * @member {Voucher[]} [vouchers]
     */
    vouchers?: Voucher[];
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2Options.
 * @extends ServiceClientOptions
 */
export interface CommerceWebservicesV2Options extends ServiceClientOptions {
    /**
     * @member {string} [baseUri]
     */
    baseUri?: string;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetBaseStoreOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetBaseStoreOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCardTypesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCardTypesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields1} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields1;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCatalogsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCatalogsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields2} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields2;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCatalogOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCatalogOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields3} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields3;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCatalogVersionOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCatalogVersionOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields4} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields4;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCategoriesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCategoriesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields5} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields5;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetComponentByIdListUsingPOSTOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetComponentByIdListUsingPOSTOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [catalogCode] Catalog code
     */
    catalogCode?: string;
    /**
     * @member {string} [productCode] Product code
     */
    productCode?: string;
    /**
     * @member {string} [categoryCode] Category code
     */
    categoryCode?: string;
    /**
     * @member {Fields6} [fields] Response configuration (list of fields, which
     * should be returned in response). Possible values include: 'BASIC',
     * 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields6;
    /**
     * @member {number} [currentPage] Optional pagination parameter. Default
     * value 0. Default value: 0 .
     */
    currentPage?: number;
    /**
     * @member {number} [pageSize] Optional pagination parameter. Default value
     * 10. Default value: 10 .
     */
    pageSize?: number;
    /**
     * @member {string} [sort] Optional sort criterion. No default value.
     */
    sort?: string;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetComponentByIdUsingGETOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetComponentByIdUsingGETOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [catalogCode] Catalog code
     */
    catalogCode?: string;
    /**
     * @member {string} [productCode] Product code
     */
    productCode?: string;
    /**
     * @member {string} [categoryCode] Category code
     */
    categoryCode?: string;
    /**
     * @member {Fields7} [fields] Response configuration (list of fields, which
     * should be returned in response). Possible values include: 'BASIC',
     * 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields7;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetPageDataUsingGETOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetPageDataUsingGETOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {PageType} [pageType] page type. Possible values include:
     * 'ContentPage', 'ProductPage', 'CategoryPage', 'CatalogPage'. Default
     * value: 'ContentPage' .
     */
    pageType?: PageType;
    /**
     * @member {string} [pageLabelOrId] Page Label or Id
     */
    pageLabelOrId?: string;
    /**
     * @member {string} [code] If pageType is ProductPage, code should be product
     * code; if pageType is CategoryPage, code should be category code; if
     * pageType is CatalogPage, code should be catalog code
     */
    code?: string;
    /**
     * @member {Fields8} [fields] Response configuration (list of fields, which
     * should be returned in response). Possible values include: 'BASIC',
     * 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields8;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCountriesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCountriesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Type} [type] The type of countries. Possible values include:
     * 'SHIPPING', 'BILLING'
     */
    type?: Type;
    /**
     * @member {Fields9} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields9;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCountryRegionsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCountryRegionsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields10} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields10;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCurrenciesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCurrenciesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields11} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields11;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCustomerGroupsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCustomerGroupsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {number} [currentPage] Current page number (starts with 0).
     * Default value: 0 .
     */
    currentPage?: number;
    /**
     * @member {number} [pageSize] Number of customer group returned in one page.
     * Default value: 20 .
     */
    pageSize?: number;
    /**
     * @member {Fields12} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'BASIC' .
     */
    fields?: Fields12;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCustomerGroupOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCustomerGroupOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields13} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'BASIC' .
     */
    fields?: Fields13;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetDeliveryCountriesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetDeliveryCountriesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields14} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields14;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetExportedProductsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetExportedProductsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields15} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields15;
    /**
     * @member {number} [currentPage] The current result page requested. Default
     * value: 0 .
     */
    currentPage?: number;
    /**
     * @member {number} [pageSize] The number of results returned per page.
     * Default value: 20 .
     */
    pageSize?: number;
    /**
     * @member {string} [catalog] The catalog to retrieve products from. The
     * catalog must be provided along with the version.
     */
    catalog?: string;
    /**
     * @member {string} [version] The catalog version. The catalog version must
     * be provided along with the catalog.
     */
    version?: string;
    /**
     * @member {string} [timestamp] When this parameter is set, only products
     * modified after the given time will be returned. This parameter should be
     * in ISO-8601 format (for example, 2018-01-09T16:28:45+0000).
     */
    timestamp?: string;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetOrderStatusFeedOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetOrderStatusFeedOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields16} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields16;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetLanguagesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetLanguagesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields17} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields17;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetOrderOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetOrderOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields18} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields18;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetExpressUpdateProductsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetExpressUpdateProductsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [catalog] Only products from this catalog are returned.
     * Format: catalogId:catalogVersion
     */
    catalog?: string;
    /**
     * @member {Fields19} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields19;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetProductsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetProductsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [query] Serialized query, free text search, facets. The
     * format of a serialized query:
     * freeTextSearch:sort:facetKey1:facetValue1:facetKey2:facetValue2
     */
    query?: string;
    /**
     * @member {number} [currentPage] The current result page requested. Default
     * value: 0 .
     */
    currentPage?: number;
    /**
     * @member {number} [pageSize] The number of results returned per page.
     * Default value: 20 .
     */
    pageSize?: number;
    /**
     * @member {SortEnum} [sort] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'
     */
    sort?: SortEnum;
    /**
     * @member {string} [fields] The context to be used in the search query.
     * Default value: 'DEFAULT' .
     */
    fields?: string;
    /**
     * @member {string} [searchQueryContext] searchQueryContext
     */
    searchQueryContext?: string;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2CountProductsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2CountProductsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [query] Serialized query, free text search, facets. The
     * format of a serialized query:
     * freeTextSearch:sort:facetKey1:facetValue1:facetKey2:facetValue2
     */
    query?: string;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetSuggestionsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetSuggestionsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields20} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields20;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetProductOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetProductOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields21} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields21;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetProductReferencesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetProductReferencesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {number} [pageSize] Maximum size of returned results. Default
     * value: 2147483647 .
     */
    pageSize?: number;
    /**
     * @member {Fields22} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields22;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetProductReviewsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetProductReviewsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {number} [maxCount] Maximum count of reviews
     */
    maxCount?: number;
    /**
     * @member {Fields23} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields23;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2CreateProductReviewOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2CreateProductReviewOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields24} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields24;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetLocationProductStockOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetLocationProductStockOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [location] Free-text location
     */
    location?: string;
    /**
     * @member {number} [latitude] Latitude location parameter.
     */
    latitude?: number;
    /**
     * @member {number} [longitude] Longitude location parameter.
     */
    longitude?: number;
    /**
     * @member {number} [currentPage] The current result page requested. Default
     * value: 0 .
     */
    currentPage?: number;
    /**
     * @member {number} [pageSize] The number of results returned per page.
     * Default value: 20 .
     */
    pageSize?: number;
    /**
     * @member {Fields25} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields25;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2CountProductStockByLocationOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2CountProductStockByLocationOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [location] Free-text location
     */
    location?: string;
    /**
     * @member {number} [latitude] Latitude location parameter.
     */
    latitude?: number;
    /**
     * @member {number} [longitude] Longitude location parameter.
     */
    longitude?: number;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetStoreProductStockOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetStoreProductStockOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields26} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields26;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetPromotionsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetPromotionsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [promotionGroup] Only promotions from this group are
     * returned
     */
    promotionGroup?: string;
    /**
     * @member {Fields27} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'BASIC' .
     */
    fields?: Fields27;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetPromotionOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetPromotionOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields28} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'BASIC' .
     */
    fields?: Fields28;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetStoreLocationsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetStoreLocationsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [query] Location in natural language i.e. city or
     * country.
     */
    query?: string;
    /**
     * @member {number} [latitude] Coordinate that specifies the north-south
     * position of a point on the Earth's surface.
     */
    latitude?: number;
    /**
     * @member {number} [longitude] Coordinate that specifies the east-west
     * position of a point on the Earth's surface.
     */
    longitude?: number;
    /**
     * @member {number} [currentPage] The current result page requested. Default
     * value: 0 .
     */
    currentPage?: number;
    /**
     * @member {number} [pageSize] The number of results returned per page.
     * Default value: 20 .
     */
    pageSize?: number;
    /**
     * @member {string} [sort] Sorting method applied to the return results.
     * Default value: 'asc' .
     */
    sort?: string;
    /**
     * @member {number} [radius] Radius in meters. Max value: 40075000.0 (Earth's
     * perimeter). Default value: 100000 .
     */
    radius?: number;
    /**
     * @member {number} [accuracy] Accuracy in meters. Default value: 0 .
     */
    accuracy?: number;
    /**
     * @member {Fields29} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields29;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2CountStoreLocationsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2CountStoreLocationsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [query] Location in natural language i.e. city or
     * country.
     */
    query?: string;
    /**
     * @member {number} [latitude] Coordinate that specifies the north-south
     * position of a point on the Earth's surface.
     */
    latitude?: number;
    /**
     * @member {number} [longitude] Coordinate that specifies the east-west
     * position of a point on the Earth's surface.
     */
    longitude?: number;
    /**
     * @member {number} [radius] Radius in meters. Max value: 40075000.0 (Earth's
     * perimeter). Default value: 100000 .
     */
    radius?: number;
    /**
     * @member {number} [accuracy] Accuracy in meters. Default value: 0 .
     */
    accuracy?: number;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetStoreLocationOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetStoreLocationOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields30} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields30;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetTitlesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetTitlesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields31} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields31;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2CreateUserOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2CreateUserOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields32} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields32;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetUserOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetUserOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields33} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields33;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetAddressesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetAddressesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields34} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields34;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2CreateAddressOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2CreateAddressOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields35} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields35;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2ValidateAddressOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2ValidateAddressOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields36} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields36;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetAddressOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetAddressOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields37} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields37;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCartsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCartsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields38} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields38;
    /**
     * @member {boolean} [savedCartsOnly] Optional parameter. If the parameter is
     * provided and its value is true, only saved carts are returned. Default
     * value: false .
     */
    savedCartsOnly?: boolean;
    /**
     * @member {number} [currentPage] Optional pagination parameter in case of
     * savedCartsOnly == true. Default value 0. Default value: 0 .
     */
    currentPage?: number;
    /**
     * @member {number} [pageSize] Optional {@link PaginationData} parameter in
     * case of savedCartsOnly == true. Default value 20. Default value: 20 .
     */
    pageSize?: number;
    /**
     * @member {string} [sort] Optional sort criterion in case of savedCartsOnly
     * == true. No default value.
     */
    sort?: string;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2CreateCartOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2CreateCartOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [oldCartId] Anonymous cart GUID.
     */
    oldCartId?: string;
    /**
     * @member {string} [toMergeCartGuid] The GUID of the user's cart that will
     * be merged with the anonymous cart.
     */
    toMergeCartGuid?: string;
    /**
     * @member {Fields39} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields39;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCartOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCartOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields40} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields40;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2CreateCartDeliveryAddressOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2CreateCartDeliveryAddressOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields41} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields41;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2DoCartCloneOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2DoCartCloneOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [name] The name that should be applied to the cloned
     * cart.
     */
    name?: string;
    /**
     * @member {string} [description] The description that should be applied to
     * the cloned cart.
     */
    description?: string;
    /**
     * @member {Fields42} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields42;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetConsolidatedPickupLocationsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetConsolidatedPickupLocationsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields43} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields43;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2CreateConsolidatedPickupLocationOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2CreateConsolidatedPickupLocationOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields44} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields44;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCartDeliveryModeOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCartDeliveryModeOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields45} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields45;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCartDeliveryModesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCartDeliveryModesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields46} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields46;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCartEntriesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCartEntriesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields47} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields47;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2CreateCartEntryOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2CreateCartEntryOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields48} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields48;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCartEntryOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCartEntryOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields49} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields49;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2ReplaceCartEntryOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2ReplaceCartEntryOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields50} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields50;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2UpdateCartEntryOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2UpdateCartEntryOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields51} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields51;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2DoUpdateFlagForDeletionOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2DoUpdateFlagForDeletionOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields52} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields52;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetSopPaymentRequestDetailsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetSopPaymentRequestDetailsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {boolean} [extendedMerchantCallback] Define which url should be
     * returned. Default value: false .
     */
    extendedMerchantCallback?: boolean;
    /**
     * @member {Fields53} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields53;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetSopPaymentResponseOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetSopPaymentResponseOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields54} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields54;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2CreateCartPaymentDetailsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2CreateCartPaymentDetailsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields55} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields55;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCartPromotionsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCartPromotionsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields56} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields56;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCartPromotionOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCartPromotionOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields57} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields57;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2DoUpdateSavedCartOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2DoUpdateSavedCartOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields58} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields58;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2DoSaveCartOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2DoSaveCartOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [saveCartName] The name that should be applied to the
     * saved cart.
     */
    saveCartName?: string;
    /**
     * @member {string} [saveCartDescription] The description that should be
     * applied to the saved cart.
     */
    saveCartDescription?: string;
    /**
     * @member {Fields59} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields59;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetSavedCartOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetSavedCartOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields60} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields60;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetCartVouchersOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetCartVouchersOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields61} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields61;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetConsentTemplatesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetConsentTemplatesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields62} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields62;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetConsentTemplateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetConsentTemplateOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields63} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields63;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetUserCustomerGroupsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetUserCustomerGroupsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields64} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields64;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetUserOrderHistoryOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetUserOrderHistoryOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [statuses] Filters only certain order statuses. For
     * example, statuses=CANCELLED,CHECKED_VALID would only return orders with
     * status CANCELLED or CHECKED_VALID.
     */
    statuses?: string;
    /**
     * @member {number} [currentPage] The current result page requested. Default
     * value: 0 .
     */
    currentPage?: number;
    /**
     * @member {number} [pageSize] The number of results returned per page.
     * Default value: 20 .
     */
    pageSize?: number;
    /**
     * @member {string} [sort] Sorting method applied to the return results.
     */
    sort?: string;
    /**
     * @member {Fields65} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields65;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2CountUserOrdersOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2CountUserOrdersOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [statuses] Filters only certain order statuses. For
     * example, statuses=CANCELLED,CHECKED_VALID would only return orders with
     * status CANCELLED or CHECKED_VALID.
     */
    statuses?: string;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2PlaceOrderOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2PlaceOrderOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [securityCode] CCV security code.
     */
    securityCode?: string;
    /**
     * @member {Fields66} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields66;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetUserOrdersOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetUserOrdersOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields67} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields67;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2ReplaceUserPasswordOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2ReplaceUserPasswordOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [old] Old password. Required only for ROLE_CUSTOMERGROUP
     */
    old?: string;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetPaymentDetailsListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetPaymentDetailsListOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields68} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields68;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetPaymentDetailsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetPaymentDetailsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields69} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'DEFAULT' .
     */
    fields?: Fields69;
}
/**
 * @interface
 * An interface representing CommerceWebservicesV2GetVoucherOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CommerceWebservicesV2GetVoucherOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {Fields70} [fields] Response configuration. This is the list of
     * fields that should be returned in the response body. Possible values
     * include: 'BASIC', 'DEFAULT', 'FULL'. Default value: 'BASIC' .
     */
    fields?: Fields70;
}
/**
 * Defines values for PriceType.
 * Possible values include: 'BUY', 'FROM'
 * @readonly
 * @enum {string}
 */
export declare type PriceType = 'BUY' | 'FROM';
/**
 * Defines values for ImageType.
 * Possible values include: 'PRIMARY', 'GALLERY'
 * @readonly
 * @enum {string}
 */
export declare type ImageType = 'PRIMARY' | 'GALLERY';
/**
 * Defines values for Fields.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields1.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields1 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields2.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields2 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields3.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields3 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields4.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields4 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields5.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields5 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields6.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields6 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields7.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields7 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for PageType.
 * Possible values include: 'ContentPage', 'ProductPage', 'CategoryPage', 'CatalogPage'
 * @readonly
 * @enum {string}
 */
export declare type PageType = 'ContentPage' | 'ProductPage' | 'CategoryPage' | 'CatalogPage';
/**
 * Defines values for Fields8.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields8 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Type.
 * Possible values include: 'SHIPPING', 'BILLING'
 * @readonly
 * @enum {string}
 */
export declare type Type = 'SHIPPING' | 'BILLING';
/**
 * Defines values for Fields9.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields9 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields10.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields10 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields11.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields11 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields12.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields12 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields13.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields13 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields14.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields14 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields15.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields15 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields16.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields16 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields17.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields17 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields18.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields18 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields19.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields19 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for SortEnum.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type SortEnum = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields20.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields20 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields21.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields21 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields22.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields22 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields23.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields23 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields24.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields24 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields25.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields25 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields26.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields26 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields27.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields27 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields28.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields28 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields29.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields29 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields30.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields30 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields31.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields31 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields32.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields32 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields33.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields33 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields34.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields34 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields35.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields35 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields36.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields36 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields37.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields37 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields38.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields38 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields39.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields39 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields40.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields40 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields41.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields41 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields42.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields42 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields43.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields43 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields44.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields44 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields45.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields45 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields46.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields46 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields47.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields47 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields48.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields48 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields49.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields49 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields50.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields50 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields51.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields51 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields52.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields52 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields53.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields53 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields54.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields54 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields55.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields55 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields56.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields56 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields57.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields57 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields58.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields58 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields59.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields59 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields60.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields60 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields61.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields61 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields62.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields62 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields63.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields63 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields64.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields64 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields65.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields65 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields66.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields66 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields67.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields67 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields68.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields68 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields69.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields69 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Fields70.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields70 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Defines values for Type1.
 * Possible values include: 'all', 'product', 'order'
 * @readonly
 * @enum {string}
 */
export declare type Type1 = 'all' | 'product' | 'order';
/**
 * Defines values for Fields71.
 * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare type Fields71 = 'BASIC' | 'DEFAULT' | 'FULL';
/**
 * Contains response data for the getBaseStore operation.
 */
export declare type GetBaseStoreResponse = BaseStore & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: BaseStore;
    };
};
/**
 * Contains response data for the getCardTypes operation.
 */
export declare type GetCardTypesResponse = CardTypeList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CardTypeList;
    };
};
/**
 * Contains response data for the getCatalogs operation.
 */
export declare type GetCatalogsResponse = CatalogList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CatalogList;
    };
};
/**
 * Contains response data for the getCatalog operation.
 */
export declare type GetCatalogResponse = Catalog & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: Catalog;
    };
};
/**
 * Contains response data for the getCatalogVersion operation.
 */
export declare type GetCatalogVersionResponse = CatalogVersion & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CatalogVersion;
    };
};
/**
 * Contains response data for the getCategories operation.
 */
export declare type GetCategoriesResponse = CategoryHierarchy & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CategoryHierarchy;
    };
};
/**
 * Contains response data for the getComponentByIdListUsingPOST operation.
 */
export declare type GetComponentByIdListUsingPOSTResponse = ListAdaptedComponents & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: ListAdaptedComponents;
    };
};
/**
 * Contains response data for the getComponentByIdUsingGET operation.
 */
export declare type GetComponentByIdUsingGETResponse = {
    /**
     * The parsed response body.
     */
    body: any;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: any;
    };
};
/**
 * Contains response data for the getPageDataUsingGET operation.
 */
export declare type GetPageDataUsingGETResponse = CMSPage & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CMSPage;
    };
};
/**
 * Contains response data for the getCountries operation.
 */
export declare type GetCountriesResponse = CountryList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CountryList;
    };
};
/**
 * Contains response data for the getCountryRegions operation.
 */
export declare type GetCountryRegionsResponse = RegionList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: RegionList;
    };
};
/**
 * Contains response data for the getCurrencies operation.
 */
export declare type GetCurrenciesResponse = CurrencyList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CurrencyList;
    };
};
/**
 * Contains response data for the getCustomerGroups operation.
 */
export declare type GetCustomerGroupsResponse = UserGroupList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: UserGroupList;
    };
};
/**
 * Contains response data for the getCustomerGroup operation.
 */
export declare type GetCustomerGroupResponse = UserGroup & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: UserGroup;
    };
};
/**
 * Contains response data for the getDeliveryCountries operation.
 */
export declare type GetDeliveryCountriesResponse = CountryList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CountryList;
    };
};
/**
 * Contains response data for the getExportedProducts operation.
 */
export declare type GetExportedProductsResponse = ProductList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: ProductList;
    };
};
/**
 * Contains response data for the getOrderStatusFeed operation.
 */
export declare type GetOrderStatusFeedResponse = OrderStatusUpdateElementList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: OrderStatusUpdateElementList;
    };
};
/**
 * Contains response data for the getLanguages operation.
 */
export declare type GetLanguagesResponse = LanguageList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: LanguageList;
    };
};
/**
 * Contains response data for the getOrder operation.
 */
export declare type GetOrderResponse = Order & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: Order;
    };
};
/**
 * Contains response data for the getExpressUpdateProducts operation.
 */
export declare type GetExpressUpdateProductsResponse = ProductExpressUpdateElementList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: ProductExpressUpdateElementList;
    };
};
/**
 * Contains response data for the getProducts operation.
 */
export declare type GetProductsResponse = ProductSearchPage & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: ProductSearchPage;
    };
};
/**
 * Contains response data for the getSuggestions operation.
 */
export declare type GetSuggestionsResponse = SuggestionList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: SuggestionList;
    };
};
/**
 * Contains response data for the getProduct operation.
 */
export declare type GetProductResponse = Product & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: Product;
    };
};
/**
 * Contains response data for the getProductReferences operation.
 */
export declare type GetProductReferencesResponse = ProductReferenceList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: ProductReferenceList;
    };
};
/**
 * Contains response data for the getProductReviews operation.
 */
export declare type GetProductReviewsResponse = ReviewList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: ReviewList;
    };
};
/**
 * Contains response data for the createProductReview operation.
 */
export declare type CreateProductReviewResponse = Review & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: Review;
    };
};
/**
 * Contains response data for the getLocationProductStock operation.
 */
export declare type GetLocationProductStockResponse = StoreFinderStockSearchPage & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: StoreFinderStockSearchPage;
    };
};
/**
 * Contains response data for the getStoreProductStock operation.
 */
export declare type GetStoreProductStockResponse = Stock & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: Stock;
    };
};
/**
 * Contains response data for the getPromotions operation.
 */
export declare type GetPromotionsResponse = PromotionList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: PromotionList;
    };
};
/**
 * Contains response data for the getPromotion operation.
 */
export declare type GetPromotionResponse = Promotion & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: Promotion;
    };
};
/**
 * Contains response data for the getStoreLocations operation.
 */
export declare type GetStoreLocationsResponse = StoreFinderSearchPage & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: StoreFinderSearchPage;
    };
};
/**
 * Contains response data for the getStoreLocation operation.
 */
export declare type GetStoreLocationResponse = PointOfService & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: PointOfService;
    };
};
/**
 * Contains response data for the getTitles operation.
 */
export declare type GetTitlesResponse = TitleList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: TitleList;
    };
};
/**
 * Contains response data for the createUser operation.
 */
export declare type CreateUserResponse = User & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: User;
    };
};
/**
 * Contains response data for the getUser operation.
 */
export declare type GetUserResponse = User & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: User;
    };
};
/**
 * Contains response data for the getAddresses operation.
 */
export declare type GetAddressesResponse = AddressList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: AddressList;
    };
};
/**
 * Contains response data for the createAddress operation.
 */
export declare type CreateAddressResponse = Address & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: Address;
    };
};
/**
 * Contains response data for the validateAddress operation.
 */
export declare type ValidateAddressResponse = AddressValidation & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: AddressValidation;
    };
};
/**
 * Contains response data for the getAddress operation.
 */
export declare type GetAddressResponse = Address & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: Address;
    };
};
/**
 * Contains response data for the getCarts operation.
 */
export declare type GetCartsResponse = CartList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CartList;
    };
};
/**
 * Contains response data for the createCart operation.
 */
export declare type CreateCartResponse = Cart & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: Cart;
    };
};
/**
 * Contains response data for the getCart operation.
 */
export declare type GetCartResponse = Cart & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: Cart;
    };
};
/**
 * Contains response data for the createCartDeliveryAddress operation.
 */
export declare type CreateCartDeliveryAddressResponse = Address & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: Address;
    };
};
/**
 * Contains response data for the doCartClone operation.
 */
export declare type DoCartCloneResponse = SaveCartResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: SaveCartResult;
    };
};
/**
 * Contains response data for the getConsolidatedPickupLocations operation.
 */
export declare type GetConsolidatedPickupLocationsResponse = PointOfServiceList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: PointOfServiceList;
    };
};
/**
 * Contains response data for the createConsolidatedPickupLocation operation.
 */
export declare type CreateConsolidatedPickupLocationResponse = CartModificationList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CartModificationList;
    };
};
/**
 * Contains response data for the getCartDeliveryMode operation.
 */
export declare type GetCartDeliveryModeResponse = DeliveryMode & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: DeliveryMode;
    };
};
/**
 * Contains response data for the getCartDeliveryModes operation.
 */
export declare type GetCartDeliveryModesResponse = DeliveryModeList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: DeliveryModeList;
    };
};
/**
 * Contains response data for the getCartEntries operation.
 */
export declare type GetCartEntriesResponse = OrderEntryList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: OrderEntryList;
    };
};
/**
 * Contains response data for the createCartEntry operation.
 */
export declare type CreateCartEntryResponse = CartModification & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CartModification;
    };
};
/**
 * Contains response data for the getCartEntry operation.
 */
export declare type GetCartEntryResponse = OrderEntry & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: OrderEntry;
    };
};
/**
 * Contains response data for the replaceCartEntry operation.
 */
export declare type ReplaceCartEntryResponse = CartModification & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CartModification;
    };
};
/**
 * Contains response data for the updateCartEntry operation.
 */
export declare type UpdateCartEntryResponse = CartModification & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CartModification;
    };
};
/**
 * Contains response data for the doUpdateFlagForDeletion operation.
 */
export declare type DoUpdateFlagForDeletionResponse = SaveCartResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: SaveCartResult;
    };
};
/**
 * Contains response data for the getSopPaymentRequestDetails operation.
 */
export declare type GetSopPaymentRequestDetailsResponse = PaymentRequest & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: PaymentRequest;
    };
};
/**
 * Contains response data for the getSopPaymentResponse operation.
 */
export declare type GetSopPaymentResponseResponse = PaymentDetails & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: PaymentDetails;
    };
};
/**
 * Contains response data for the doHandleSopPaymentResponse operation.
 */
export declare type DoHandleSopPaymentResponseResponse = PaymentDetails & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: PaymentDetails;
    };
};
/**
 * Contains response data for the createCartPaymentDetails operation.
 */
export declare type CreateCartPaymentDetailsResponse = PaymentDetails & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: PaymentDetails;
    };
};
/**
 * Contains response data for the getCartPromotions operation.
 */
export declare type GetCartPromotionsResponse = PromotionResultList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: PromotionResultList;
    };
};
/**
 * Contains response data for the getCartPromotion operation.
 */
export declare type GetCartPromotionResponse = PromotionResultList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: PromotionResultList;
    };
};
/**
 * Contains response data for the doUpdateSavedCart operation.
 */
export declare type DoUpdateSavedCartResponse = SaveCartResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: SaveCartResult;
    };
};
/**
 * Contains response data for the doSaveCart operation.
 */
export declare type DoSaveCartResponse = SaveCartResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: SaveCartResult;
    };
};
/**
 * Contains response data for the getSavedCart operation.
 */
export declare type GetSavedCartResponse = SaveCartResult & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: SaveCartResult;
    };
};
/**
 * Contains response data for the getCartVouchers operation.
 */
export declare type GetCartVouchersResponse = VoucherList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: VoucherList;
    };
};
/**
 * Contains response data for the doGiveConsent operation.
 */
export declare type DoGiveConsentResponse = ConsentTemplate & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: ConsentTemplate;
    };
};
/**
 * Contains response data for the getConsentTemplates operation.
 */
export declare type GetConsentTemplatesResponse = ConsentTemplateList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: ConsentTemplateList;
    };
};
/**
 * Contains response data for the getConsentTemplate operation.
 */
export declare type GetConsentTemplateResponse = ConsentTemplate & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: ConsentTemplate;
    };
};
/**
 * Contains response data for the getUserCustomerGroups operation.
 */
export declare type GetUserCustomerGroupsResponse = UserGroupList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: UserGroupList;
    };
};
/**
 * Contains response data for the getUserOrderHistory operation.
 */
export declare type GetUserOrderHistoryResponse = OrderHistoryList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: OrderHistoryList;
    };
};
/**
 * Contains response data for the placeOrder operation.
 */
export declare type PlaceOrderResponse = Order & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: Order;
    };
};
/**
 * Contains response data for the getUserOrders operation.
 */
export declare type GetUserOrdersResponse = Order & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: Order;
    };
};
/**
 * Contains response data for the getPaymentDetailsList operation.
 */
export declare type GetPaymentDetailsListResponse = PaymentDetailsList & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: PaymentDetailsList;
    };
};
/**
 * Contains response data for the getPaymentDetails operation.
 */
export declare type GetPaymentDetailsResponse = PaymentDetails & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: PaymentDetails;
    };
};
/**
 * Contains response data for the getVoucher operation.
 */
export declare type GetVoucherResponse = Voucher & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: Voucher;
    };
};
//# sourceMappingURL=index.d.ts.map