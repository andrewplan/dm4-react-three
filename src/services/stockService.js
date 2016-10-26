export function getStocks() {
		return stocks;
}

export function getStockById( id ) {
		for ( let i = 0; i < stocks.length; i++ ) {
				if ( stocks[ i ]._id === id ) {
						return stocks[ i ];
				}
		}
		return {};
}

const stocks = [
	{
		"_id": "578f90cd97a17afaf6ba5160",
		"price": "$196.47",
		"company": "GENMY",
		"about": "Reprehenderit nisi incididunt cupidatat sunt laborum Lorem tempor in cupidatat. Cupidatat quis ea quis in aute culpa sint. Tempor culpa duis tempor tempor ullamco sit minim nulla fugiat reprehenderit sit ipsum. Commodo nulla commodo commodo ad nostrud labore excepteur eiusmod ut deserunt excepteur fugiat irure voluptate. Ipsum quis nisi esse laboris quis Lorem magna.\r\n"
	},
	{
		"_id": "578f90cd85e226eb434c2f95",
		"price": "$57.83",
		"company": "GLUKGLUK",
		"about": "Nulla Lorem sit incididunt adipisicing duis amet sint et anim dolore. Nisi deserunt irure excepteur aliquip non dolor est voluptate deserunt amet. Commodo laborum id ea et magna ad aliquip do esse qui nulla. Cupidatat nulla non id voluptate culpa veniam. Nulla eu non veniam reprehenderit reprehenderit occaecat enim reprehenderit officia enim consectetur nisi. Sit reprehenderit velit proident nostrud adipisicing ut in sunt ipsum duis mollit deserunt.\r\n"
	},
	{
		"_id": "578f90cd1f7d4e835d2ce995",
		"price": "$160.18",
		"company": "ROCKABYE",
		"about": "Sit sunt exercitation occaecat est officia quis fugiat esse quis minim quis ipsum. Mollit do magna fugiat deserunt nisi cillum excepteur enim ipsum Lorem sint est. Aliquip amet laborum est est ex enim pariatur aliquip esse consequat ut deserunt. Cillum dolore commodo occaecat eu consequat cillum. Exercitation deserunt enim laborum non ad pariatur esse qui eu. Magna ad commodo et anim et magna quis cupidatat velit.\r\n"
	},
	{
		"_id": "578f90cd74c10a822eafff38",
		"price": "$157.55",
		"company": "ETERNIS",
		"about": "Deserunt reprehenderit ea dolore excepteur. Dolore est ipsum pariatur nisi sunt elit amet cupidatat in deserunt elit. Consequat enim excepteur cillum Lorem consequat minim qui reprehenderit amet culpa amet incididunt ad. Non exercitation irure voluptate aliqua magna excepteur exercitation veniam incididunt quis ut consequat cupidatat. Ut sunt aute aliqua laborum. Non cillum eiusmod non et dolore sit ad sunt ex culpa sunt quis fugiat nulla.\r\n"
	},
	{
		"_id": "578f90cd017b535f22251c24",
		"price": "$24.66",
		"company": "KYAGURU",
		"about": "Fugiat ipsum quis fugiat exercitation ad culpa pariatur non aliqua irure consectetur non esse duis. Sit aliquip dolor enim ea veniam deserunt ex. Exercitation cillum non in nostrud dolor eu laboris occaecat ex in. Et duis non magna consequat Lorem ad consequat ut aliqua elit.\r\n"
	},
	{
		"_id": "578f90cdae517c11016db28a",
		"price": "$69.46",
		"company": "ISOPOP",
		"about": "Fugiat laborum est in amet aliquip eiusmod laborum. Nulla adipisicing exercitation deserunt id non dolore dolore mollit. Id labore anim mollit sint sint labore elit consectetur irure Lorem esse dolore. Voluptate ullamco culpa est elit laboris. Elit laboris enim dolor id sit. Esse ad eu eu ipsum consequat exercitation cillum tempor. Dolore fugiat pariatur consectetur deserunt velit deserunt quis minim officia consectetur irure exercitation.\r\n"
	},
	{
		"_id": "578f90cd61848f10eb058ecb",
		"price": "$194.05",
		"company": "POSHOME",
		"about": "Eiusmod id et occaecat et deserunt irure elit qui voluptate nostrud elit ad pariatur. Consectetur Lorem eu eiusmod amet non id. Non occaecat et proident mollit esse cupidatat sunt. Do esse eu labore adipisicing commodo commodo. Enim fugiat officia nisi duis deserunt aliqua reprehenderit in deserunt deserunt ullamco.\r\n"
	},
	{
		"_id": "578f90cd6917c96c5f9a455d",
		"price": "$60.01",
		"company": "ZILLADYNE",
		"about": "Exercitation incididunt id laboris exercitation reprehenderit proident deserunt exercitation dolore nulla ex quis amet. Irure sunt enim amet voluptate cupidatat occaecat officia id do occaecat ex laboris. Proident pariatur velit pariatur in qui elit. Ullamco non aliqua fugiat ut dolor. Cillum ipsum magna excepteur minim cupidatat anim amet Lorem cillum mollit.\r\n"
	},
	{
		"_id": "578f90cd35ce7ee1859c40d2",
		"price": "$115.43",
		"company": "MEDIFAX",
		"about": "Est Lorem id commodo fugiat eu aliquip amet minim. Magna et anim exercitation ad eu qui aliqua id proident sunt et ut qui. Minim non eu ad consectetur dolor eiusmod sit cillum labore proident laborum tempor et. Aute sint labore aute nisi incididunt Lorem. Elit magna est culpa eu et duis nisi aute non duis nisi id anim velit. Minim cillum eiusmod labore magna amet sit et consectetur cillum voluptate. Consequat sit tempor in voluptate fugiat laboris proident in duis occaecat non in.\r\n"
	},
	{
		"_id": "578f90cd01b7997654c85a91",
		"price": "$13.75",
		"company": "TYPHONICA",
		"about": "Consectetur proident consequat duis voluptate tempor pariatur do. Fugiat Lorem pariatur mollit ipsum excepteur magna eiusmod pariatur commodo sunt velit occaecat. Officia exercitation dolor incididunt aute aliqua officia velit exercitation nostrud qui eu commodo proident veniam. Ullamco ea dolor sit aliquip Lorem voluptate laboris ullamco occaecat nulla pariatur Lorem labore occaecat. Nisi tempor incididunt quis esse magna eiusmod aute et non esse. Officia exercitation in ex elit cupidatat minim in sint dolor ut. Ex irure aliquip mollit cillum enim Lorem quis eiusmod labore.\r\n"
	},
	{
		"_id": "578f90cd10ee8dda4f71b352",
		"price": "$19.62",
		"company": "INSURITY",
		"about": "Sunt incididunt magna duis ipsum. Quis cillum anim quis proident aliqua eiusmod laborum. Exercitation voluptate culpa elit cillum est reprehenderit sit adipisicing in. Ad magna tempor magna enim voluptate fugiat commodo laboris minim eiusmod fugiat nostrud cillum.\r\n"
	},
	{
		"_id": "578f90cde823b4feae3cd0b5",
		"price": "$11.86",
		"company": "SENMEI",
		"about": "Aliquip commodo eiusmod tempor sunt nisi id sit sunt occaecat consequat duis do proident. Id mollit ipsum Lorem ad ad elit non commodo eu. Et duis labore laborum cillum velit qui sint. Fugiat ipsum aliquip qui pariatur. Sint cupidatat est nulla commodo.\r\n"
	},
	{
		"_id": "578f90cd493d2aea4cf07c27",
		"price": "$89.18",
		"company": "GRUPOLI",
		"about": "Duis occaecat mollit consectetur aute commodo ullamco ut nisi. Sunt amet elit qui quis dolore do ullamco consequat minim qui occaecat. Sint sint pariatur laboris do et nisi id enim non id duis qui in. Fugiat consequat fugiat consectetur aliqua velit ex minim officia reprehenderit cupidatat occaecat. Non mollit voluptate culpa commodo esse sint nisi ex exercitation esse fugiat nulla pariatur. Consequat id consequat consectetur adipisicing eiusmod proident irure ad exercitation enim est aute.\r\n"
	},
	{
		"_id": "578f90cdb975afa335904934",
		"price": "$151.20",
		"company": "COMVEYER",
		"about": "Ut culpa aliquip enim aliqua tempor fugiat. Velit aliquip sit fugiat magna ut ex aute deserunt et non magna velit excepteur. Sit deserunt voluptate amet occaecat aliqua aute esse esse nulla officia occaecat do duis ut. Fugiat occaecat aute nostrud non. Aliquip officia aliqua Lorem occaecat consectetur officia amet do ex voluptate enim. Labore esse pariatur veniam labore ea.\r\n"
	},
	{
		"_id": "578f90cddeb91ee90212f357",
		"price": "$99.54",
		"company": "PLASMOSIS",
		"about": "Reprehenderit excepteur quis est enim in ullamco dolor. Laborum nulla anim ipsum consectetur. Quis ut sunt culpa id exercitation laboris commodo. Sunt qui laborum excepteur ad velit aliqua eiusmod velit. Eu magna ad officia cillum duis quis proident elit qui. Velit reprehenderit in pariatur dolor dolor aliqua ex officia quis.\r\n"
	},
	{
		"_id": "578f90cd1b855cbe28b64b6d",
		"price": "$164.06",
		"company": "NIPAZ",
		"about": "Lorem quis enim id proident esse duis culpa occaecat quis veniam tempor. Ipsum sit voluptate officia sit sint aliqua anim laborum ex ea ut. Nostrud labore elit ut incididunt id officia esse minim veniam enim quis deserunt qui consectetur. Irure exercitation excepteur fugiat nostrud ex in minim labore voluptate voluptate tempor sint minim.\r\n"
	},
	{
		"_id": "578f90cde8c02adbad015bb2",
		"price": "$147.50",
		"company": "VOIPA",
		"about": "Lorem velit amet irure labore ipsum. Consectetur consequat sint est occaecat ea amet ea sint enim proident nostrud. Adipisicing enim veniam laboris minim eiusmod sit ad ullamco labore. Laboris fugiat ut minim dolore pariatur deserunt mollit excepteur mollit exercitation veniam tempor duis eiusmod. Duis officia magna laborum veniam. Do excepteur pariatur duis magna incididunt ex irure mollit consequat reprehenderit consectetur. Voluptate aute mollit ipsum velit consequat excepteur nisi exercitation.\r\n"
	}
]
