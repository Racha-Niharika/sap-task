sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'businesspartner/businesspartner/test/integration/FirstJourney',
		'businesspartner/businesspartner/test/integration/pages/Bussiness_PartnerList',
		'businesspartner/businesspartner/test/integration/pages/Bussiness_PartnerObjectPage'
    ],
    function(JourneyRunner, opaJourney, Bussiness_PartnerList, Bussiness_PartnerObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('businesspartner/businesspartner') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBussiness_PartnerList: Bussiness_PartnerList,
					onTheBussiness_PartnerObjectPage: Bussiness_PartnerObjectPage
                }
            },
            opaJourney.run
        );
    }
);