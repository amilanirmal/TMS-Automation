$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CurrencyManagement.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Auth by Nirmal Gunarathna"
    }
  ],
  "line": 2,
  "name": "Add Device model",
  "description": "",
  "id": "add-device-model",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Add Device model",
  "description": "",
  "id": "add-device-model;add-device-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to URL \"http://192.168.1.114:8085\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the username \"nirmal1\" with id of username \"userName\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter the password \"Password@123\" with id of password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click Login button with id \"//button[@class\u003d\u0027button\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on TMS on link \"//img[@src\u003d\u0027/assets/img/terminal_management-01.svg\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I get error message \"//div[@class\u003d\u0027msg-panel error-login-msg\u0027]//ul[@class\u003d\u0027errorMessage\u0027]\" testcase id \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on side section dropdwon bar with xpath \"//img[@src\u003d\u0027resources/assets/image/icons/drop_down.svg\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on Terminal section link with xpath \"//div[@class \u003d\u0027section-list-wrapper expanded fadein\u0027]//form[@id\u003d\u0027sectionlstform\u0027]//ul[@class\u003d\u0027section-list\u0027]/li[text()\u003d\u0027Config Section\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on side section bar \"Currency Management\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on add  mark for add application version with xpath \"//div[@class\u003d\u0027round-btn f-right\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter currency code \"\u003ccurrency code\u003e\" with id \"acurrencycode\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter alpha code \"\u003cAlpha2 Code\u003e\" with id \"aalpha2code\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter currency descrption \"\u003cCurrency Description\u003e\" id \"adescription\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter exponent \"\u003cExponent\u003e\" with id \"aexponent\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click enter button to add currency \"addbtn\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "add-device-model;add-device-model;",
  "rows": [
    {
      "cells": [
        "currency code",
        "Alpha2 Code",
        "Currency Description",
        "Exponent"
      ],
      "line": 22,
      "id": "add-device-model;add-device-model;;1"
    },
    {
      "cells": [
        "",
        "",
        "LKR",
        "144"
      ],
      "line": 23,
      "id": "add-device-model;add-device-model;;2"
    },
    {
      "cells": [
        "CRN-04",
        "",
        "",
        ""
      ],
      "line": 24,
      "id": "add-device-model;add-device-model;;3"
    },
    {
      "cells": [
        "CRN-01",
        "LKR",
        "",
        "144"
      ],
      "line": 25,
      "id": "add-device-model;add-device-model;;4"
    },
    {
      "cells": [
        "CRN-13",
        "MVR",
        "MVR",
        ""
      ],
      "line": 26,
      "id": "add-device-model;add-device-model;;5"
    },
    {
      "cells": [
        "CRN-01",
        "LKR",
        "LKR",
        "144"
      ],
      "line": 27,
      "id": "add-device-model;add-device-model;;6"
    },
    {
      "cells": [
        "",
        "USD",
        "USD",
        "4"
      ],
      "line": 28,
      "id": "add-device-model;add-device-model;;7"
    },
    {
      "cells": [
        "940",
        "",
        "USD",
        "4"
      ],
      "line": 29,
      "id": "add-device-model;add-device-model;;8"
    },
    {
      "cells": [
        "940",
        "USD",
        "",
        "4"
      ],
      "line": 30,
      "id": "add-device-model;add-device-model;;9"
    },
    {
      "cells": [
        "973",
        "AOA",
        "AOA",
        ""
      ],
      "line": 31,
      "id": "add-device-model;add-device-model;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4579915889,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Add Device model",
  "description": "",
  "id": "add-device-model;add-device-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to URL \"http://192.168.1.114:8085\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the username \"nirmal1\" with id of username \"userName\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter the password \"Password@123\" with id of password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click Login button with id \"//button[@class\u003d\u0027button\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on TMS on link \"//img[@src\u003d\u0027/assets/img/terminal_management-01.svg\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I get error message \"//div[@class\u003d\u0027msg-panel error-login-msg\u0027]//ul[@class\u003d\u0027errorMessage\u0027]\" testcase id \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on side section dropdwon bar with xpath \"//img[@src\u003d\u0027resources/assets/image/icons/drop_down.svg\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on Terminal section link with xpath \"//div[@class \u003d\u0027section-list-wrapper expanded fadein\u0027]//form[@id\u003d\u0027sectionlstform\u0027]//ul[@class\u003d\u0027section-list\u0027]/li[text()\u003d\u0027Config Section\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on side section bar \"Currency Management\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on add  mark for add application version with xpath \"//div[@class\u003d\u0027round-btn f-right\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter currency code \"\" with id \"acurrencycode\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter alpha code \"\" with id \"aalpha2code\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter currency descrption \"LKR\" id \"adescription\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter exponent \"144\" with id \"aexponent\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click enter button to add currency \"addbtn\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://192.168.1.114:8085",
      "offset": 19
    }
  ],
  "location": "AndroidTMSdefs.iNavigateToURL(String)"
});
formatter.result({
  "duration": 712735982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nirmal1",
      "offset": 22
    },
    {
      "val": "userName",
      "offset": 52
    }
  ],
  "location": "AndroidTMSdefs.iEnterTheUsernameWithIdOfUsername(String,String)"
});
formatter.result({
  "duration": 1385572252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password@123",
      "offset": 22
    },
    {
      "val": "password",
      "offset": 57
    }
  ],
  "location": "AndroidTMSdefs.iEnterThePasswordWithIdOfPassword(String,String)"
});
formatter.result({
  "duration": 1002745246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//button[@class\u003d\u0027button\u0027]",
      "offset": 30
    }
  ],
  "location": "AndroidTMSdefs.iClickLoginButtonWithId(String)"
});
formatter.result({
  "duration": 1492489421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//img[@src\u003d\u0027/assets/img/terminal_management-01.svg\u0027]",
      "offset": 24
    }
  ],
  "location": "AndroidTMSdefs.iClickOnTMSOnLink(String)"
});
formatter.result({
  "duration": 1092831714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class\u003d\u0027msg-panel error-login-msg\u0027]//ul[@class\u003d\u0027errorMessage\u0027]",
      "offset": 21
    },
    {
      "val": "1",
      "offset": 104
    }
  ],
  "location": "AndroidTMSdefs.iGetErrorMessageTestcaseId(String,String)"
});
formatter.result({
  "duration": 8439869,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//img[@src\u003d\u0027resources/assets/image/icons/drop_down.svg\u0027]",
      "offset": 49
    }
  ],
  "location": "AndroidTMSdefs.iClickOnSideSectionDropdwonBarWithXpath(String)"
});
formatter.result({
  "duration": 2290968060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class \u003d\u0027section-list-wrapper expanded fadein\u0027]//form[@id\u003d\u0027sectionlstform\u0027]//ul[@class\u003d\u0027section-list\u0027]/li[text()\u003d\u0027Config Section\u0027]",
      "offset": 45
    }
  ],
  "location": "AndroidTMSdefs.iClickOnTerminalSectionLinkWithXpath(String)"
});
formatter.result({
  "duration": 1315124166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Currency Management",
      "offset": 29
    }
  ],
  "location": "AndroidTMSdefs.iClickOnSideSectionBar(String)"
});
formatter.result({
  "duration": 1939395339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class\u003d\u0027round-btn f-right\u0027]",
      "offset": 61
    }
  ],
  "location": "AndroidTMSdefs.iClickOnAddMarkForAddApplicationVersionWithXpath(String)"
});
formatter.result({
  "duration": 1148733621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 23
    },
    {
      "val": "acurrencycode",
      "offset": 34
    }
  ],
  "location": "AndroidTMSdefs.iEnterCurrencyCodeWithId(String,String)"
});
formatter.result({
  "duration": 1020049784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    },
    {
      "val": "aalpha2code",
      "offset": 31
    }
  ],
  "location": "AndroidTMSdefs.iEnterAlphaCodeWithId(String,String)"
});
formatter.result({
  "duration": 690083788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LKR",
      "offset": 29
    },
    {
      "val": "adescription",
      "offset": 38
    }
  ],
  "location": "AndroidTMSdefs.iEnterCurrencyDescrptionId(String,String)"
});
formatter.result({
  "duration": 67190798,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "144",
      "offset": 18
    },
    {
      "val": "aexponent",
      "offset": 32
    }
  ],
  "location": "AndroidTMSdefs.iEnterExponentWithId(String,String)"
});
formatter.result({
  "duration": 55442323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addbtn",
      "offset": 38
    }
  ],
  "location": "AndroidTMSdefs.iClickEnterButtonToAddCurrency(String)"
});
formatter.result({
  "duration": 85604953,
  "status": "passed"
});
formatter.before({
  "duration": 2598249075,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Add Device model",
  "description": "",
  "id": "add-device-model;add-device-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to URL \"http://192.168.1.114:8085\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the username \"nirmal1\" with id of username \"userName\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter the password \"Password@123\" with id of password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click Login button with id \"//button[@class\u003d\u0027button\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on TMS on link \"//img[@src\u003d\u0027/assets/img/terminal_management-01.svg\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I get error message \"//div[@class\u003d\u0027msg-panel error-login-msg\u0027]//ul[@class\u003d\u0027errorMessage\u0027]\" testcase id \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on side section dropdwon bar with xpath \"//img[@src\u003d\u0027resources/assets/image/icons/drop_down.svg\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on Terminal section link with xpath \"//div[@class \u003d\u0027section-list-wrapper expanded fadein\u0027]//form[@id\u003d\u0027sectionlstform\u0027]//ul[@class\u003d\u0027section-list\u0027]/li[text()\u003d\u0027Config Section\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on side section bar \"Currency Management\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on add  mark for add application version with xpath \"//div[@class\u003d\u0027round-btn f-right\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter currency code \"CRN-04\" with id \"acurrencycode\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter alpha code \"\" with id \"aalpha2code\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter currency descrption \"\" id \"adescription\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter exponent \"\" with id \"aexponent\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click enter button to add currency \"addbtn\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://192.168.1.114:8085",
      "offset": 19
    }
  ],
  "location": "AndroidTMSdefs.iNavigateToURL(String)"
});
formatter.result({
  "duration": 3292871400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nirmal1",
      "offset": 22
    },
    {
      "val": "userName",
      "offset": 52
    }
  ],
  "location": "AndroidTMSdefs.iEnterTheUsernameWithIdOfUsername(String,String)"
});
formatter.result({
  "duration": 2504307460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password@123",
      "offset": 22
    },
    {
      "val": "password",
      "offset": 57
    }
  ],
  "location": "AndroidTMSdefs.iEnterThePasswordWithIdOfPassword(String,String)"
});
formatter.result({
  "duration": 1372608388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//button[@class\u003d\u0027button\u0027]",
      "offset": 30
    }
  ],
  "location": "AndroidTMSdefs.iClickLoginButtonWithId(String)"
});
formatter.result({
  "duration": 837240796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//img[@src\u003d\u0027/assets/img/terminal_management-01.svg\u0027]",
      "offset": 24
    }
  ],
  "location": "AndroidTMSdefs.iClickOnTMSOnLink(String)"
});
formatter.result({
  "duration": 1100226685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class\u003d\u0027msg-panel error-login-msg\u0027]//ul[@class\u003d\u0027errorMessage\u0027]",
      "offset": 21
    },
    {
      "val": "1",
      "offset": 104
    }
  ],
  "location": "AndroidTMSdefs.iGetErrorMessageTestcaseId(String,String)"
});
formatter.result({
  "duration": 7339946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//img[@src\u003d\u0027resources/assets/image/icons/drop_down.svg\u0027]",
      "offset": 49
    }
  ],
  "location": "AndroidTMSdefs.iClickOnSideSectionDropdwonBarWithXpath(String)"
});
formatter.result({
  "duration": 3328978974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class \u003d\u0027section-list-wrapper expanded fadein\u0027]//form[@id\u003d\u0027sectionlstform\u0027]//ul[@class\u003d\u0027section-list\u0027]/li[text()\u003d\u0027Config Section\u0027]",
      "offset": 45
    }
  ],
  "location": "AndroidTMSdefs.iClickOnTerminalSectionLinkWithXpath(String)"
});
formatter.result({
  "duration": 1100657188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Currency Management",
      "offset": 29
    }
  ],
  "location": "AndroidTMSdefs.iClickOnSideSectionBar(String)"
});
formatter.result({
  "duration": 1519316075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class\u003d\u0027round-btn f-right\u0027]",
      "offset": 61
    }
  ],
  "location": "AndroidTMSdefs.iClickOnAddMarkForAddApplicationVersionWithXpath(String)"
});
formatter.result({
  "duration": 946119180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRN-04",
      "offset": 23
    },
    {
      "val": "acurrencycode",
      "offset": 40
    }
  ],
  "location": "AndroidTMSdefs.iEnterCurrencyCodeWithId(String,String)"
});
formatter.result({
  "duration": 1276093159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    },
    {
      "val": "aalpha2code",
      "offset": 31
    }
  ],
  "location": "AndroidTMSdefs.iEnterAlphaCodeWithId(String,String)"
});
formatter.result({
  "duration": 1631169496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 29
    },
    {
      "val": "adescription",
      "offset": 35
    }
  ],
  "location": "AndroidTMSdefs.iEnterCurrencyDescrptionId(String,String)"
});
formatter.result({
  "duration": 1261345412,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    },
    {
      "val": "aexponent",
      "offset": 29
    }
  ],
  "location": "AndroidTMSdefs.iEnterExponentWithId(String,String)"
});
formatter.result({
  "duration": 1067768700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addbtn",
      "offset": 38
    }
  ],
  "location": "AndroidTMSdefs.iClickEnterButtonToAddCurrency(String)"
});
formatter.result({
  "duration": 228352576,
  "status": "passed"
});
formatter.before({
  "duration": 2388390483,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Add Device model",
  "description": "",
  "id": "add-device-model;add-device-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to URL \"http://192.168.1.114:8085\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the username \"nirmal1\" with id of username \"userName\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter the password \"Password@123\" with id of password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click Login button with id \"//button[@class\u003d\u0027button\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on TMS on link \"//img[@src\u003d\u0027/assets/img/terminal_management-01.svg\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I get error message \"//div[@class\u003d\u0027msg-panel error-login-msg\u0027]//ul[@class\u003d\u0027errorMessage\u0027]\" testcase id \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on side section dropdwon bar with xpath \"//img[@src\u003d\u0027resources/assets/image/icons/drop_down.svg\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on Terminal section link with xpath \"//div[@class \u003d\u0027section-list-wrapper expanded fadein\u0027]//form[@id\u003d\u0027sectionlstform\u0027]//ul[@class\u003d\u0027section-list\u0027]/li[text()\u003d\u0027Config Section\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on side section bar \"Currency Management\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on add  mark for add application version with xpath \"//div[@class\u003d\u0027round-btn f-right\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter currency code \"CRN-01\" with id \"acurrencycode\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter alpha code \"LKR\" with id \"aalpha2code\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter currency descrption \"\" id \"adescription\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter exponent \"144\" with id \"aexponent\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click enter button to add currency \"addbtn\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://192.168.1.114:8085",
      "offset": 19
    }
  ],
  "location": "AndroidTMSdefs.iNavigateToURL(String)"
});
formatter.result({
  "duration": 956952763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nirmal1",
      "offset": 22
    },
    {
      "val": "userName",
      "offset": 52
    }
  ],
  "location": "AndroidTMSdefs.iEnterTheUsernameWithIdOfUsername(String,String)"
});
formatter.result({
  "duration": 1141385692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password@123",
      "offset": 22
    },
    {
      "val": "password",
      "offset": 57
    }
  ],
  "location": "AndroidTMSdefs.iEnterThePasswordWithIdOfPassword(String,String)"
});
formatter.result({
  "duration": 949042329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//button[@class\u003d\u0027button\u0027]",
      "offset": 30
    }
  ],
  "location": "AndroidTMSdefs.iClickLoginButtonWithId(String)"
});
formatter.result({
  "duration": 913386641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//img[@src\u003d\u0027/assets/img/terminal_management-01.svg\u0027]",
      "offset": 24
    }
  ],
  "location": "AndroidTMSdefs.iClickOnTMSOnLink(String)"
});
formatter.result({
  "duration": 1078215685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class\u003d\u0027msg-panel error-login-msg\u0027]//ul[@class\u003d\u0027errorMessage\u0027]",
      "offset": 21
    },
    {
      "val": "1",
      "offset": 104
    }
  ],
  "location": "AndroidTMSdefs.iGetErrorMessageTestcaseId(String,String)"
});
formatter.result({
  "duration": 6776870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//img[@src\u003d\u0027resources/assets/image/icons/drop_down.svg\u0027]",
      "offset": 49
    }
  ],
  "location": "AndroidTMSdefs.iClickOnSideSectionDropdwonBarWithXpath(String)"
});
formatter.result({
  "duration": 3508573439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class \u003d\u0027section-list-wrapper expanded fadein\u0027]//form[@id\u003d\u0027sectionlstform\u0027]//ul[@class\u003d\u0027section-list\u0027]/li[text()\u003d\u0027Config Section\u0027]",
      "offset": 45
    }
  ],
  "location": "AndroidTMSdefs.iClickOnTerminalSectionLinkWithXpath(String)"
});
formatter.result({
  "duration": 1294609951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Currency Management",
      "offset": 29
    }
  ],
  "location": "AndroidTMSdefs.iClickOnSideSectionBar(String)"
});
formatter.result({
  "duration": 1592356592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class\u003d\u0027round-btn f-right\u0027]",
      "offset": 61
    }
  ],
  "location": "AndroidTMSdefs.iClickOnAddMarkForAddApplicationVersionWithXpath(String)"
});
formatter.result({
  "duration": 961533495,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRN-01",
      "offset": 23
    },
    {
      "val": "acurrencycode",
      "offset": 40
    }
  ],
  "location": "AndroidTMSdefs.iEnterCurrencyCodeWithId(String,String)"
});
formatter.result({
  "duration": 677408733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LKR",
      "offset": 20
    },
    {
      "val": "aalpha2code",
      "offset": 34
    }
  ],
  "location": "AndroidTMSdefs.iEnterAlphaCodeWithId(String,String)"
});
formatter.result({
  "duration": 66814179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 29
    },
    {
      "val": "adescription",
      "offset": 35
    }
  ],
  "location": "AndroidTMSdefs.iEnterCurrencyDescrptionId(String,String)"
});
formatter.result({
  "duration": 52475268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "144",
      "offset": 18
    },
    {
      "val": "aexponent",
      "offset": 32
    }
  ],
  "location": "AndroidTMSdefs.iEnterExponentWithId(String,String)"
});
formatter.result({
  "duration": 82892780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addbtn",
      "offset": 38
    }
  ],
  "location": "AndroidTMSdefs.iClickEnterButtonToAddCurrency(String)"
});
formatter.result({
  "duration": 68064634,
  "status": "passed"
});
formatter.before({
  "duration": 2291279106,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Add Device model",
  "description": "",
  "id": "add-device-model;add-device-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to URL \"http://192.168.1.114:8085\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the username \"nirmal1\" with id of username \"userName\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter the password \"Password@123\" with id of password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click Login button with id \"//button[@class\u003d\u0027button\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on TMS on link \"//img[@src\u003d\u0027/assets/img/terminal_management-01.svg\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I get error message \"//div[@class\u003d\u0027msg-panel error-login-msg\u0027]//ul[@class\u003d\u0027errorMessage\u0027]\" testcase id \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on side section dropdwon bar with xpath \"//img[@src\u003d\u0027resources/assets/image/icons/drop_down.svg\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on Terminal section link with xpath \"//div[@class \u003d\u0027section-list-wrapper expanded fadein\u0027]//form[@id\u003d\u0027sectionlstform\u0027]//ul[@class\u003d\u0027section-list\u0027]/li[text()\u003d\u0027Config Section\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on side section bar \"Currency Management\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on add  mark for add application version with xpath \"//div[@class\u003d\u0027round-btn f-right\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter currency code \"CRN-13\" with id \"acurrencycode\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter alpha code \"MVR\" with id \"aalpha2code\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter currency descrption \"MVR\" id \"adescription\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter exponent \"\" with id \"aexponent\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click enter button to add currency \"addbtn\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://192.168.1.114:8085",
      "offset": 19
    }
  ],
  "location": "AndroidTMSdefs.iNavigateToURL(String)"
});
formatter.result({
  "duration": 978637607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nirmal1",
      "offset": 22
    },
    {
      "val": "userName",
      "offset": 52
    }
  ],
  "location": "AndroidTMSdefs.iEnterTheUsernameWithIdOfUsername(String,String)"
});
formatter.result({
  "duration": 1198905836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password@123",
      "offset": 22
    },
    {
      "val": "password",
      "offset": 57
    }
  ],
  "location": "AndroidTMSdefs.iEnterThePasswordWithIdOfPassword(String,String)"
});
formatter.result({
  "duration": 1102192746,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//button[@class\u003d\u0027button\u0027]",
      "offset": 30
    }
  ],
  "location": "AndroidTMSdefs.iClickLoginButtonWithId(String)"
});
formatter.result({
  "duration": 825513418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//img[@src\u003d\u0027/assets/img/terminal_management-01.svg\u0027]",
      "offset": 24
    }
  ],
  "location": "AndroidTMSdefs.iClickOnTMSOnLink(String)"
});
formatter.result({
  "duration": 872691780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class\u003d\u0027msg-panel error-login-msg\u0027]//ul[@class\u003d\u0027errorMessage\u0027]",
      "offset": 21
    },
    {
      "val": "1",
      "offset": 104
    }
  ],
  "location": "AndroidTMSdefs.iGetErrorMessageTestcaseId(String,String)"
});
formatter.result({
  "duration": 7408085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//img[@src\u003d\u0027resources/assets/image/icons/drop_down.svg\u0027]",
      "offset": 49
    }
  ],
  "location": "AndroidTMSdefs.iClickOnSideSectionDropdwonBarWithXpath(String)"
});
formatter.result({
  "duration": 3052254599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class \u003d\u0027section-list-wrapper expanded fadein\u0027]//form[@id\u003d\u0027sectionlstform\u0027]//ul[@class\u003d\u0027section-list\u0027]/li[text()\u003d\u0027Config Section\u0027]",
      "offset": 45
    }
  ],
  "location": "AndroidTMSdefs.iClickOnTerminalSectionLinkWithXpath(String)"
});
formatter.result({
  "duration": 1159376186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Currency Management",
      "offset": 29
    }
  ],
  "location": "AndroidTMSdefs.iClickOnSideSectionBar(String)"
});
formatter.result({
  "duration": 1439299402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class\u003d\u0027round-btn f-right\u0027]",
      "offset": 61
    }
  ],
  "location": "AndroidTMSdefs.iClickOnAddMarkForAddApplicationVersionWithXpath(String)"
});
formatter.result({
  "duration": 1037665654,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRN-13",
      "offset": 23
    },
    {
      "val": "acurrencycode",
      "offset": 40
    }
  ],
  "location": "AndroidTMSdefs.iEnterCurrencyCodeWithId(String,String)"
});
formatter.result({
  "duration": 1210022811,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MVR",
      "offset": 20
    },
    {
      "val": "aalpha2code",
      "offset": 34
    }
  ],
  "location": "AndroidTMSdefs.iEnterAlphaCodeWithId(String,String)"
});
formatter.result({
  "duration": 1145864926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MVR",
      "offset": 29
    },
    {
      "val": "adescription",
      "offset": 38
    }
  ],
  "location": "AndroidTMSdefs.iEnterCurrencyDescrptionId(String,String)"
});
formatter.result({
  "duration": 1180613134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    },
    {
      "val": "aexponent",
      "offset": 29
    }
  ],
  "location": "AndroidTMSdefs.iEnterExponentWithId(String,String)"
});
formatter.result({
  "duration": 1357153019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addbtn",
      "offset": 38
    }
  ],
  "location": "AndroidTMSdefs.iClickEnterButtonToAddCurrency(String)"
});
formatter.result({
  "duration": 819935402,
  "status": "passed"
});
formatter.before({
  "duration": 2262863865,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Add Device model",
  "description": "",
  "id": "add-device-model;add-device-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to URL \"http://192.168.1.114:8085\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the username \"nirmal1\" with id of username \"userName\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter the password \"Password@123\" with id of password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click Login button with id \"//button[@class\u003d\u0027button\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on TMS on link \"//img[@src\u003d\u0027/assets/img/terminal_management-01.svg\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I get error message \"//div[@class\u003d\u0027msg-panel error-login-msg\u0027]//ul[@class\u003d\u0027errorMessage\u0027]\" testcase id \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on side section dropdwon bar with xpath \"//img[@src\u003d\u0027resources/assets/image/icons/drop_down.svg\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on Terminal section link with xpath \"//div[@class \u003d\u0027section-list-wrapper expanded fadein\u0027]//form[@id\u003d\u0027sectionlstform\u0027]//ul[@class\u003d\u0027section-list\u0027]/li[text()\u003d\u0027Config Section\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on side section bar \"Currency Management\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on add  mark for add application version with xpath \"//div[@class\u003d\u0027round-btn f-right\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter currency code \"CRN-01\" with id \"acurrencycode\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter alpha code \"LKR\" with id \"aalpha2code\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter currency descrption \"LKR\" id \"adescription\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter exponent \"144\" with id \"aexponent\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click enter button to add currency \"addbtn\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://192.168.1.114:8085",
      "offset": 19
    }
  ],
  "location": "AndroidTMSdefs.iNavigateToURL(String)"
});
formatter.result({
  "duration": 932473637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nirmal1",
      "offset": 22
    },
    {
      "val": "userName",
      "offset": 52
    }
  ],
  "location": "AndroidTMSdefs.iEnterTheUsernameWithIdOfUsername(String,String)"
});
formatter.result({
  "duration": 1019476729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password@123",
      "offset": 22
    },
    {
      "val": "password",
      "offset": 57
    }
  ],
  "location": "AndroidTMSdefs.iEnterThePasswordWithIdOfPassword(String,String)"
});
formatter.result({
  "duration": 1112263112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//button[@class\u003d\u0027button\u0027]",
      "offset": 30
    }
  ],
  "location": "AndroidTMSdefs.iClickLoginButtonWithId(String)"
});
formatter.result({
  "duration": 783255629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//img[@src\u003d\u0027/assets/img/terminal_management-01.svg\u0027]",
      "offset": 24
    }
  ],
  "location": "AndroidTMSdefs.iClickOnTMSOnLink(String)"
});
formatter.result({
  "duration": 1488560148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class\u003d\u0027msg-panel error-login-msg\u0027]//ul[@class\u003d\u0027errorMessage\u0027]",
      "offset": 21
    },
    {
      "val": "1",
      "offset": 104
    }
  ],
  "location": "AndroidTMSdefs.iGetErrorMessageTestcaseId(String,String)"
});
formatter.result({
  "duration": 7143796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//img[@src\u003d\u0027resources/assets/image/icons/drop_down.svg\u0027]",
      "offset": 49
    }
  ],
  "location": "AndroidTMSdefs.iClickOnSideSectionDropdwonBarWithXpath(String)"
});
formatter.result({
  "duration": 3164488631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class \u003d\u0027section-list-wrapper expanded fadein\u0027]//form[@id\u003d\u0027sectionlstform\u0027]//ul[@class\u003d\u0027section-list\u0027]/li[text()\u003d\u0027Config Section\u0027]",
      "offset": 45
    }
  ],
  "location": "AndroidTMSdefs.iClickOnTerminalSectionLinkWithXpath(String)"
});
formatter.result({
  "duration": 1195042136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Currency Management",
      "offset": 29
    }
  ],
  "location": "AndroidTMSdefs.iClickOnSideSectionBar(String)"
});
formatter.result({
  "duration": 1294479660,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class\u003d\u0027round-btn f-right\u0027]",
      "offset": 61
    }
  ],
  "location": "AndroidTMSdefs.iClickOnAddMarkForAddApplicationVersionWithXpath(String)"
});
formatter.result({
  "duration": 892103221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRN-01",
      "offset": 23
    },
    {
      "val": "acurrencycode",
      "offset": 40
    }
  ],
  "location": "AndroidTMSdefs.iEnterCurrencyCodeWithId(String,String)"
});
formatter.result({
  "duration": 1412690851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LKR",
      "offset": 20
    },
    {
      "val": "aalpha2code",
      "offset": 34
    }
  ],
  "location": "AndroidTMSdefs.iEnterAlphaCodeWithId(String,String)"
});
formatter.result({
  "duration": 1220903436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LKR",
      "offset": 29
    },
    {
      "val": "adescription",
      "offset": 38
    }
  ],
  "location": "AndroidTMSdefs.iEnterCurrencyDescrptionId(String,String)"
});
formatter.result({
  "duration": 2059714858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "144",
      "offset": 18
    },
    {
      "val": "aexponent",
      "offset": 32
    }
  ],
  "location": "AndroidTMSdefs.iEnterExponentWithId(String,String)"
});
formatter.result({
  "duration": 1205160970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addbtn",
      "offset": 38
    }
  ],
  "location": "AndroidTMSdefs.iClickEnterButtonToAddCurrency(String)"
});
formatter.result({
  "duration": 1145429861,
  "status": "passed"
});
formatter.before({
  "duration": 2633227647,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Add Device model",
  "description": "",
  "id": "add-device-model;add-device-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to URL \"http://192.168.1.114:8085\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the username \"nirmal1\" with id of username \"userName\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter the password \"Password@123\" with id of password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click Login button with id \"//button[@class\u003d\u0027button\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on TMS on link \"//img[@src\u003d\u0027/assets/img/terminal_management-01.svg\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I get error message \"//div[@class\u003d\u0027msg-panel error-login-msg\u0027]//ul[@class\u003d\u0027errorMessage\u0027]\" testcase id \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on side section dropdwon bar with xpath \"//img[@src\u003d\u0027resources/assets/image/icons/drop_down.svg\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on Terminal section link with xpath \"//div[@class \u003d\u0027section-list-wrapper expanded fadein\u0027]//form[@id\u003d\u0027sectionlstform\u0027]//ul[@class\u003d\u0027section-list\u0027]/li[text()\u003d\u0027Config Section\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on side section bar \"Currency Management\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on add  mark for add application version with xpath \"//div[@class\u003d\u0027round-btn f-right\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter currency code \"\" with id \"acurrencycode\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter alpha code \"USD\" with id \"aalpha2code\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter currency descrption \"USD\" id \"adescription\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter exponent \"4\" with id \"aexponent\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click enter button to add currency \"addbtn\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://192.168.1.114:8085",
      "offset": 19
    }
  ],
  "location": "AndroidTMSdefs.iNavigateToURL(String)"
});
formatter.result({
  "duration": 633837479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nirmal1",
      "offset": 22
    },
    {
      "val": "userName",
      "offset": 52
    }
  ],
  "location": "AndroidTMSdefs.iEnterTheUsernameWithIdOfUsername(String,String)"
});
formatter.result({
  "duration": 733176071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password@123",
      "offset": 22
    },
    {
      "val": "password",
      "offset": 57
    }
  ],
  "location": "AndroidTMSdefs.iEnterThePasswordWithIdOfPassword(String,String)"
});
formatter.result({
  "duration": 68154727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//button[@class\u003d\u0027button\u0027]",
      "offset": 30
    }
  ],
  "location": "AndroidTMSdefs.iClickLoginButtonWithId(String)"
});
formatter.result({
  "duration": 583570324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//img[@src\u003d\u0027/assets/img/terminal_management-01.svg\u0027]",
      "offset": 24
    }
  ],
  "location": "AndroidTMSdefs.iClickOnTMSOnLink(String)"
});
formatter.result({
  "duration": 128809280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class\u003d\u0027msg-panel error-login-msg\u0027]//ul[@class\u003d\u0027errorMessage\u0027]",
      "offset": 21
    },
    {
      "val": "1",
      "offset": 104
    }
  ],
  "location": "AndroidTMSdefs.iGetErrorMessageTestcaseId(String,String)"
});
formatter.result({
  "duration": 7021203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//img[@src\u003d\u0027resources/assets/image/icons/drop_down.svg\u0027]",
      "offset": 49
    }
  ],
  "location": "AndroidTMSdefs.iClickOnSideSectionDropdwonBarWithXpath(String)"
});
formatter.result({
  "duration": 2912797906,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class \u003d\u0027section-list-wrapper expanded fadein\u0027]//form[@id\u003d\u0027sectionlstform\u0027]//ul[@class\u003d\u0027section-list\u0027]/li[text()\u003d\u0027Config Section\u0027]",
      "offset": 45
    }
  ],
  "location": "AndroidTMSdefs.iClickOnTerminalSectionLinkWithXpath(String)"
});
formatter.result({
  "duration": 1151937595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Currency Management",
      "offset": 29
    }
  ],
  "location": "AndroidTMSdefs.iClickOnSideSectionBar(String)"
});
formatter.result({
  "duration": 2019875302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class\u003d\u0027round-btn f-right\u0027]",
      "offset": 61
    }
  ],
  "location": "AndroidTMSdefs.iClickOnAddMarkForAddApplicationVersionWithXpath(String)"
});
formatter.result({
  "duration": 1056944524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 23
    },
    {
      "val": "acurrencycode",
      "offset": 34
    }
  ],
  "location": "AndroidTMSdefs.iEnterCurrencyCodeWithId(String,String)"
});
formatter.result({
  "duration": 1050971356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USD",
      "offset": 20
    },
    {
      "val": "aalpha2code",
      "offset": 34
    }
  ],
  "location": "AndroidTMSdefs.iEnterAlphaCodeWithId(String,String)"
});
formatter.result({
  "duration": 1018158419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USD",
      "offset": 29
    },
    {
      "val": "adescription",
      "offset": 38
    }
  ],
  "location": "AndroidTMSdefs.iEnterCurrencyDescrptionId(String,String)"
});
formatter.result({
  "duration": 1123978231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    },
    {
      "val": "aexponent",
      "offset": 30
    }
  ],
  "location": "AndroidTMSdefs.iEnterExponentWithId(String,String)"
});
formatter.result({
  "duration": 875711863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addbtn",
      "offset": 38
    }
  ],
  "location": "AndroidTMSdefs.iClickEnterButtonToAddCurrency(String)"
});
formatter.result({
  "duration": 1058754635,
  "status": "passed"
});
formatter.before({
  "duration": 2285035662,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Add Device model",
  "description": "",
  "id": "add-device-model;add-device-model;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to URL \"http://192.168.1.114:8085\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the username \"nirmal1\" with id of username \"userName\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter the password \"Password@123\" with id of password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click Login button with id \"//button[@class\u003d\u0027button\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on TMS on link \"//img[@src\u003d\u0027/assets/img/terminal_management-01.svg\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I get error message \"//div[@class\u003d\u0027msg-panel error-login-msg\u0027]//ul[@class\u003d\u0027errorMessage\u0027]\" testcase id \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on side section dropdwon bar with xpath \"//img[@src\u003d\u0027resources/assets/image/icons/drop_down.svg\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on Terminal section link with xpath \"//div[@class \u003d\u0027section-list-wrapper expanded fadein\u0027]//form[@id\u003d\u0027sectionlstform\u0027]//ul[@class\u003d\u0027section-list\u0027]/li[text()\u003d\u0027Config Section\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on side section bar \"Currency Management\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on add  mark for add application version with xpath \"//div[@class\u003d\u0027round-btn f-right\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter currency code \"940\" with id \"acurrencycode\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter alpha code \"\" with id \"aalpha2code\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter currency descrption \"USD\" id \"adescription\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter exponent \"4\" with id \"aexponent\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click enter button to add currency \"addbtn\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://192.168.1.114:8085",
      "offset": 19
    }
  ],
  "location": "AndroidTMSdefs.iNavigateToURL(String)"
});
formatter.result({
  "duration": 1073534598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nirmal1",
      "offset": 22
    },
    {
      "val": "userName",
      "offset": 52
    }
  ],
  "location": "AndroidTMSdefs.iEnterTheUsernameWithIdOfUsername(String,String)"
});
formatter.result({
  "duration": 1131385176,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password@123",
      "offset": 22
    },
    {
      "val": "password",
      "offset": 57
    }
  ],
  "location": "AndroidTMSdefs.iEnterThePasswordWithIdOfPassword(String,String)"
});
formatter.result({
  "duration": 1148317657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//button[@class\u003d\u0027button\u0027]",
      "offset": 30
    }
  ],
  "location": "AndroidTMSdefs.iClickLoginButtonWithId(String)"
});
formatter.result({
  "duration": 1014797354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//img[@src\u003d\u0027/assets/img/terminal_management-01.svg\u0027]",
      "offset": 24
    }
  ],
  "location": "AndroidTMSdefs.iClickOnTMSOnLink(String)"
});
formatter.result({
  "duration": 1038813190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class\u003d\u0027msg-panel error-login-msg\u0027]//ul[@class\u003d\u0027errorMessage\u0027]",
      "offset": 21
    },
    {
      "val": "1",
      "offset": 104
    }
  ],
  "location": "AndroidTMSdefs.iGetErrorMessageTestcaseId(String,String)"
});
formatter.result({
  "duration": 10346915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//img[@src\u003d\u0027resources/assets/image/icons/drop_down.svg\u0027]",
      "offset": 49
    }
  ],
  "location": "AndroidTMSdefs.iClickOnSideSectionDropdwonBarWithXpath(String)"
});
formatter.result({
  "duration": 3431234157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class \u003d\u0027section-list-wrapper expanded fadein\u0027]//form[@id\u003d\u0027sectionlstform\u0027]//ul[@class\u003d\u0027section-list\u0027]/li[text()\u003d\u0027Config Section\u0027]",
      "offset": 45
    }
  ],
  "location": "AndroidTMSdefs.iClickOnTerminalSectionLinkWithXpath(String)"
});
formatter.result({
  "duration": 1023822822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Currency Management",
      "offset": 29
    }
  ],
  "location": "AndroidTMSdefs.iClickOnSideSectionBar(String)"
});
formatter.result({
  "duration": 1399889780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class\u003d\u0027round-btn f-right\u0027]",
      "offset": 61
    }
  ],
  "location": "AndroidTMSdefs.iClickOnAddMarkForAddApplicationVersionWithXpath(String)"
});
formatter.result({
  "duration": 1043274463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "940",
      "offset": 23
    },
    {
      "val": "acurrencycode",
      "offset": 37
    }
  ],
  "location": "AndroidTMSdefs.iEnterCurrencyCodeWithId(String,String)"
});
formatter.result({
  "duration": 1141493745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    },
    {
      "val": "aalpha2code",
      "offset": 31
    }
  ],
  "location": "AndroidTMSdefs.iEnterAlphaCodeWithId(String,String)"
});
formatter.result({
  "duration": 1051768786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USD",
      "offset": 29
    },
    {
      "val": "adescription",
      "offset": 38
    }
  ],
  "location": "AndroidTMSdefs.iEnterCurrencyDescrptionId(String,String)"
});
formatter.result({
  "duration": 848532823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    },
    {
      "val": "aexponent",
      "offset": 30
    }
  ],
  "location": "AndroidTMSdefs.iEnterExponentWithId(String,String)"
});
formatter.result({
  "duration": 53086242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addbtn",
      "offset": 38
    }
  ],
  "location": "AndroidTMSdefs.iClickEnterButtonToAddCurrency(String)"
});
formatter.result({
  "duration": 71344446,
  "status": "passed"
});
formatter.before({
  "duration": 2268380870,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Add Device model",
  "description": "",
  "id": "add-device-model;add-device-model;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to URL \"http://192.168.1.114:8085\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the username \"nirmal1\" with id of username \"userName\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter the password \"Password@123\" with id of password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click Login button with id \"//button[@class\u003d\u0027button\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on TMS on link \"//img[@src\u003d\u0027/assets/img/terminal_management-01.svg\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I get error message \"//div[@class\u003d\u0027msg-panel error-login-msg\u0027]//ul[@class\u003d\u0027errorMessage\u0027]\" testcase id \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on side section dropdwon bar with xpath \"//img[@src\u003d\u0027resources/assets/image/icons/drop_down.svg\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on Terminal section link with xpath \"//div[@class \u003d\u0027section-list-wrapper expanded fadein\u0027]//form[@id\u003d\u0027sectionlstform\u0027]//ul[@class\u003d\u0027section-list\u0027]/li[text()\u003d\u0027Config Section\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on side section bar \"Currency Management\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on add  mark for add application version with xpath \"//div[@class\u003d\u0027round-btn f-right\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter currency code \"940\" with id \"acurrencycode\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter alpha code \"USD\" with id \"aalpha2code\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter currency descrption \"\" id \"adescription\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter exponent \"4\" with id \"aexponent\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click enter button to add currency \"addbtn\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://192.168.1.114:8085",
      "offset": 19
    }
  ],
  "location": "AndroidTMSdefs.iNavigateToURL(String)"
});
formatter.result({
  "duration": 868805272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nirmal1",
      "offset": 22
    },
    {
      "val": "userName",
      "offset": 52
    }
  ],
  "location": "AndroidTMSdefs.iEnterTheUsernameWithIdOfUsername(String,String)"
});
formatter.result({
  "duration": 1098537741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password@123",
      "offset": 22
    },
    {
      "val": "password",
      "offset": 57
    }
  ],
  "location": "AndroidTMSdefs.iEnterThePasswordWithIdOfPassword(String,String)"
});
formatter.result({
  "duration": 1865636651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//button[@class\u003d\u0027button\u0027]",
      "offset": 30
    }
  ],
  "location": "AndroidTMSdefs.iClickLoginButtonWithId(String)"
});
formatter.result({
  "duration": 1089669935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//img[@src\u003d\u0027/assets/img/terminal_management-01.svg\u0027]",
      "offset": 24
    }
  ],
  "location": "AndroidTMSdefs.iClickOnTMSOnLink(String)"
});
formatter.result({
  "duration": 1278115386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class\u003d\u0027msg-panel error-login-msg\u0027]//ul[@class\u003d\u0027errorMessage\u0027]",
      "offset": 21
    },
    {
      "val": "1",
      "offset": 104
    }
  ],
  "location": "AndroidTMSdefs.iGetErrorMessageTestcaseId(String,String)"
});
formatter.result({
  "duration": 6790555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//img[@src\u003d\u0027resources/assets/image/icons/drop_down.svg\u0027]",
      "offset": 49
    }
  ],
  "location": "AndroidTMSdefs.iClickOnSideSectionDropdwonBarWithXpath(String)"
});
formatter.result({
  "duration": 2112772019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class \u003d\u0027section-list-wrapper expanded fadein\u0027]//form[@id\u003d\u0027sectionlstform\u0027]//ul[@class\u003d\u0027section-list\u0027]/li[text()\u003d\u0027Config Section\u0027]",
      "offset": 45
    }
  ],
  "location": "AndroidTMSdefs.iClickOnTerminalSectionLinkWithXpath(String)"
});
formatter.result({
  "duration": 1231043082,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Currency Management",
      "offset": 29
    }
  ],
  "location": "AndroidTMSdefs.iClickOnSideSectionBar(String)"
});
formatter.result({
  "duration": 1667800516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class\u003d\u0027round-btn f-right\u0027]",
      "offset": 61
    }
  ],
  "location": "AndroidTMSdefs.iClickOnAddMarkForAddApplicationVersionWithXpath(String)"
});
formatter.result({
  "duration": 848821347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "940",
      "offset": 23
    },
    {
      "val": "acurrencycode",
      "offset": 37
    }
  ],
  "location": "AndroidTMSdefs.iEnterCurrencyCodeWithId(String,String)"
});
formatter.result({
  "duration": 1083519719,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USD",
      "offset": 20
    },
    {
      "val": "aalpha2code",
      "offset": 34
    }
  ],
  "location": "AndroidTMSdefs.iEnterAlphaCodeWithId(String,String)"
});
formatter.result({
  "duration": 940521776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 29
    },
    {
      "val": "adescription",
      "offset": 35
    }
  ],
  "location": "AndroidTMSdefs.iEnterCurrencyDescrptionId(String,String)"
});
formatter.result({
  "duration": 1100906367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    },
    {
      "val": "aexponent",
      "offset": 30
    }
  ],
  "location": "AndroidTMSdefs.iEnterExponentWithId(String,String)"
});
formatter.result({
  "duration": 954908299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addbtn",
      "offset": 38
    }
  ],
  "location": "AndroidTMSdefs.iClickEnterButtonToAddCurrency(String)"
});
formatter.result({
  "duration": 1161845738,
  "status": "passed"
});
formatter.before({
  "duration": 2288196301,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Add Device model",
  "description": "",
  "id": "add-device-model;add-device-model;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to URL \"http://192.168.1.114:8085\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the username \"nirmal1\" with id of username \"userName\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter the password \"Password@123\" with id of password \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click Login button with id \"//button[@class\u003d\u0027button\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on TMS on link \"//img[@src\u003d\u0027/assets/img/terminal_management-01.svg\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I get error message \"//div[@class\u003d\u0027msg-panel error-login-msg\u0027]//ul[@class\u003d\u0027errorMessage\u0027]\" testcase id \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on side section dropdwon bar with xpath \"//img[@src\u003d\u0027resources/assets/image/icons/drop_down.svg\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on Terminal section link with xpath \"//div[@class \u003d\u0027section-list-wrapper expanded fadein\u0027]//form[@id\u003d\u0027sectionlstform\u0027]//ul[@class\u003d\u0027section-list\u0027]/li[text()\u003d\u0027Config Section\u0027]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on side section bar \"Currency Management\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on add  mark for add application version with xpath \"//div[@class\u003d\u0027round-btn f-right\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter currency code \"973\" with id \"acurrencycode\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter alpha code \"AOA\" with id \"aalpha2code\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter currency descrption \"AOA\" id \"adescription\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter exponent \"\" with id \"aexponent\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click enter button to add currency \"addbtn\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://192.168.1.114:8085",
      "offset": 19
    }
  ],
  "location": "AndroidTMSdefs.iNavigateToURL(String)"
});
formatter.result({
  "duration": 716915860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nirmal1",
      "offset": 22
    },
    {
      "val": "userName",
      "offset": 52
    }
  ],
  "location": "AndroidTMSdefs.iEnterTheUsernameWithIdOfUsername(String,String)"
});
formatter.result({
  "duration": 1006451854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password@123",
      "offset": 22
    },
    {
      "val": "password",
      "offset": 57
    }
  ],
  "location": "AndroidTMSdefs.iEnterThePasswordWithIdOfPassword(String,String)"
});
formatter.result({
  "duration": 1084768750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//button[@class\u003d\u0027button\u0027]",
      "offset": 30
    }
  ],
  "location": "AndroidTMSdefs.iClickLoginButtonWithId(String)"
});
formatter.result({
  "duration": 855128939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//img[@src\u003d\u0027/assets/img/terminal_management-01.svg\u0027]",
      "offset": 24
    }
  ],
  "location": "AndroidTMSdefs.iClickOnTMSOnLink(String)"
});
formatter.result({
  "duration": 956684483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class\u003d\u0027msg-panel error-login-msg\u0027]//ul[@class\u003d\u0027errorMessage\u0027]",
      "offset": 21
    },
    {
      "val": "1",
      "offset": 104
    }
  ],
  "location": "AndroidTMSdefs.iGetErrorMessageTestcaseId(String,String)"
});
formatter.result({
  "duration": 6627191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//img[@src\u003d\u0027resources/assets/image/icons/drop_down.svg\u0027]",
      "offset": 49
    }
  ],
  "location": "AndroidTMSdefs.iClickOnSideSectionDropdwonBarWithXpath(String)"
});
formatter.result({
  "duration": 2990453936,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class \u003d\u0027section-list-wrapper expanded fadein\u0027]//form[@id\u003d\u0027sectionlstform\u0027]//ul[@class\u003d\u0027section-list\u0027]/li[text()\u003d\u0027Config Section\u0027]",
      "offset": 45
    }
  ],
  "location": "AndroidTMSdefs.iClickOnTerminalSectionLinkWithXpath(String)"
});
formatter.result({
  "duration": 1200679170,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Currency Management",
      "offset": 29
    }
  ],
  "location": "AndroidTMSdefs.iClickOnSideSectionBar(String)"
});
formatter.result({
  "duration": 1506390414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[@class\u003d\u0027round-btn f-right\u0027]",
      "offset": 61
    }
  ],
  "location": "AndroidTMSdefs.iClickOnAddMarkForAddApplicationVersionWithXpath(String)"
});
formatter.result({
  "duration": 1112500032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "973",
      "offset": 23
    },
    {
      "val": "acurrencycode",
      "offset": 37
    }
  ],
  "location": "AndroidTMSdefs.iEnterCurrencyCodeWithId(String,String)"
});
formatter.result({
  "duration": 1149235685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AOA",
      "offset": 20
    },
    {
      "val": "aalpha2code",
      "offset": 34
    }
  ],
  "location": "AndroidTMSdefs.iEnterAlphaCodeWithId(String,String)"
});
formatter.result({
  "duration": 1107486517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AOA",
      "offset": 29
    },
    {
      "val": "adescription",
      "offset": 38
    }
  ],
  "location": "AndroidTMSdefs.iEnterCurrencyDescrptionId(String,String)"
});
formatter.result({
  "duration": 1301650825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    },
    {
      "val": "aexponent",
      "offset": 29
    }
  ],
  "location": "AndroidTMSdefs.iEnterExponentWithId(String,String)"
});
formatter.result({
  "duration": 1339666585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addbtn",
      "offset": 38
    }
  ],
  "location": "AndroidTMSdefs.iClickEnterButtonToAddCurrency(String)"
});
formatter.result({
  "duration": 965888994,
  "status": "passed"
});
});