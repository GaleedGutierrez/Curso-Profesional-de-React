/* eslint-disable no-use-before-define */
export interface Events {
	_embedded: EventsEmbedded;
	page: Page;
}

export interface EventsEmbedded {
	events: Event[];
}

export interface Event {
	name: string;
	type: EventType;
	id: string;
	test: boolean;
	url: string;
	locale: Locale;
	images: Image[];
	sales: Sales;
	dates: Dates;
	classifications: Classification[];
	promoter: Promoter;
	promoters: Promoter[];
	info?: string;
	pleaseNote: string;
	priceRanges: PriceRange[];
	seatmap?: Seatmap;
	accessibility: Accessibility;
	ticketLimit: TicketLimit;
	ageRestrictions: AgeRestrictions;
	ticketing: Ticketing;
	_links: EventLinks;
	_embedded: EventEmbedded;
}

export interface EventEmbedded {
	venues: Venue[];
	attractions?: Attraction[];
}

export interface Attraction {
	name: string;
	type: AttractionType;
	id: string;
	test: boolean;
	url: string;
	locale: Locale;
	externalLinks?: ExternalLinks;
	aliases?: string[];
	images: Image[];
	classifications: Classification[];
	upcomingEvents: AttractionUpcomingEvents;
	_links: AttractionLinks;
}

export interface AttractionLinks {
	self: Self;
}

export interface Self {
	href: string;
}

export interface Classification {
	primary: boolean;
	segment: Genre;
	genre: Genre;
	subGenre: Genre;
	type: Genre;
	subType: Genre;
	family: boolean;
}

export interface Genre {
	id: string;
	name: string;
}

export interface ExternalLinks {
	youtube?: Facebook[];
	twitter?: Facebook[];
	lastfm?: Facebook[];
	facebook?: Facebook[];
	wiki?: Facebook[];
	instagram?: Facebook[];
	musicbrainz?: Musicbrainz[];
	homepage?: Facebook[];
	itunes?: Facebook[];
	spotify?: Facebook[];
}

export interface Facebook {
	url: string;
}

export interface Musicbrainz {
	id: string;
}

export interface Image {
	ratio?: Ratio;
	url: string;
	width: number;
	height: number;
	fallback: boolean;
}

export enum Ratio {
	The16_9 = '16_9',
	The1_1 = '1_1',
	The3_2 = '3_2',
	The4_3 = '4_3',
}

export enum Locale {
	EnUs = 'en-us',
}

export enum AttractionType {
	Attraction = 'attraction',
}

export interface AttractionUpcomingEvents {
	moshtix?: number;
	ticketmaster: number;
	'mfx-de'?: number;
	_total: number;
	_filtered: number;
}

export interface Venue {
	name: string;
	type: VenueType;
	id: string;
	test: boolean;
	url: string;
	locale: Locale;
	postalCode: string;
	timezone: Timezone;
	city: City;
	state: State;
	country: Country;
	address: Address;
	location: Location;
	markets: Genre[];
	dmas: DMA[];
	upcomingEvents: VenueUpcomingEvents;
	ada?: Ada;
	_links: AttractionLinks;
	images?: Image[];
	boxOfficeInfo?: BoxOfficeInfo;
	parkingDetail?: string;
	accessibleSeatingDetail?: string;
	generalInfo?: GeneralInfo;
}

export interface Ada {
	adaPhones: string;
	adaCustomCopy: string;
	adaHours: string;
}

export interface Address {
	line1: string;
	line2?: string;
}

export interface BoxOfficeInfo {
	phoneNumberDetail?: string;
	openHoursDetail?: string;
	acceptedPaymentDetail?: string;
	willCallDetail: string;
}

export interface City {
	name: string;
}

export interface Country {
	name: CountryName;
	countryCode: CountryCode;
}

export enum CountryCode {
	MX = 'MX',
}

export enum CountryName {
	Mexico = 'Mexico',
}

export interface DMA {
	id: number;
}

export interface GeneralInfo {
	generalRule?: string;
	childRule?: string;
}

export interface Location {
	longitude: string;
	latitude: string;
}

export interface State {
	name: StateName;
	stateCode: StateCode;
}

export enum StateName {
	CiudadDeMéxico = 'Ciudad de México',
	EstadoDeMéxico = 'Estado de México',
	Jalisco = 'Jalisco',
}

export enum StateCode {
	Df = 'DF',
	Jal = 'JAL',
	Mex = 'MEX',
}

export enum Timezone {
	AmericaMexicoCity = 'America/Mexico_City',
}

export enum VenueType {
	Venue = 'venue',
}

export interface VenueUpcomingEvents {
	ticketmaster: number;
	_total: number;
	_filtered: number;
}

export interface EventLinks {
	self: Self;
	attractions?: Self[];
	venues: Self[];
}

export interface Accessibility {
	info?: string;
	ticketLimit?: number;
}

export interface AgeRestrictions {
	legalAgeEnforced: boolean;
}

export interface Dates {
	start: Start;
	timezone: Timezone;
	status: Status;
	spanMultipleDays: boolean;
	initialStartDate?: InitialStartDate;
}

export interface InitialStartDate {
	localDate: Date;
	localTime: string;
	dateTime: Date;
}

export interface Start {
	localDate: Date;
	localTime: string;
	dateTime: Date;
	dateTBD: boolean;
	dateTBA: boolean;
	timeTBA: boolean;
	noSpecificTime: boolean;
}

export interface Status {
	code: Code;
}

export enum Code {
	Cancelled = 'cancelled',
	Onsale = 'onsale',
	Rescheduled = 'rescheduled',
}

export interface PriceRange {
	type: PriceRangeType;
	currency: Currency;
	min: number;
	max: number;
}

export enum Currency {
	Mxn = 'MXN',
	Usd = 'USD',
}

export enum PriceRangeType {
	Standard = 'standard',
}

export interface Promoter {
	id: string;
	name: PromoterName;
	description: Description;
}

export enum Description {
	MondialPrice1NtlMxc = 'MONDIAL PRICE 1 / NTL / MXC',
	MondialPrice2NtlMxc = 'MONDIAL PRICE 2 / NTL / MXC',
	MondialPrice3NtlMxc = 'MONDIAL PRICE 3 / NTL / MXC',
	OcesaNtlMxc = 'OCESA / NTL / MXC',
}

export enum PromoterName {
	MondialPrice1 = 'MONDIAL PRICE 1',
	MondialPrice2 = 'MONDIAL PRICE 2',
	MondialPrice3 = 'MONDIAL PRICE 3',
	Ocesa = 'OCESA',
}

export interface Sales {
	public: Public;
	presales?: Presale[];
}

export interface Presale {
	startDateTime: Date;
	endDateTime: Date;
	name: string;
}

export interface Public {
	startDateTime: Date;
	startTBD: boolean;
	startTBA: boolean;
	endDateTime: Date;
}

export interface Seatmap {
	staticUrl: string;
}

export interface TicketLimit {
	info: string;
}

export interface Ticketing {
	safeTix: AllInclusivePricing;
	allInclusivePricing?: AllInclusivePricing;
}

export interface AllInclusivePricing {
	enabled: boolean;
}

export enum EventType {
	Event = 'event',
}

export interface Page {
	size: number;
	totalElements: number;
	totalPages: number;
	number: number;
}
