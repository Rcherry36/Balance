sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"in/cloud/office/test/integration/pages/building1List",
	"in/cloud/office/test/integration/pages/building1ObjectPage"
], function (JourneyRunner, building1List, building1ObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('in/cloud/office') + '/test/flp.html#app-preview',
        pages: {
			onThebuilding1List: building1List,
			onThebuilding1ObjectPage: building1ObjectPage
        },
        async: true
    });

    return runner;
});

