Feature: Schedule verification extra scenarios

    Scenario: Scheduled date check
        When I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
        Then I should see the "scheduled_start" date value is before the "scheduled_end" date

    Scenario: episode, version serice Id fields check
        When I make a GET request to "https://testapi.io/api/RMSTest/ibltest"  
        Then I should see the "episode_id" field is never null or empty for all items
        And I should see the "version_id" field is never null or empty for all items
        And I should see the "service_id" field is never null or empty for all items

    Scenario: TV license flag check
        When I make a GET request to "https://testapi.io/api/RMSTest/ibltest"  
        Then the "requires_tv_licence" in "episode" for every item is always "true"

