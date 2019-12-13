# Auth by Nirmal Gunarathna
Feature: Add Device model
  Scenario Outline: Add Device model
    Given I navigate to URL "http://192.168.1.114:8085"
    And I enter the username "nirmal1" with id of username "userName"
    And I enter the password "Password@123" with id of password "password"
    Then I click Login button with id "//button[@class='button']"
    Then I click on TMS on link "//img[@src='/assets/img/terminal_management-01.svg']"
    Then I get error message "//div[@class='msg-panel error-login-msg']//ul[@class='errorMessage']" testcase id "1"
    Then I click on side section dropdwon bar with xpath "//img[@src='resources/assets/image/icons/drop_down.svg']"
    Then I click on Terminal section link with xpath "//div[@class ='section-list-wrapper expanded fadein']//form[@id='sectionlstform']//ul[@class='section-list']/li[text()='Config Section']"
    Then I click on side section bar "Currency Management"
    And I click on add  mark for add application version with xpath "//div[@class='round-btn f-right']"

    And I enter currency code "<currency code>" with id "acurrencycode"
    And I enter alpha code "<Alpha2 Code>" with id "aalpha2code"
    And I enter currency descrption "<Currency Description>" id "adescription"
    And I enter exponent "<Exponent>" with id "aexponent"
    Then I click enter button to add currency "addbtn"
    Examples:

    |currency code|Alpha2 Code|Currency Description|Exponent|
    |||LKR|144     |
    |CRN-04       ||||
    |CRN-01       |LKR         ||144     |
    |CRN-13       |MVR         |MVR                ||
    |CRN-01       |LKR         |LKR                |144     |
    ||USD         |USD                |4     |
    |940       ||USD                |4     |
    |940       |USD         ||4     |
    |973    |AOA|AOA||
