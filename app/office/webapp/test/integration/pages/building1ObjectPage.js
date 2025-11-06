sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'in.cloud.office',
            componentId: 'building1ObjectPage',
            contextPath: '/building1'
        },
        CustomPageDefinitions
    );
});