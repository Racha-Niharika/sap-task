sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'purchase/purchase/test/integration/FirstJourney',
		'purchase/purchase/test/integration/pages/PurchaseList',
		'purchase/purchase/test/integration/pages/PurchaseObjectPage'
    ],
    function(JourneyRunner, opaJourney, PurchaseList, PurchaseObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('purchase/purchase') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePurchaseList: PurchaseList,
					onThePurchaseObjectPage: PurchaseObjectPage
                }
            },
            opaJourney.run
        );
    }
);