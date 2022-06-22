export interface ChinaTotal {
	deadAdd: number;
	localConfirmAdd: number;
	localConfirm: number;
	heal: number;
	localConfirmH5: number;
	confirmAdd: number;
	localWzzAdd: number;
	mtime: string;
	mRiskTime: string;
	nowSevere: number;
	noInfect: number;
	noInfectH5: number;
	local_acc_confirm: number;
	nowLocalWzz: number;
	suspect: number;
	showLocalConfirm: number;
	showlocalinfeciton: number;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	nowConfirm: number;
	confirm: number;
	dead: number;
	importedCase: number;
}

export interface ChinaAdd {
	nowConfirm: number;
	suspect: number;
	nowSevere: number;
	noInfect: number;
	localConfirmH5: number;
	confirm: number;
	heal: number;
	dead: number;
	importedCase: number;
	localConfirm: number;
	noInfectH5: number;
}

export interface ShowAddSwitch {
	nowSevere: boolean;
	noInfect: boolean;
	localConfirm: boolean;
	nowConfirm: boolean;
	confirm: boolean;
	suspect: boolean;
	dead: boolean;
	heal: boolean;
	importedCase: boolean;
	localinfeciton: boolean;
	all: boolean;
}

export interface Total {
	showHeal: boolean;
	dead: number;
	wzz: number;
	provinceLocalConfirm: number;
	continueDayZeroLocalConfirm: number;
	adcode: string;
	nowConfirm: number;
	showRate: boolean;
	heal: number;
	mtime: string;
	confirm: number;
	highRiskAreaNum: number;
	continueDayZeroLocalConfirmAdd: number;
	mediumRiskAreaNum: number;
}

export interface Today {
	abroad_confirm_add: number;
	dead_add: number;
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	tip: string;
	wzz_add: number;
	local_confirm_add: number;
}

export interface Total {
	showRate: boolean;
	wzz: number;
	continueDayZeroConfirmAdd: number;
	confirm: number;
	dead: number;
	heal: number;
	highRiskAreaNum: number;
	adcode: string;
	nowConfirm: number;
	provinceLocalConfirm: number;
	continueDayZeroLocalConfirmAdd: number;
	mtime: string;
	showHeal: boolean;
	mediumRiskAreaNum: number;
	continueDayZeroConfirm: number;
}

export interface Today {
	isUpdated: boolean;
	wzz_add: string;
	local_confirm_add: number;
	confirm: number;
	confirmCuts: number;
}

export interface Total {
	confirm: number;
	wzz: number;
	continueDayZeroLocalConfirmAdd: number;
	adcode: string;
	nowConfirm: number;
	mtime: string;
	showRate: boolean;
	heal: number;
	showHeal: boolean;
	continueDayZeroLocalConfirm: number;
	dead: number;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	provinceLocalConfirm: number;
}

export interface Children {
	adcode: string;
	date: string;
	today: Today;
	total: Total;
	name: string;
}

export interface Children {
	today: Today;
	total: Total;
	children: Children[];
	name: string;
	adcode: string;
	date: string;
}

export interface Today {
	confirm: number;
	isUpdated: boolean;
}

export interface AreaTree {
	total: Total;
	children: Children[];
	name: string;
	today: Today;
}

export interface Diseaseh5Shelf {
	lastUpdateTime: string;
	chinaTotal: ChinaTotal;
	chinaAdd: ChinaAdd;
	isShowAdd: boolean;
	showAddSwitch: ShowAddSwitch;
	areaTree: AreaTree[];
}

export interface StatisGradeCityDetail {
	province: string;
	city: string;
	nowConfirm: number;
	confirm: number;
	heal: number;
	grade: string;
	wzz_add: string;
	confirmAdd: number;
	dead: number;
	date: string;
	mtime: string;
	sdate: string;
	syear: number;
}

export interface RootObject {
	diseaseh5Shelf: Diseaseh5Shelf;
	statisGradeCityDetail: StatisGradeCityDetail[];
}